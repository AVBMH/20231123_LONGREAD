<script>
  import { MapPinIcon, ClockIcon } from "svelte-feather-icons";

  export let time = "";
  export let location = "";
  export let iconTime = false;
  export let iconLocation = false;
</script>

<h6 class="timestamp">
  {#if iconTime && time}
    <ClockIcon size="16" class="icon" />
  {/if}
  <span class="time">{time} </span>
  {#if time && location}
    |
  {/if}
  {#if location}
    {#if iconLocation}
      <MapPinIcon size="16" class="icon" />
    {/if}
    {location}
  {/if}
</h6>

<style>
  .timestamp {
    font-family: "libre franklin";
    font-size: 16px;
    margin-bottom: 1em;
    font-weight: 400;
    color: var(--accent);
    margin-top: 0;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .time {
    font-weight: 600;
    margin-right: 5px;
  }
</style>
