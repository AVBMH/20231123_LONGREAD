<script>
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";
  import { onMount } from "svelte";
  export let width = "normal";
  export let url = "";
  export let desktop = true;
  export let mobile = true;
</script>

<MobileOrDesktop {desktop} {mobile}>
  <div
    class="lottie"
    class:maxi={width === "maxi"}
    class:midi={width === "midi"}
    class:normal={width === "normal"}
    class:screen={width === "screen"}
  >
    <LottiePlayer src={url} autoplay={true} loop={true} controls={false} renderer="svg" />
  </div>
</MobileOrDesktop>

<style>
  .lottie {
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
