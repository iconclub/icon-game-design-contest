<script lang="ts">
  import { authApi } from "./apis/auth.api";
  import { gameApi } from "./apis/game.api";
  import { auth } from "./stores/auth.store";
  import { game } from "./stores/game.store";
  import { user } from "./stores/user.store";
  import { votes, addVoteGame } from "./stores/vote.store";

  import LoadingSpinner from "./components/Loading/Spinner.svelte";
  import LoadingError from "./components/Loading/Error.svelte";
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

    if ($user.hasVoted) {
      $user.gamesVoted.forEach((gameId) => {
        const gameFound = $game.list.find((g) => g._id === gameId);
        if (gameFound) {
          addVoteGame({
            _id: gameFound._id,
            name: gameFound.name,
          });
        }
      });
    }

    console.log($votes);
  }
</script>

<Navbar />

{#await initApp()}
  <div class="container-loading">
    <LoadingSpinner
      size="{150}"
      durationMultiplier="{1.2}"
      colorOuter="{'#2e3192'}"
      colorCenter="{'#79b5bc'}"
      colorInner="{'#e8d5b5'}"
    />
  </div>
{:then}
  <Toasts />

  <GoogleOneTap />

  <GamePlaying />

  <Vote />

  <div class="container">
    <GameList />
  </div>
{:catch error}
  <div class="container-loading">
    <LoadingError />
  </div>
{/await}

<style>
  .container {
    max-width: 1366px;
    margin: 50px auto;
    padding: 0 20px;
  }

  .container-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    padding: 0px 20px;
  }
</style>
