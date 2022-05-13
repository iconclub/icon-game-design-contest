<script lang="ts">
  import { voteApi } from "../../apis/vote.api";
  import { addToast } from "../../stores/toast.store";
  import { user } from "../../stores/user.store";
  import { votes } from "../../stores/vote.store";

  let btnSubmitRef = null;

  $: count = $votes.length;

  async function submitVotes() {
    const voter = $user._id;
    const games = $votes.map((vote) => vote._id);

    if (games.length === 0) {
      addToast({
        message: "You must vote for at least one game!",
        type: "error",
      });
      return;
    }

    // Prevent multiple clicks
    btnSubmitRef.disabled = true;

    try {
      await voteApi.sendVotes(voter, games);
      addToast({
        message: "Your votes have been submitted!",
        type: "success",
      });

      $user.hasVoted = true;
    } catch (error) {
      addToast({
        message: error.message,
        type: "error",
      });
    }
  }

  function reset() {
    $votes = [];
  }
</script>

<div class="vote-stats">
  <div class="vote-stats__content">
    <div class="vote-stats__main">
      <p class="vote-stats__message">
        {#if $user.hasVoted}
          Games you voted: <span class="vote-stats__count count--voted">({count}/3)</span>
        {:else}
          Games you choose: <span class="vote-stats__count">({count}/3)</span>
        {/if}
      </p>

      <ul class="vote-stats__list">
        {#each $votes as vote}
          <li>- {vote.name}</li>
        {/each}
      </ul>
    </div>
    <div class="vote-stats__action">
      {#if $user.hasVoted}
        <button type="button" class="btn btn--disabled" disabled>Submit</button>
        <button type="button" class="btn btn--disabled" disabled>Reset</button>
      {:else}
        <button type="button" class="btn" on:click="{submitVotes}" bind:this="{btnSubmitRef}">
          Submit
        </button>
        <button type="button" class="btn btn--danger" on:click="{reset}">Reset</button>
      {/if}
    </div>
  </div>
</div>

<style>
  .vote-stats {
    width: 100%;
    background-color: var(--cube-3);
    display: flex;
    justify-content: center;
  }

  .vote-stats__content {
    width: 100%;
    max-width: 500px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
  }

  .vote-stats__message {
    margin-bottom: 10px;
  }

  .vote-stats__count {
    color: var(--danger);
  }

  .count--voted {
    color: var(--success);
  }

  .vote-stats__list li {
    margin-bottom: 8px;
  }

  .vote-stats__action {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>