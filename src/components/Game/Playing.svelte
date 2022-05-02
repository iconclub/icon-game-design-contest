<script lang="ts">
  import { scale } from "svelte/transition";

  import { game } from "../../stores/game.store";

  function onClose() {
    $game.playing = "";
  }

  function focus(el: HTMLElement) {
    el.focus();
  }
</script>

{#if $game.playing}
  <div class="playing" transition:scale use:focus>
    <button type="button" class="playing__close" on:click="{onClose}">
      <span>&times;</span>
    </button>

    <div class="playing__main">
      <div class="playing__content">
        <iframe
          title=""
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          src="https://arcade.makecode.com/---run?id={$game.playing}"
          sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
          frameborder="0"></iframe>
      </div>
    </div>
  </div>
{/if}

<style>
  .playing {
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .playing__close {
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

  .playing__main {
    width: 50vw;
    max-width: 400px;
    min-width: 350px;
    height: auto;
    padding: 20px;
  }

  .playing__content {
    position: relative;
    height: 0;
    padding-bottom: 117.6%;
    overflow: hidden;
  }
</style>
