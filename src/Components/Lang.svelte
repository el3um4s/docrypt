<script lang="ts">
  import lang from "../Stores/Lang";
  import { languages } from "../Languages/Languages";

  export let c: string;
  export let v: string;
</script>

{@html languages[c][v][$lang]}
