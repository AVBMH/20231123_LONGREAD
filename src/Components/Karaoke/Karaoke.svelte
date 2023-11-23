<script context="module">
  let current;
  import { writable, derived } from "svelte/store";
  export const muteGeneral = writable(true);
</script>

<script>
  import { onDestroy, onMount } from "svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import flattenTranscription from "./FlattenKaraokeJson";
  import { RefreshCcwIcon, Volume2Icon, VolumeXIcon } from "svelte-feather-icons";
  import { inview } from "svelte-inview";

  export let mp3;
  export let lottie = true;
  export let progress = true;
  export let name = "";
  export let image = "";
  export let json;

  let duration = 0;
  let currentTime = 0;
  let paused = true;
  let resetButton = false;
  let subtitles;
  let element;
  let lottieKaraoke;
  let interval;
  let resetClicked;
  let audioPaused = true;

  $: untilEnd = Math.max(0, duration - currentTime);
  $: isInView = false;
  $: syncData = flattenTranscription(json);

  function updateTimestamp() {
    currentTime += 0.2;
  }

  function clear() {
    clearInterval(interval);
  }

  function reset() {
    resetButton = true;
    paused = true;
    audioPaused = true;
  }

  $: if (isInView && !resetButton) {
    paused = false;
  }

  $: if (duration < currentTime && !resetButton) {
    reset();
  }

  $: if (isInView && !resetButton && audioPaused && !paused) {
    interval = setInterval(updateTimestamp, 200);
  }

  $: if ((audioPaused && !isInView && !resetButton && currentTime >= duration) || (paused && resetButton)) {
    clearInterval(interval);
  }

  $: if (!audioPaused && !paused) {
    clearInterval(interval);
  }

  $: if (!$muteGeneral && isInView && !resetButton) {
    paused = false;
    audioPaused = false;
    clear();
  }

  $: if (!isInView && !resetButton) {
    paused = true;
    audioPaused = true;
    clear();
  }

  const options = {
    rootMargin: "-45%",
  };

  const handleChange = ({ detail }) => (isInView = detail.inView);

  function create() {
    subtitles.innerHTML = "";
    for (var i = 0; i < syncData.length; i++) {
      element = document.createElement("span");
      element.setAttribute("id", "c_" + i);
      element.innerText = syncData[i].text + " ";
      subtitles.appendChild(element);
    }
  }

  $: {
    syncData.forEach(function (element, index) {
      if (currentTime >= element.start) subtitles.children[index].style.color = textColor;
    });
  }

  $: if (resetClicked) {
    currentTime = 0;
    create();
    resetClicked = false;
  }

  $: if (lottieKaraoke) {
    resetButton || !isInView ? lottieKaraoke.pause() : lottieKaraoke.play();
  }

  let textColor = getComputedStyle(document.documentElement).getPropertyValue("--text-color");
  onMount(() => {
    create();
  });
</script>

<audio
  bind:currentTime
  bind:duration
  bind:paused={audioPaused}
  bind:muted={$muteGeneral}
  on:play={(e) => {
    const audio = e.currentTarget;
    resetButton = false;
    if (audio !== current) {
      current?.pause();
      current = audio;
    }
  }}
  src={mp3}
/>
<div class="normal karaoke" use:inview={options} on:inview_change={handleChange}>
  {#if progress}
    <div class="progressTime">
      <p class="time">00:{untilEnd.toFixed(0).padStart(2, "0")}</p>
      <div class="slider">
        <div class="progress" style="--progress: {currentTime / duration}%" />
      </div>
    </div>
  {/if}
  <p bind:this={subtitles} class="text" />
  {#if image || name}
    <div class="persoon">
      {#if image}
        <img src={image} class="avatar" />
      {/if}
      {#if name}
        <p class="naam">{name}</p>
      {/if}
    </div>
  {/if}

  {#if resetButton && audioPaused && !$muteGeneral}
    <button
      on:click={() => {
        resetButton = false;
        paused = false;
        audioPaused = !audioPaused;
        resetClicked = true;
      }}
    >
      <RefreshCcwIcon size="20" class="icon" /> Opnieuw
    </button>
  {:else if resetButton && $muteGeneral}
    <button
      on:click={() => {
        resetButton = false;
        paused = false;
        resetClicked = true;
      }}
    >
      <RefreshCcwIcon size="20" class="icon" /> Opnieuw
    </button>
  {/if}

  {#if !resetButton}
    <button
      on:click={() => {
        audioPaused = !audioPaused;
        muteGeneral.set(!$muteGeneral);
      }}
    >
      {#if !audioPaused && !resetButton}
        <VolumeXIcon size="20" class="icon" />Geluid dempen
      {:else}
        <Volume2Icon size="20" class="icon" /> Geluid aan
      {/if}
    </button>
  {/if}

  {#if lottie}
    <div>
      <LottiePlayer bind:this={lottieKaraoke} src="https://assets6.lottiefiles.com/packages/lf20_mpcjfie1.json" loop controls={false} renderer="svg" />
    </div>
  {/if}
</div>

<style>
  .unmute {
    border: 3px solid var(--accent);
    padding: 25px;
    background-color: #000000cc;
    font-family: "Libre Franklin", Arial, sans-serif;
    font-size: 1.1rem;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1em;
  }

  .unmute button {
    background-color: transparent;
    border: 1px solid;
    padding: 8px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 4px;
    border-color: white;
    color: white;
    cursor: pointer;
  }

  .unmute button:hover {
    background-color: white !important;
    border-color: white !important;
    color: var(--accent) !important;
  }
  .unmute p {
    color: white;
    text-align: center;
  }

  .blur {
    filter: blur(3px);
  }

  .opacity {
    opacity: 0.2;
  }

  .karaoke {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .progressTime {
    width: 75px;
    margin-bottom: 2em;
  }

  .persoon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1em;
  }
  .persoon .naam {
    font-family: Libre Franklin, Helvetica, Arial, sans-serif;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 500;
  }
  .avatar {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    object-fit: cover;
  }

  .text {
    text-align: center;
    font-size: 1.8em;
    color: rgba(128, 128, 128, 0.585);
    line-height: 1.5em;
    margin-bottom: 1em;
  }

  :global(.lottie-player) {
    width: 150px;
    color: black;
    opacity: 0.3;
  }

  :global(.lottie-player path) {
    fill: var(--accent);
  }

  .time {
    font-size: 13px;
    font-family: "libre franklin";
    text-align: center;
    margin: 0px;
    color: var(--accent);
  }
  button {
    background-color: transparent;
    border: 1px solid;
    padding: 8px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 4px;
    border-color: var(--accent);
    color: var(--accent);
    cursor: pointer;
  }

  button:hover:enabled {
    background-color: var(--accent);
    border-color: var(--accent);
    color: var(--bg-color);
  }

  .progress {
    width: calc(100 * var(--progress));
    height: 2px;
    background: var(--accent);
    border-radius: 0.5em;
  }
  .slider {
    flex: 1;
    height: 2px;
    background: rgba(128, 128, 128, 0.39);
    border-radius: 10px;
    overflow: hidden;
  }

  @media only screen and (max-width: 650px) {
    .progressTime {
      width: 75px;
      margin-bottom: 1em;
    }
    .persoon {
      margin-bottom: 1em;
    }

    .avatar {
      width: 85px;
      height: 85px;
    }

    .text {
      font-size: 1.5em;
      line-height: 1.5em;
    }

    :global(.lottie-player) {
      width: 100px;
    }

    .time {
      font-size: 13px;
      font-family: "libre franklin";
      text-align: center;
      margin: 0px;
      color: var(--accent);
    }
    button {
      background-color: transparent;
      border: 1px solid;
      padding: 8px;
      padding-left: 15px;
      padding-right: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-radius: 5px;
      border-color: var(--accent);
      color: var(--accent);
      cursor: pointer;
    }
  }
</style>
