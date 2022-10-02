<script lang="ts">
  export let width: string = "auto";
  export let height: string = "32px";
</script>

<svg
  style:width
  style:height
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
  ><path
    d="m512 362.8v117.2a32 32 0 0 1 -32 32h-117.2a32 32 0 1 1 0-64h85.2v-85.2a32 32 0 1 1 64 0zm-480-181.6a32 32 0 0 0 32-32v-85.2h85.2a32 32 0 0 0 0-64h-117.2a32 32 0 0 0 -32 32v117.2a32 32 0 0 0 32 32zm135.65-45.55h176.7a32 32 0 0 1 32 32v176.7a32 32 0 0 1 -32 32h-176.7a32 32 0 0 1 -32-32v-176.7a32 32 0 0 1 32-32zm32 176.7h112.7v-112.7h-112.7zm280.35-312.35h-117.2a32 32 0 0 0 0 64h85.2v85.2a32 32 0 1 0 64 0v-117.2a32 32 0 0 0 -32-32zm-330.8 448h-85.2v-85.2a32 32 0 0 0 -64 0v117.2a32 32 0 0 0 32 32h117.2a32 32 0 1 0 0-64z"
  /></svg
>

<style>
  svg {
    fill: var(--color-default);
    stroke-width: 2px;
  }
  svg:hover {
    fill: var(--color-hover);
  }
</style>
