<script lang="ts">
  import { game } from "../../stores/game.store";

  import GameButtonVote from "./ButtonVote.svelte";

  export let data = {
    _id: "",
    name: "",
    description: "",
    team: "",
    members: [],
    thumbnail: "",
    source: "",
    numberOfVotes: 0,
  };

  function play() {
    $game.playing = {
      name: data.name,
      source: data.source,
      description: data.description,
      members: data.members,
    };
  }
</script>

<div class="game">
  <img class="game__thumbnail" src="{data.thumbnail}" alt="{data.name}" on:click="{play}" />
  <div class="game__detail">
    <h5 class="game__title">{data.name}</h5>
    <p class="game__team">By {data.team}</p>
    <p class="game__votes">
      <span class="material-icons">how_to_vote</span>
      <span>{data.numberOfVotes}</span>
    </p>
  </div>
  <div class="game__action">
    <GameButtonVote _id="{data._id}" name="{data.name}" />
    <button type="button" class="btn btn--cube-1" on:click="{play}">Play</button>
  </div>
</div>

<style>
  .game {
    width: 250px;
    height: max-content;
    border: 3px solid #ccc;
    border-radius: 5px;
    background-color: white;
    transition: all 0.2s ease-in-out;
  }

  .game:hover {
    border: 3px solid rgba(240, 46, 170, 0.5);
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
      rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
      rgba(240, 46, 170, 0.05) 25px 25px;
    transform: scale(1.05);
  }

  .game__thumbnail {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .game__detail {
    margin: 0px 10px 10px;
  }

  .game__title {
    margin-bottom: 8px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .game__team {
    font-size: 0.8rem;
    margin-bottom: 10px;
    color: var(--link);
  }

  .game__votes {
    color: gray;
    display: flex;
    align-items: center;
  }

  .game__action {
    display: flex;
    justify-content: center;
    border-top: 1px solid #ccc;
    padding: 5px 10px;
  }
</style>
