<script>
  export let mobile = true;
  export let desktop = true;
  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if mobile && screenWidth < 650}
  <slot />
{:else if desktop && screenWidth > 650}
  <slot />
{/if}
