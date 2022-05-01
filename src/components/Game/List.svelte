<script lang="ts">
  import { onMount } from "svelte";

  import { gameApi } from "../../apis/game.api";
  import { game } from "../../stores/game.store";

  import Game from "./Game.svelte";

  onMount(async () => {
    $game.list = await gameApi.findAll();
  });
</script>

<div class="game-list">
  {#each $game.list as game (game._id)}
    <Game data="{game}" />
  {/each}
</div>
