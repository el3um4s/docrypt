<script lang="ts">
  export let width: string = "auto";
  export let height: string = "32px";
</script>

<svg
  style:width
  style:height
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
  ><g
    ><path
      d="m29 24h-3v-3a1 1 0 0 0 -2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"
    /><path
      d="m17 24h-12a1 1 0 0 1 -1-1v-2.59l4-4 2.29 2.3a1 1 0 0 0 1.42 0l5.29-5.3 4.29 4.3a1 1 0 0 0 1.42-1.42l-5-5a1 1 0 0 0 -1.42 0l-5.29 5.3-2.29-2.3a1 1 0 0 0 -1.42 0l-3.29 3.3v-12.59a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 0 2 0v-12a3 3 0 0 0 -3-3h-18a3 3 0 0 0 -3 3v18a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2z"
    /><path
      d="m8 9a3 3 0 1 0 3-3 3 3 0 0 0 -3 3zm4 0a1 1 0 1 1 -1-1 1 1 0 0 1 1 1z"
    /></g
  ></svg
>

<style>
  svg {
    fill: var(--color-default);
    stroke-width: 1.5px;
  }
  svg:hover {
    fill: var(--color-hover);
  }
</style>
