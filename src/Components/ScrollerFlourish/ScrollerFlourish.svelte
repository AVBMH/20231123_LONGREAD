<script>
  import Scroller from "@sveltejs/svelte-scroller";

  let count;
  let index;
  let offset;
  let progress;
  let top = 0;
  let threshold = 0.7;
  let bottom = 0.7;
  export let src = "";
  export let foregroundPosition = "right";
  export let fullscreen = false;

  $: if (fullscreen) {
    bottom = 0.75;
  }
</script>

<div class="ScrollerFlourish">
  <Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
    <div slot="background" class:backgroundFull={fullscreen} class:backgroundHalfCenter={!fullscreen && foregroundPosition == "center"} class:backgroundHalfRight={!fullscreen && foregroundPosition == "left"} class:backgroundHalfLeft={!fullscreen && foregroundPosition == "right"}>
      <iframe title="flourish" class="flourishken" src="https://flo.uri.sh/{src}/embed#slide-{index - 1}" />
    </div>
    <div slot="foreground" class="foreground {foregroundPosition}" class:sectionBackground={fullscreen} class:halfScreen={!fullscreen && foregroundPosition == "center"}>
      <section />
      <slot />
    </div>
  </Scroller>
</div>

<style>
  .ScrollerFlourish {
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

  :global(.sectionBackground section p, .sectionBackground section h1, .sectionBackground section h2, .sectionBackground section h3, .sectionBackground section h4) {
    color: rgb(255, 255, 255) !important;
  }
  :global(.ScrollerFlourish section) {
    height: fit-content;
    margin-bottom: 100vh;
    color: var(--text-color);
    position: relative;
    padding: 1.2em;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }

  :global(.ScrollerFlourish section:first-child) {
    margin-bottom: 30vh;
    opacity: 0;
  }

  :global(.ScrollerFlourish section:last-child) {
    margin-bottom: 34vh;
  }
  :global(.ScrollerFlourish section div p) {
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

    :global(.ScrollerFlourish section) {
      background-color: rgba(0, 0, 0, 0.639);
      color: rgb(255, 255, 255);
    }
    :global(.ScrollerFlourish section:last-child) {
      margin-bottom: 35vh;
    }
    .ScrollerFlourish {
      margin-top: 2em;
    }
  }
</style>
