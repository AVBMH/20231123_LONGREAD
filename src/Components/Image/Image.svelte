<script lang="ts">
  import { inview } from "svelte-inview";
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";

  export let width = "normal";
  export let url;
  export let mobileUrl = url;
  export let caption = "";
  export let credit = "";
  export let classes = "";
  export let ratio = "1";
  export let fixed = false;
  export let desktop = true;
  export let mobile = true;
  export let horizontal = "center";
  export let vertical = "top";
  export let verticalMobile = vertical;

  type fitOptions = "cover" | "contain";
  /**
   * fit options. "cover" | "contain".
   * @type {string}
   */
  export let fit: fitOptions = "cover";

  let isInView;
  const options = {
    rootMargin: "350px",
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }) => (isInView = detail.inView);

  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<MobileOrDesktop {desktop} {mobile}>
  <div class={classes + " " + "image"} class:mini={width === "mini"} class:maxi={width === "maxi"} class:midi={width === "midi"} class:normal={width === "normal"} class:screen={width === "screen"} class:mobileDouble={ratio != "1"} class:fixedHeight={fixed} use:inview={options} on:inview_change={handleChange} style="flex: {ratio}">
    {#if $$slots.default}
      <div class="quoteOverlay" class:horizontalLeft={horizontal == "left"} class:horizontalCenter={horizontal == "center"} class:horizontalRight={horizontal == "right"} class:verticalTop={vertical == "top"} class:verticalCenter={vertical == "center"} class:verticalBottom={vertical == "bottom"} class:verticalTopMobile={verticalMobile == "top" && vertical !== verticalMobile} class:verticalCenterMobile={verticalMobile == "center" && vertical !== verticalMobile} class:verticalBottomMobile={verticalMobile == "bottom" && vertical !== verticalMobile}>
        <div>
          <slot />
        </div>
      </div>
    {/if}
    {#if isInView}
      {#if fixed && screenWidth > 650}
        <div class="parallax" style="background-image: url({url})" />
        {#if caption || credit}
          <p class="caption parallaxCaption">
            {caption}
            {#if credit}
              <span class="credit">
                ©&nbsp;{credit}
              </span>
            {/if}
          </p>
        {/if}
      {:else}
        {#if screenWidth > 650}
          {#if width == "normal" || width == "mini"}
            <img src={url + "?maxwidth=600&scale=both"} alt={caption} class="img" style="object-fit: {fit};" />
          {:else if width == "midi"}
            <img src={url + "?maxwidth=1200&scale=both"} alt={caption} class="img" style="object-fit: {fit};" />
          {:else if width == "screen" || width == "maxi"}
            <img src={url} alt={caption} class="img" style="object-fit: {fit};" />
          {:else}
            <img src={url + `?maxwidth=${width.replace(/[^0-9]/g, "")}&scale=both`} alt={caption} class="img" style="object-fit: {fit}; width: {width}" />
          {/if}
        {:else if width == "screen"}
          <img src={mobileUrl} alt={caption} class="img" style="object-fit: {fit};" />
        {:else}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <img src={mobileUrl + "?maxwidth=650&scale=both"} alt={caption} class="img" style="object-fit: {fit};" />
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
    {/if}
  </div>
</MobileOrDesktop>

<style>
  :global(.lightbox .icon, .image .icon) {
    margin-right: 0px;
    color: #fff;
  }

  .uitleg {
    position: fixed;
    z-index: 999;

    bottom: 6%;
    font-size: 22px;
    font-family: "libre franklin";
    color: white;
    text-align: center;
    font-weight: 500;
  }
  img {
    height: 100%;
    object-fit: contain;
  }

  .parallax {
    min-height: 70vh;
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .fixedHeight {
    height: fit-content;
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

  .quoteOverlay {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 8%;
    box-sizing: border-box;
    z-index: 1;
  }
  .image {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  .credit {
    color: #828282;
    font-family: Libre Franklin, Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: normal;
    font-size: 0.8em;
  }
  .img {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .maxi .caption {
    margin-left: 0.5em;
  }
  .caption {
    font-size: 0.9rem;
    font-family: Libre Franklin, sans-serif;
    margin: 0;
    padding: 0;
    margin-top: 0.5em;
    line-height: normal;
  }

  .parallaxCaption {
    margin-top: 0.5em;
  }

  @media only screen and (max-width: 650px) {
    .image {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }

    :global(.layout .mobileDouble .img) {
      height: 650px !important;
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
</style>
