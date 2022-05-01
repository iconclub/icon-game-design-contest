<script lang="ts">
  import { scale } from "svelte/transition";

  import { game } from "../../stores/game.store";

  import GamePlaying from "./Playing.svelte";

  function onClose() {
    $game.playing = "";
  }

  function init(el: HTMLElement) {
    el.focus();
  }
</script>

{#if $game.playing}
  <div class="play-ground" transition:scale use:init>
    <button type="button" class="play-ground__close" on:click="{onClose}">
      <span>&times;</span>
    </button>

    <GamePlaying />
  </div>
{/if}

<style>
  .play-ground {
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .play-ground__close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: white;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 3rem;
  }
</style>
