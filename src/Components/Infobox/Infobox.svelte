<script>
  import { fade } from "svelte/transition";
  import MobileOrDesktop from "../Helpers/MobileOrDesktop.svelte";
  let leesmeer = false;
  export let desktop = true;
  export let mobile = true;
  import { ChevronDownIcon, ChevronUpIcon } from "svelte-feather-icons";
</script>

<MobileOrDesktop {desktop} {mobile}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="infobox normal" on:click={() => (leesmeer = !leesmeer)} class:cursor={$$slots.leesmeer}>
    <slot />
    {#if $$slots.leesmeer}
      <p class="button" transition:fade={{ duration: 150 }}>
        Lees meer&nbsp;
        {#if leesmeer}
          <ChevronUpIcon size="18" class="iconLeesmeer" />
        {:else}
          <ChevronDownIcon size="18" class="iconLeesmeer" />
        {/if}
      </p>
      {#if leesmeer}
        <div class="leesmeer" transition:fade={{ duration: 150 }}>
          <slot name="leesmeer" />
        </div>
      {/if}
    {/if}
  </div>
</MobileOrDesktop>

<style>
  .cursor {
    cursor: pointer;
  }

  :global(.iconLeesmeer) {
    color: var(--accent);
  }
  .infobox {
    border: 1px solid #ccc;
    padding: 0 1em;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
  .button {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 0;
    font-family: "libre franklin";
    font-size: 0.9em;
    color: var(--accent);
    font-weight: 600;
    pointer-events: none;
  }
  :global(.leesmeer p:first-child) {
    margin-top: 0 !important;
  }
  :global(.infobox p, .infobox h2) {
    font-family: "libre franklin";
    font-size: 1em;
    line-height: 1.6rem;
  }
</style>
