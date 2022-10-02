<script lang="ts">
  export let width: string = "auto";
  export let height: string = "32px";
</script>

<svg
  style:width
  style:height
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  ><path
    d="m17 7h-10v10h10zm-10-1c-.55228 0-1 .44772-1 1v10c0 .5523.44772 1 1 1h10c.5523 0 1-.4477 1-1v-10c0-.55228-.4477-1-1-1z"
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
