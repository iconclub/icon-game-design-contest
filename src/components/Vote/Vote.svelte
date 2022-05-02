<script lang="ts">
  import { auth } from "../../stores/auth.store";

  import VoteRequire from "./Require.svelte";
  import VoteStats from "./Stats.svelte";
</script>

{#if $auth.hasSignedIn}
  <VoteStats />
{:else}
  <VoteRequire />
{/if}
