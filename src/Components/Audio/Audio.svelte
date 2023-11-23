<script context="module">
  let current;
</script>

<script>
  import { Volume2Icon, VolumeXIcon } from "svelte-feather-icons";

  export let url;
  export let highlightColor = "rgba(252, 217, 190, 0.4)";

  let active = false;
  let duration = 0;
  let currentTime = 0;
  let paused = true;
  $: percentagePlayed = (currentTime / duration) * 100;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span class:active={active == true} on:click={() => (paused = !paused)} class="audio">
  {#if paused}
    <Volume2Icon size="18" class="icon" />
  {:else}
    <VolumeXIcon size="18" class="icon" />
  {/if}
  <span class="audioText" style="background: linear-gradient(90deg, {highlightColor} 0%, {highlightColor} {percentagePlayed}%, var(--bg-color) {percentagePlayed}%, var(--bg-color) 100%)">
    <slot />
  </span>
  <audio
    src={url}
    bind:currentTime
    bind:duration
    bind:paused
    on:play={(e) => {
      const audio = e.currentTarget;

      if (audio !== current) {
        current?.pause();
        current = audio;
      }
    }}
    on:ended={() => {
      currentTime = 0;
    }}
  />
</span>

<style>
  .audio {
    cursor: pointer;
    margin-left: 5px;
  }

  .audioText {
    color: var(--accent);

    text-decoration: none;
  }

  :global(.audio .feather.feather-volume-2.icon),
  :global(.audio .feather.feather-volume-x.icon) {
    color: var(--accent);
    fill: var(--accent);
  }
</style>
