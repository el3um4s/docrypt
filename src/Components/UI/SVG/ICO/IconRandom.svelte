<script lang="ts">
  export let width: string = "auto";
  export let height: string = "32px";
</script>

<svg
  style:width
  style:height
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
  ><path
    d="m27 6h-3v-3a1 1 0 0 0 -1-1h-18a1 1 0 0 0 -1 1v22a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-22a1 1 0 0 0 -1-1zm-21-2h16v20h-16zm20 24h-16v-2h13a1 1 0 0 0 1-1v-17h2z"
  /><path
    d="m10 12a1 1 0 0 0 1-1 3 3 0 1 1 3 3 1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-1.1a5 5 0 1 0 -6-4.9 1 1 0 0 0 1 1z"
  />
  <path d="m14 19a1 1 0 0 0 -1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0 -1-1z" />
</svg>

<style>
  svg {
    fill: var(--color-default);
    stroke-width: 1.5px;
  }
  svg:hover {
    fill: var(--color-hover);
  }
</style>
