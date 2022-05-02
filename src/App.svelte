<script lang="ts">
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Toasts from "./components/Toast/Toasts.svelte";
  import GoogleOneTap from "./components/Google/OneTap.svelte";
  import GamePlaying from "./components/Game/Playing.svelte";
  import GameList from "./components/Game/List.svelte";
  import Vote from "./components/Vote/Vote.svelte";
</script>

<Navbar />

<Toasts />

<GoogleOneTap />

<GamePlaying />

<Vote />

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
