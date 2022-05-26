<script lang="ts">
  import { auth } from "../../stores/auth.store";

  import VoteBanned from "./Banned.svelte";
  import VoteRequire from "./Require.svelte";
  import VoteStats from "./Stats.svelte";
</script>

{#if $auth.hasSignedIn}
  {#if $auth.isBanned}
    <VoteBanned />
  {:else}
    <VoteStats />
  {/if}
{:else}
  <VoteRequire />
{/if}
