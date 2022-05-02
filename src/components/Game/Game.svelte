<script lang="ts">
  import { auth } from "../../stores/auth.store";
  import { game } from "../../stores/game.store";
  import { modal } from "../../stores/modal.store";
  import { addToast } from "../../stores/toast.store";
  import { user } from "../../stores/user.store";
  import { votes, addVoteGame, removeVoteGame } from "../../stores/vote.store";

  import ModalSignIn from "../Modal/SignIn.svelte";

  export let data = {
    _id: "",
    name: "",
    team: "",
    thumbnail: "",
    source: "",
  };

  let btnVoteRef = null;
  let isVoted = false;

  function play() {
    $game.playing = data.source;
  }

  function vote() {
    if (!$auth.hasSignedIn) {
      modal.display();
      return;
    }

    if ($user.hasVoted) {
      addToast({
        message: "You can't vote after submitting your votes!",
        type: "error",
      });
      return;
    }

    if (isVoted) {
      isVoted = false;
      removeVoteGame(data._id);
      markAsNotVoted();
      return;
    }

    if ($votes.length >= 3) {
      addToast({
        message: "You can't vote more than 3 games",
        type: "error",
      });
      return;
    }

    isVoted = true;
    addVoteGame({ _id: data._id, name: data.name });
    markAsVoted();
  }

  function markAsVoted() {
    btnVoteRef.innerHTML = "&#x2714;";
    btnVoteRef.classList.remove("btn--cube-2-outline");
    btnVoteRef.classList.add("btn--cube-2");
  }

  function markAsNotVoted() {
    btnVoteRef.innerHTML = "Vote";
    btnVoteRef.classList.remove("btn--cube-2");
    btnVoteRef.classList.add("btn--cube-2-outline");
  }
</script>

<div class="game">
  <img class="game__thumbnail" src="{data.thumbnail}" alt="{data.name}" on:click="{play}" />
  <div class="game__detail">
    <h5 class="game__title">{data.name}</h5>
    <h5 class="game__team">By {data.team}</h5>
  </div>
  <div class="game__action">
    <button
      type="button"
      class="btn btn--cube-2-outline"
      on:click="{vote}"
      bind:this="{btnVoteRef}"
    >
      Vote
    </button>
    <button type="button" class="btn btn--cube-1" on:click="{play}">Play</button>
  </div>
</div>

<ModalSignIn />

<style>
  .game {
    width: 200px;
    height: max-content;
    border: 3px solid #ccc;
  }

  .game:hover {
    border: 3px solid white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  .game__thumbnail {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .game__detail {
    margin: 0px 10px 10px;
  }

  .game__title {
    margin-bottom: 8px;
    width: calc(100%);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .game__team {
    font-size: 0.7rem;
    font-style: italic;
    text-align: end;
    margin-bottom: 10px;
    color: var(--link);
  }

  .game__action {
    display: flex;
    justify-content: center;
    border-top: 1px solid #ccc;
    padding: 5px 10px;
  }
</style>
