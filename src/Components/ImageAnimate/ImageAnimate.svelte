<script>
  import { fade } from "svelte/transition";
  import { inview } from "svelte-inview";
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";

  export let width = "normal";
  export let url1;
  export let url2;
  export let duration = 2000;
  export let delay = 500;
  export let classes = "";
  export let desktop = true;
  export let mobile = true;
  export let once = true;

  let isInView;
  let isInViewAnimation;

  const options = {
    rootMargin: "350px",
    unobserveOnEnter: true,
  };

  const optionsAnimation = {
    rootMargin: "-50%",
    unobserveOnEnter: once,
  };

  const handleChange = ({ detail }) => (isInView = detail.inView);
  const handleChangeAnimation = ({ detail }) => (isInViewAnimation = detail.inView);

  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<MobileOrDesktop {desktop} {mobile}>
  <div
    class={classes + " " + "image"}
    class:maxi={width === "maxi"}
    class:midi={width === "midi"}
    class:normal={width === "normal"}
    class:screen={width === "screen"}
    use:inview={options}
    on:inview_change={handleChange}
  >
    <div use:inview={optionsAnimation} on:inview_change={handleChangeAnimation}>
      {#if isInView}
        <img src={url1} alt="" class="img" />
        {#if isInViewAnimation}
          <img src={url2} alt="" class="img top" in:fade={{ duration: duration, delay: delay }} />
        {/if}
      {/if}
    </div>
  </div>
</MobileOrDesktop>

<style>
  .top {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  img {
    height: 100%;
    object-fit: contain;
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
  .img {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 650px) {
    .image {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
</style>
