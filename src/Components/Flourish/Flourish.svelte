<script>
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";

  export let width = "normal";
  export let url = "";
  export let desktop = true;
  export let mobile = true;
</script>

<svelte:head>
  <script src="https://public.flourish.studio/resources/embed.js">
  </script>
</svelte:head>
<MobileOrDesktop {desktop} {mobile}>
  <div class="flourish" class:maxi={width === "maxi"} class:midi={width === "midi"} class:normal={width === "normal"} class:screen={width === "screen"}>
    <div class="flourish-embed flourish-chart" data-src={url} />
  </div>
</MobileOrDesktop>

<style>
  .flourish {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
</style>
