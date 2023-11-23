<script>
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";
  import Scrollhero from "./Scrollhero.svelte";
  export let afbeelding = null;
  export let video = null;
  export let label = "";
  export let sublabel = "";
  export let titel = "";
  export let scroll = true;
  export let classes = "";
  export let opacity = false;
  export let poster = afbeelding;
  export let horizontal = "center";
  export let vertical = "center";
  export let verticalMobile = vertical;
  export let desktop = true;
  export let mobile = true;
  let y;
</script>

<svelte:head>
  {#if titel}
    <title>{titel}</title>
  {/if}
</svelte:head>

<svelte:window bind:scrollY={y} />
<MobileOrDesktop {desktop} {mobile}>
  <div class={classes + " " + "header"}>
    <div
      class="titel"
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
      <div class="flexdirection">
        <h3>
          {label}
          <span style="font-weight: 600; margin-left: 2px">
            {sublabel}
          </span>
        </h3>
        <h2>
          {titel}
        </h2>
      </div>
    </div>
    {#if scroll}
      <Scrollhero />
    {/if}
    {#if opacity}
      <div style="opacity: {1 - Math.max(0, y / 200)}" class="opacitybackground" />
    {/if}
    {#if video}
      <video
        preload="auto"
        autoplay={true}
        loop={true}
        muted={true}
        playsinline={true}
        disablepictureinpicture={true}
        class="video"
        {poster}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    {:else}
      <img src={afbeelding} alt="" class="afbeelding" />
    {/if}
  </div>
</MobileOrDesktop>

<style>
  .flexdirection {
    display: flex;
    flex-direction: column;
  }
  .opacitybackground {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .header {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .titel {
    position: absolute;
    height: auto;
    top: 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    padding: 8%;
    display: flex;
    z-index: 2;
    box-sizing: border-box;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }
  .titel h3 {
    margin-bottom: 0.75rem;
    font-family: Libre Franklin, sans-serif;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
  }

  .titel h2 {
    font-family: Arnhem, serif;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 2.5rem;
    color: white;
    margin-top: 0;
  }

  .afbeelding {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .horizontalLeft {
    justify-content: left;
    text-align: left;
  }

  .horizontalCenter {
    justify-content: center;
    text-align: center;
  }
  .horizontalRight {
    justify-content: right;
    text-align: left;
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
  @media only screen and (max-width: 650px) {
    .titel {
      width: 90%;
      padding-left: 0%;
      padding-right: 0%;
      padding-top: 25%;
      padding-bottom: 25%;
    }
    .titel h3 {
      font-size: 1em;
    }

    .titel h2 {
      font-family: Arnhem, serif;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 2.2rem;
      color: white;
      margin-top: 0;
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
    .horizontalLeft {
      text-align: center;
    }

    .horizontalRight {
      text-align: center;
    }
  }
</style>
