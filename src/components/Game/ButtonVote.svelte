<script lang="ts">
  import { auth } from "../../stores/auth.store";
  import { addToast } from "../../stores/toast.store";
  import { user } from "../../stores/user.store";
  import { votes, addVoteGame, removeVoteGame } from "../../stores/vote.store";

  import { openModal } from "../Modal/SignIn.svelte";

  export let _id: string;
  export let name: string;

  let btnVoteRef = null;

  $: count = $votes.filter((vote) => vote._id === _id).length || 0;

  function vote() {
    if (!$auth.hasSignedIn) {
      openModal();
      return;
    }

    if ($user.hasVoted) {
      addToast({
        message: "You have already voted!",
        type: "error",
      });
      return;
    }

    // Reset count to 0 if user have more than 3 votes
    if ($votes.length >= 3) {
      removeVoteGame(_id);
      removeVoteCount();
      count = 0;
      return;
    }

    count++;

    addVoteGame({ _id, name });
    showVoteCount();
  }

  function showVoteCount() {
    btnVoteRef.textContent = `( ${count} )`;
    btnVoteRef.classList.remove("btn--cube-2-outline");
    btnVoteRef.classList.add("btn--cube-2");
  }

  function removeVoteCount() {
    btnVoteRef.textContent = "Vote";
    btnVoteRef.classList.remove("btn--cube-2");
    btnVoteRef.classList.add("btn--cube-2-outline");
  }
</script>

{#if count}
  <button type="button" class="btn btn--cube-2" on:click="{vote}" bind:this="{btnVoteRef}">
    ( {count} )
  </button>
{:else}
  <button type="button" class="btn btn--cube-2-outline" on:click="{vote}" bind:this="{btnVoteRef}">
    Vote
  </button>
{/if}
