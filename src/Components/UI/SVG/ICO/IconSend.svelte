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
    d="m18 15a3.989 3.989 0 0 0 -3.222 1.65l-5.015-3.343a3.722 3.722 0 0 0 0-2.614l5.015-3.343a3.985 3.985 0 1 0 -.778-2.35 3.883 3.883 0 0 0 .044.435l-5.391 3.594a4 4 0 1 0 0 5.942l5.391 3.594a3.883 3.883 0 0 0 -.044.435 4 4 0 1 0 4-4zm0-12a2 2 0 1 1 -2 2 2 2 0 0 1 2-2zm-12 11a2 2 0 1 1 2-2 2 2 0 0 1 -2 2zm12 7a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"
  /></svg
>

<style>
  svg {
    fill: var(--color-default);
  }
  svg:hover {
    fill: var(--color-hover);
  }
</style>
