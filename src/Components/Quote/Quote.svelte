<script>
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";

  export let text = "";
  export let name = "";
  export let description = "";
  export let desktop = true;
  export let mobile = true;
</script>

<MobileOrDesktop {desktop} {mobile}>
  <blockquote style="">
    {text}
    <br />
    <span class="quotation-name">{name}</span>
    <span class="description">{description}</span>
  </blockquote>
</MobileOrDesktop>

<style>
  blockquote {
    padding-top: 0.8333333333em;
    font-size: 1.6em;
    line-height: 1.25;
    font-family: "arnhem-bold-italic", Georgia, serif;
    font-weight: 400;
    letter-spacing: normal;
    hyphens: none;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  .quotation-name {
    display: block;
    font-family: Libre Franklin, Helvetica, Arial, sans-serif;
    font-weight: 700;
    letter-spacing: normal;
    text-align: center;
    margin-top: 0.6944444444em;
    font-size: 0.67em;
    line-height: 1.23;
  }
  .description {
    display: block;
    font-family: Libre Franklin, Helvetica, Arial, sans-serif;
    font-weight: 400;
    letter-spacing: normal;
    text-align: center;
    margin-top: 0.4em;
    font-size: 0.64em;
    line-height: 1.2;
  }
</style>
