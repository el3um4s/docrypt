<script lang="ts">
  export let width: string = "auto";
  export let height: string = "32px";
</script>

<svg
  style:width
  style:height
  viewBox="0 0 32.0 32.0"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <path
      d="M 14 3 C 12.892001 3 12 3.8920011 12 5 L 12 12 L 5 12 C 3.8920011 12 3 12.892001 3 14 L 3 18 C 3 19.107999 3.8920011 20 5 20 L 12 20 L 12 27 C 12 28.107999 12.892001 29 14 29 L 18 29 C 19.107999 29 20 28.107999 20 27 L 20 20 L 27 20 C 28.107999 20 29 19.107999 29 18 L 29 14 C 29 12.892001 28.107999 12 27 12 L 20 12 L 20 5 C 20 3.8920011 19.107999 3 18 3 L 14 3 z "
    />
  </g>
</svg>

<style>
  svg {
    fill: var(--color-default);
    stroke-width: 2px;
  }
  svg:hover {
    fill: var(--color-hover);
  }
</style>
