<script lang="ts">
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";

  type widthOptions = "normal" | "midi" | "maxi";
  /**
   * Width options. "normal" | "midi" | "maxi".
   * @type {string}
   */
  export let width: widthOptions = "normal";
  export let classes = "";
  export let gap = "0.8em";
  export let flex = true;

  export let caption = "";
  export let credit = "";
  export let desktop = true;
  export let mobile = true;
</script>

<MobileOrDesktop {desktop} {mobile}>
  <div
    class={classes + " " + "layout"}
    class:maxi={width === "maxi"}
    class:midi={width === "midi"}
    class:normal={width === "normal"}
    class:gapMobileFix={flex}
    class:layoutFlex={flex}
    style="gap: {gap};"
  >
    <slot />
  </div>
  {#if caption || credit}
    <p class="caption" class:maxi={width === "maxi"} class:midi={width === "midi"} class:normal={width === "normal"}>
      {caption}
      {#if credit}
        <span class="credit">
          ©&nbsp;{credit}
        </span>
      {/if}
    </p>
  {/if}
</MobileOrDesktop>

<style>
  .layout {
    display: flex;
    justify-content: center;
    gap: 0.8em;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 97%;
    margin-top: -1em;
    margin-bottom: -1em;
  }

  .credit {
    color: #828282;
    font-family: Libre Franklin, Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: normal;
    font-size: 0.8em;
  }

  .caption {
    font-size: 0.9rem;
    font-family: Libre Franklin, sans-serif;
    margin: 0;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    line-height: normal;
    margin-top: 0.5em;
  }
  .caption.maxi {
    max-width: 97%;
  }

  @media only screen and (max-width: 650px) {
    .layoutFlex {
      display: flex;
      flex-direction: column;
      max-width: 90%;
    }

    .caption.maxi,
    .caption {
      max-width: 90%;
    }

    .caption {
      margin-top: 0em;
    }
    .layout {
      margin-top: 0;
      margin-bottom: 0;
    }

    .gapMobileFix {
      gap: 0 !important;
    }
  }
</style>
