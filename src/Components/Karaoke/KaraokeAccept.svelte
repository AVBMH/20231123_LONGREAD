<script>
  import { Volume2Icon } from "svelte-feather-icons";
  import { muteGeneral } from "./Karaoke.svelte";
  import { fade } from "svelte/transition";
  let once = false;
</script>

{#if $muteGeneral && !once}
  <div class="normal karaokeAccept" out:fade>
    <p>
      <slot />
    </p>
    <button
      on:click={() => {
        muteGeneral.set(false);
      }}
    >
      <Volume2Icon size="20" class="icon" />Geluid aanzetten
    </button>
  </div>
  <p style="display: none;">{(once = true)}</p>
{/if}

<style>
  .karaokeAccept {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(131, 131, 131, 0.597);
    flex-direction: column;
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .karaokeAccept p {
    padding-left: 2em;
    padding-right: 2em;
    font-size: 0.85em;
    font-family: "libre franklin";
  }

  .karaokeAccept button {
    background-color: transparent;
    border: 1px solid;
    padding: 8px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border-color: var(--accent);
    color: var(--accent);
    cursor: pointer;
    margin-bottom: 1em;
  }

  .karaokeAccept button:hover {
    background-color: var(--accent);
    border-color: var(--accent);
    color: var(--bg-color);
  }
</style>
