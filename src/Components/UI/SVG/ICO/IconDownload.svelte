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
      d="m28 24v-4a1 1 0 0 0 -2 0v4a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1-1v-4a1 1 0 0 0 -2 0v4a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3zm-6.38-5.22-5 4a1 1 0 0 1 -1.24 0l-5-4a1 1 0 0 1 1.24-1.56l3.38 2.7v-13.92a1 1 0 0 1 2 0v13.92l3.38-2.7a1 1 0 1 1 1.24 1.56z"
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
