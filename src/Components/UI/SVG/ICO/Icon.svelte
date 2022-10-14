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
      d="m29 8h-26c-1.1045 0-2-.8955-2-2s.8955-2 2-2h26c1.1045 0 2 .8955 2 2s-.8955 2-2 2z"
    /><path
      d="m29 28h-26c-1.1045 0-2-.8955-2-2s.8955-2 2-2h26c1.1045 0 2 .8955 2 2s-.8955 2-2 2z"
    /><path
      d="m29 18h-26c-1.1045 0-2-.8955-2-2s.8955-2 2-2h26c1.1045 0 2 .8955 2 2s-.8955 2-2 2z"
    /></g
  ></svg
>

<style>
  svg {
    fill: var(--color-default);
  }
  svg:hover {
    fill: var(--color-hover);
  }
</style>
