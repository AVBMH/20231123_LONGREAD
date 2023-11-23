<script>
  import { inview } from "svelte-inview";
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";

  export let url;
  export let width = "normal";
  export let mobileUrl = url;
  export let caption = "";
  export let credit = "";
  export let classes = "";
  export let ratio = "1";
  export let poster = "";
  export let autoplay = true;
  export let float = false;
  export let horizontal = "center";
  export let vertical = "center";
  export let verticalMobile = vertical;
  export let desktop = true;
  export let mobile = true;

  let isInView;
  const options = {
    rootMargin: "250px",
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }) => (isInView = detail.inView);

  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<MobileOrDesktop {desktop} {mobile}>
  <div
    class={classes + " " + "video"}
    class:maxi={width === "maxi"}
    class:midi={width === "midi"}
    class:normal={width === "normal"}
    class:screen={width === "screen"}
    class:mini={width === "mini"}
    class:float
    class:mobileDouble={ratio != "1"}
    use:inview={options}
    on:inview_change={handleChange}
    style="flex: {ratio}"
  >
    {#if $$slots.default}
      <div
        class="quoteOverlay"
        class:horizontalLeft={horizontal == "left"}
        class:horizontalCenter={horizontal == "center"}
        class:horizontalRight={horizontal == "right"}
        class:verticalTop={vertical == "top"}
        class:verticalCenter={vertical == "center"}
        class:verticalBottom={vertical == "bottom"}
        class:verticalTopMobile={verticalMobile == "top" && vertical !== verticalMobile}
        class:verticalCenterMobile={verticalMobile == "center" && vertical !== verticalMobile}
        class:verticalBottomMobile={verticalMobile == "bottom" && vertical !== verticalMobile}
      >
        <div>
          <slot />
        </div>
      </div>
    {/if}
    {#if isInView}
      {#if screenWidth > 650}
        <video
          preload=""
          {autoplay}
          controls={!autoplay}
          loop={true}
          muted={autoplay}
          playsinline={true}
          disablepictureinpicture={true}
          {poster}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      {:else}
        <video
          preload=""
          {autoplay}
          controls={!autoplay}
          loop={true}
          muted={autoplay}
          playsinline={true}
          disablepictureinpicture={true}
          {poster}
        >
          <source src={mobileUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      {/if}

      {#if caption || credit}
        <p class="caption">
          {caption}
          {#if credit}
            <span class="credit">
              ©&nbsp;{credit}
            </span>
          {/if}
        </p>
      {/if}
    {/if}
  </div>
</MobileOrDesktop>

<style>
  .quoteOverlay {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 8%;
    box-sizing: border-box;
    z-index: 1;
  }

  .horizontalLeft {
    justify-content: left;
  }

  .horizontalCenter {
    justify-content: center;
  }
  .horizontalRight {
    justify-content: right;
  }
  .verticalTop {
    align-items: start;
  }
  .verticalCenter {
    align-items: center;
  }

  .verticalBottom {
    align-items: end;
  }

  .video {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    position: relative;
    min-height: 100%;
  }

  .float {
    float: right;
    margin: 1em -250px 1em 2em !important;
    width: 250px !important;
    max-width: 250px !important;
  }

  .credit {
    color: #828282;
    font-family: Libre Franklin, Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: normal;
    font-size: 0.8em;
  }
  .video video {
    width: 100%;
    object-fit: cover;
    height: 100%;
    max-height: 100vh;
  }

  .caption {
    font-size: 0.9rem;
    font-family: Libre Franklin, sans-serif;
    margin: 0;
    padding: 0;
    line-height: normal;
    margin-top: 0.5em;
  }

  @media only screen and (max-width: 650px) {
    .image {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    :global(.layout .mobileDouble .img) {
      height: 400px !important;
    }

    .verticalTopMobile {
      align-items: start;
    }
    .verticalCenterMobile {
      align-items: center;
    }

    .verticalBottomMobile {
      align-items: end;
    }
  }

  @media only screen and (max-width: 1150px) {
    .float {
      float: none;
      margin: 0 !important;
      width: auto !important;
      max-width: none !important;
    }
  }
</style>
