<script lang="ts">
  import { game } from "../../stores/game.store";
</script>

<div class="game-playing">
  <div class="game-playing__content">
    <iframe
      title=""
      style="position:absolute;top:0;left:0;width:100%;height:100%;"
      src="https://arcade.makecode.com/---run?id={$game.playing}"
      sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
      frameborder="0"></iframe>
  </div>
</div>

<style>
  .game-playing {
    width: 50vw;
    max-width: 400px;
    min-width: 350px;
    height: auto;
    padding: 20px;
  }

  .game-playing__content {
    position: relative;
    height: 0;
    padding-bottom: 117.6%;
    overflow: hidden;
  }
</style>
