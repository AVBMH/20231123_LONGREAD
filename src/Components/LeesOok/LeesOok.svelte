<script>
  import { ChevronRightIcon } from "svelte-feather-icons";

  export let image;
  export let url;
  export let title;
</script>

<div class="Leesook">
  <a href="{url} " target="_blank">
    <div class="wrapperLeesook">
      <div class="tekstLeesook">
        <h2 class="showdesktop">Lees ook</h2>
        <p>
          {title}&nbsp;<ChevronRightIcon size="14" class="icon" />
        </p>
      </div>
      <a href={url} class="image" target="_blank">
        <img src="{image}?crop=(0.00,33.48,539.00,284.16)&cropxunits=539&cropyunits=360&maxheight=293&maxwidth=630&scale=both&format=jpg" alt="" />
      </a>
    </div>
  </a>
</div>

<style>
  .Leesook {
    border-top: 1px solid #d7d7d7 !important;
    border-bottom: 1px solid #d7d7d7 !important;
    margin: 0 !important;
    padding: 0 !important;
    margin-bottom: 12px !important;
    margin-top: 12px !important;
  }
  .Leesook .wrapperLeesook {
    display: flex !important;
    flex-direction: row-reverse !important;
    align-items: flex-start !important;
    padding: 0px !important;
    gap: 12px !important;
    isolation: isolate !important;
    margin-bottom: 8px !important;
    width: 100%;
    justify-content: flex-end;
  }
  .Leesook .tekstLeesook {
    display: flex !important;
    flex-direction: column !important;
    gap: 0px !important;
    margin-top: 0 !important;
  }

  .Leesook h2 {
    font-family: "Libre Franklin";
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    line-height: 18px !important;
    margin-bottom: 6px !important;
    margin-top: 12px !important;
  }

  .Leesook p {
    margin: 0 !important;
    font-family: "Arnhem", Georgia, serif;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 22px !important;
  }

  .Leesook a:first-child {
    font-family: "Arnhem", Georgia, serif;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 22px !important;
    color: #000000 !important;
    text-decoration: none !important;
  }

  .Leesook img {
    width: 60px !important;
    height: 60px !important;
    object-fit: cover !important;
    max-width: 60px !important;
    min-width: 60px !important;
    max-height: 60px !important;
    min-height: 60px !important;
  }

  .Leesook a:first-child {
    order: 1 !important;
  }

  .Leesook a:first-child {
    order: 1 !important;
  }
  .showdesktop {
    display: block;
  }
  .Leesook h2 {
    margin-top: 0px !important;
  }
  .Leesook div {
    margin-top: 12px !important;
  }
  .Leesook p {
    min-width: 90%;
  }
  .Leesook img {
    width: 75px !important;
    height: 75px !important;
    object-fit: cover !important;
    max-width: 75px !important;
    min-width: 75px !important;
    max-height: 75px !important;
    min-height: 75px !important;
  }
  @media only screen and (max-width: 650px) {
    .Leesook p {
      width: 100%;
    }
  }
</style>
