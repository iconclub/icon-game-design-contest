<script lang="ts">
  import { authApi } from "./apis/auth.api";
  import { gameApi } from "./apis/game.api";
  import { auth } from "./stores/auth.store";
  import { game } from "./stores/game.store";
  import { user } from "./stores/user.store";

  import Navbar from "./components/Navbar/Navbar.svelte";
  import Toasts from "./components/Toast/Toasts.svelte";
  import GoogleOneTap from "./components/Google/OneTap.svelte";
  import GamePlaying from "./components/Game/Playing.svelte";
  import GameList from "./components/Game/List.svelte";
  import Vote from "./components/Vote/Vote.svelte";

  async function initApp() {
    const [profile, games] = await Promise.all([authApi.getProfile(), gameApi.findAll()]);

    $game.list = games;

    if (!profile) {
      return;
    }

    $auth.hasSignedIn = true;

    $user = {
      _id: profile._id,
      name: profile.name,
      email: profile.email,
      avatar: profile.avatar,
      role: profile.role,
      hasVoted: profile.hasVoted,
      gamesVoted: profile.gamesVoted,
    };
  }
</script>

{#await initApp()}
  <p>...waiting</p>
{:then}
  <Navbar />

  <Toasts />

  <GoogleOneTap />

  <GamePlaying />

  <Vote />

  <div class="container">
    <GameList />
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style>
  .container {
    max-width: 1366px;
    margin: 50px auto;
    padding: 0 20px;
  }
</style>
