<script lang="ts">
  import GoogleOneTap from "./components/Google/OneTap.svelte";
  import Game from "./components/Game/Game.svelte";
  import GameList from "./components/Game/List.svelte";
</script>

<GoogleOneTap />

<div class="container">
  <GameList />
</div>

<style>
  .container {
    max-width: 1024px;
    margin: 100px auto;
    padding: 0 20px;
  }
</style>
