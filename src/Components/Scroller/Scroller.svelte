<script>
  import Scroller from "@sveltejs/svelte-scroller";

  let count;
  let index;
  let offset;
  let progress;
  let top = 0;
  let threshold = 0.1;
  let bottom = 0.7;
  export let foregroundPosition = "right";
  export let fullscreen = true;
  export let background = [];
  export let preload = 1;
  export let stackBackground = true;

  $: if (fullscreen) {
    bottom = 0.75;
  }
</script>

<div class="Scroller">
  <Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
    <div
      slot="background"
      class:backgroundFull={fullscreen}
      class:backgroundHalfCenter={!fullscreen && foregroundPosition == "center"}
      class:backgroundHalfRight={!fullscreen && foregroundPosition == "left"}
      class:backgroundHalfLeft={!fullscreen && foregroundPosition == "right"}
    >
      {#each background as step, i}
        {#if preload === 0 || (i >= (stackBackground ? 0 : index - preload) && i <= index + preload)}
          <div
            class="step-background step-{i + 1}"
            class:visible={stackBackground ? i <= index : i === index}
            class:hidden={stackBackground ? i > index : i !== index}
          >
            {#if step.includes(".mp4")}
              <video
                preload="auto"
                autoplay={true}
                loop={true}
                muted={true}
                playsinline={true}
                disablepictureinpicture={true}
                class="video"
              >
                <source src={step} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            {:else}
              <img src={step} class="image" alt="" />
            {/if}
          </div>
        {/if}
      {/each}
    </div>
    <div
      slot="foreground"
      class="foreground {foregroundPosition}"
      class:sectionBackground={fullscreen}
      class:halfScreen={!fullscreen && foregroundPosition == "center"}
    >
      <section />
      <slot />
    </div>
  </Scroller>
</div>

<style>
  @import "../../Article.css";
  .step-background {
    width: 100%;
    position: absolute;
    transition: 0.5s opacity ease;
  }

  .step-background .image,
  .step-background .video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .step-background.hidden {
    opacity: 0;
  }
  .Scroller {
    margin-top: 2em;
  }
  .flourishken {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: none;
  }

  [slot="foreground"] {
    margin: auto;
  }

  .backgroundHalfCenter {
    position: relative;
    height: 50vh;
    z-index: 999;
    overflow: hidden;
  }

  .backgroundFull {
    width: 100%;
    overflow: hidden;
    height: 100vh;
  }

  .backgroundHalfRight {
    width: 50%;
    overflow: hidden;
    height: 100vh;
    margin-top: auto;
    margin-bottom: auto;
    transform: scale(0.85);
    float: right;
  }

  .backgroundHalfLeft {
    width: 50%;
    overflow: hidden;
    height: 100vh;
    margin-top: auto;
    margin-bottom: auto;
    transform: scale(0.85);
    float: left;
  }

  :global(.sectionBackground section) {
    background-color: rgba(0, 0, 0, 0.639);
    color: rgb(255, 255, 255) !important;
  }

  :global(
      .sectionBackground section p,
      .sectionBackground section h1,
      .sectionBackground section h2,
      .sectionBackground section h3,
      .sectionBackground section h4
    ) {
    color: rgb(255, 255, 255) !important;
  }
  :global(.Scroller section) {
    height: fit-content;
    margin-bottom: 100vh;
    color: var(--text-color);
    position: relative;
    padding: 1.2em;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }

  :global(.Scroller section:first-child) {
    margin-bottom: 50vh;
    opacity: 0;
  }

  :global(.Scroller section:last-child) {
    margin-bottom: 34vh;
  }
  :global(.Scroller section div p) {
    margin: 0;
    font-size: 20px !important;
    line-height: 30px !important;
  }

  div.foreground {
    width: 100%;
  }
  div.foreground.right {
    width: 50%;
    margin-left: auto;
    margin-right: 2em;
  }
  div.foreground.left {
    width: 50%;
    margin-left: 2em;
    margin-right: auto;
  }

  @media (max-width: 1050px) {
    div.foreground.center {
      width: 90%;
      float: none;
      margin-left: auto;
      margin-right: auto;
    }

    div.foreground.right {
      width: 90%;
      float: none;
      margin-left: auto;
      margin-right: auto;
    }

    div.foreground.left {
      width: 90%;
      float: none;
      margin-left: auto;
      margin-right: auto;
    }

    .backgroundHalfRight {
      width: 100%;
      overflow: hidden;
      height: 100vh;
      margin-top: auto;
      margin-bottom: auto;
      transform: scale(1);
      float: none;
    }

    .backgroundHalfLeft {
      width: 100%;
      overflow: hidden;
      height: 100vh;
      margin-top: auto;
      margin-bottom: auto;
      transform: scale(1);
      float: none;
    }

    :global(.Scroller section) {
      background-color: rgba(0, 0, 0, 0.639);
      color: rgb(255, 255, 255);
    }
    :global(.Scroller section:last-child) {
      margin-bottom: 35vh;
    }
    .Scroller {
      margin-top: 2em;
    }
  }
</style>
