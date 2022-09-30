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
    d="m22 8.459h-10.09l1.504-1.504c.781-.78.781-2.047 0-2.828s-2.047-.781-2.829 0l-4.918 4.918c-.375.375-.586.884-.586 1.414s.21 1.039.586 1.414l4.919 4.919c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-1.505-1.505h10.091c3.309 0 6 2.691 6 6s-2.691 6-6 6h-20c-1.104 0-2 .896-2 2s.896 2 2 2h20c5.514 0 10-4.486 10-10s-4.486-10-10-10z"
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
