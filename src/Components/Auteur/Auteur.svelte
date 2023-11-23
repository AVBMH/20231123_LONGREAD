<script>
  export let image = "";
  export let name = "";
  export let description = "";
</script>

<div class="hoofdjesBlokEen" style="margin-top: 1.5em !important;">
  {#if image}
    <div class="images">
      <img src="{image}?maxwidth=200&scale=both&format=jpg" id="image1" alt={name} />
    </div>
  {/if}

  <div class="tekst">
    {#if name || description}
      <h3>
        {name}
        {#if description}
          <p>{description}</p>
        {/if}
      </h3>
    {/if}
  </div>
</div>

<style>
  .hoofdjesBlokEen {
    width: 100% !important;
    display: flex !important;
    justify-content: left !important;
    margin-bottom: 24px !important;
    margin-top: 12px !important;
  }

  .hoofdjesBlokEen #image1 {
    max-width: 60px !important;
    width: 60px !important;
    height: 60px !important;
    padding-right: 0px !important;
    object-fit: cover !important;
    border-radius: 50%;
    margin-right: 12px;
  }

  .hoofdjesBlokEen .tekst h3,
  .hoofdjesBlokEen .tekst p {
    margin: 0;
    line-height: 18px;
    padding: 0 !important;
    font-family: "Libre Franklin", Helvetica, Arial, sans-serif !important;
  }

  .hoofdjesBlokEen .tekst {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hoofdjesBlokEen .tekst p {
    font-family: "Libre Franklin", Helvetica, Arial, sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  .hoofdjesBlokEen .tekst h3 {
    font-family: "Libre Franklin", Helvetica, Arial, sans-serif !important;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }

  .hoofdjesBlokEen .images {
    position: relative;
  }
</style>
