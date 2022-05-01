<script lang="ts">
  import GoogleOneTap from "./components/Google/OneTap.svelte";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import GamePlayground from "./components/Game/Playground.svelte";
  import GameList from "./components/Game/List.svelte";
</script>

<GoogleOneTap />

<Navbar />

<GamePlayground />

<div class="container">
  <GameList />
</div>

<style>
  .container {
    max-width: 1366px;
    margin: 50px auto;
    padding: 0 20px;
  }
</style>
