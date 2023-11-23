<script>
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";

  export let dmf;
  export let text;
  export let desktop = true;
  export let mobile = true;
</script>

<MobileOrDesktop {desktop} {mobile}>
  <div class="socialbar">
    <div class="pluslogo" />
    <div class="social-media">
      <a href="http://www.facebook.com/sharer/sharer.php?u=https://www.standaard.be/cnt/{dmf}" target="_blank"><img src="https://static.standaard.be/Assets/Images_Upload/2020/05/25/facebook.png" alt="" /></a>
      <a href="http://twitter.com/intent/tweet?source=https://www.standaard.be/cnt/{dmf}&amp;url=https://www.standaard.be/cnt/{dmf}&amp;text={text}" target="_blank" title="Tweet"><img src="https://static.standaard.be/Assets/Images_Upload/2020/05/25/twitter.png" alt="" /></a>
    </div>
  </div>
</MobileOrDesktop>

<style>
  .pluslogo {
    width: 100%;
    top: 0;
    margin-bottom: 20px;
    text-align: left;
  }
  .socialbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5em;
  }
  .social-media {
    width: 100%;
    text-align: right;
  }
  .social-media img {
    width: 9% !important;
    padding-right: 2% !important;
    display: inline !important;
    top: 0;
  }
  @media only screen and (max-width: 768px) {
    .social-media {
      margin-bottom: 0rem !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .social-media img {
      width: 15% !important;
    }
  }
</style>
