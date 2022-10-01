<script lang="ts">
  export let width: string = "auto";
  export let height: string = "32px";
</script>

<svg
  style:width
  style:height
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
>
  <g>
    <g>
      <g>
        <path
          d="M490.667,0H21.333C9.551,0,0,9.551,0,21.333v469.333C0,502.449,9.551,512,21.333,512h469.333
				c11.782,0,21.333-9.551,21.333-21.333V21.333C512,9.551,502.449,0,490.667,0z M469.333,469.333H42.667V42.667h426.667V469.333z"
        />
        <path
          d="M256,298.667c23.573,0,42.667-19.093,42.667-42.667S279.573,213.333,256,213.333S213.333,232.427,213.333,256
				S232.427,298.667,256,298.667z"
        />
      </g>
    </g>
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
