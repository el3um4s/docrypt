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
    <path d="m 29.704257,16 h -15" />
    <g transform="matrix(-0.98162104,0,0,1.0104167,31.603677,-1.0520833)">
      <path
        d="m 3.5,5 v 10.5 h 9.300781 v -4.800781 c -0.06895,-1.8663634 2.117371,-3.2166501 3.75586,-2.3203128 l 13.486328,6.7421878 c 2.026568,1.01258 1.066021,3.646065 -0.765625,4.140625 l -12.720703,6.359375 c -2.35635,1.185133 -4.074889,-1.314818 -3.75586,-3.41211 V 18.5 H 3.5 V 29 h -3 V 5 Z"
      />
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
