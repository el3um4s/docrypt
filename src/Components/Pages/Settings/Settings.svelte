<script lang="ts">
  import { slide } from "svelte/transition";
  import ChooseLanguage from "./ChooseLanguage.svelte";
</script>

<section transition:slide>
  <ChooseLanguage />
</section>

<style lang="postcss">
  section {
    @apply flex flex-col w-full h-full;
  }
</style>
