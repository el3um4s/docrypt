<script lang="ts">
  import lang from "./Lang";
  import { languages } from "./Languages";

  export let p: string;
  export let w: string;
</script>

{@html languages[p][w][$lang]}
