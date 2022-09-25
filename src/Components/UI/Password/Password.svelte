<script lang="ts">
  import password from "../../../Stores/Password";

  let p = $password;
  $: password.set(p);
</script>

<div>
  <input bind:value={p} placeholder="password" />
</div>
