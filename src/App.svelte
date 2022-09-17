<script lang="ts">
  import "./css/tailwind.pcss";

  const VERSION = "[VI]Version: {version} - built on {date}[/VI]";
</script>

<main>
  <h1>Hello!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <p>Version: {VERSION}</p>
</main>

<style lang="postcss">
  h1 {
    @apply border-b-4;
  }

  h1:hover {
    border-color: rgb(255, 136, 0);
  }

  a {
    @apply p-1 rounded-lg;
  }

  a:hover {
    border-bottom: 2px;
    background-color: theme("colors.red.600");
    color: theme("colors.gray.300");
  }
</style>
