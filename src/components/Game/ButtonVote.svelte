<script lang="ts">
  import { auth } from "../../stores/auth.store";
  import { modal } from "../../stores/modal.store";
  import { addToast } from "../../stores/toast.store";
  import { user } from "../../stores/user.store";
  import { votes, addVoteGame, removeVoteGame } from "../../stores/vote.store";

  import ModalSignIn from "../Modal/SignIn.svelte";

  export let _id: string;
  export let name: string;

  let btnVoteRef = null;
  $: count = $votes.filter((vote) => vote._id === _id).length || 0;

  function vote() {
    count++;

    if (!$auth.hasSignedIn) {
      modal.display();
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
      return;
    }

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

<button type="button" class="btn btn--cube-2-outline" on:click="{vote}" bind:this="{btnVoteRef}">
  Vote
</button>

<ModalSignIn />
