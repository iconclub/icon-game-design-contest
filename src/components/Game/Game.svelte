<script lang="ts">
  import { game } from "../../stores/game.store";

  import GameButtonVote from "./ButtonVote.svelte";

  export let data = {
    _id: "",
    name: "",
    team: "",
    thumbnail: "",
    source: "",
  };

  function play() {
    $game.playing = data.source;
  }
</script>

<div class="game">
  <img class="game__thumbnail" src="{data.thumbnail}" alt="{data.name}" on:click="{play}" />
  <div class="game__detail">
    <h5 class="game__title">{data.name}</h5>
    <h5 class="game__team">By {data.team}</h5>
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
  }

  .game:hover {
    border: 3px solid white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
