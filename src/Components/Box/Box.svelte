<script>
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";

  export let width = "normal";
  export let widthMobile = width;
  export let classes = "";
  export let desktop = true;
  export let mobile = true;
  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<MobileOrDesktop {desktop} {mobile}>
  {#if width === "normal" || width === "maxi" || width === "midi" || width == "mini"}
    {#if screenWidth > 650}
      <div class={classes + " " + "box width-90 mx-auto"} class:maxi={width === "maxi"} class:midi={width === "midi"} class:normal={width === "normal"} class:mini={width === "mini"}>
        <slot />
      </div>
    {:else}
      <div class={classes + " " + "box width-90 mx-auto"} class:maxi={widthMobile === "maxi"} class:midi={widthMobile === "midi"} class:normal={widthMobile === "normal"} class:mini={widthMobile === "mini"}>
        <slot />
      </div>
    {/if}
  {:else if screenWidth > 650}
    <div class={classes + " " + "box width-100 mx-auto"} style="max-width: {width};">
      <slot />
    </div>
  {:else}
    <div class={classes + " " + "box width-100 mx-auto"} style="max-width: {widthMobile};">
      <slot />
    </div>
  {/if}
</MobileOrDesktop>

<style>
  .box {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .width-100 {
    width: 100%;
    height: auto;
  }
</style>
