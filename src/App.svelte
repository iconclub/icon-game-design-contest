<script lang="ts">
  import { authApi } from "./apis/auth.api";
  import { gameApi } from "./apis/game.api";
  import { auth } from "./stores/auth.store";
  import { game } from "./stores/game.store";
  import { user } from "./stores/user.store";
  import { addVoteGame } from "./stores/vote.store";

  import LoadingSpinner from "./components/Loading/Spinner.svelte";
  import LoadingError from "./components/Loading/Error.svelte";
  import ModalMobile from "./components/Modal/Mobile.svelte";
  import ModalSignIn from "./components/Modal/SignIn.svelte";
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

    if (profile.isBanned) {
      $auth.isBanned = true;

      $user = {
        ...$user,
        name: profile.name,
        email: profile.email,
        avatar: profile.avatar,
        role: profile.role,
      };

      return;
    }

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
  }
</script>

<Navbar />
<Toasts />

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
  {#if !$auth.hasSignedIn}
    <GoogleOneTap />
  {/if}

  <ModalMobile />
  <ModalSignIn />
  <GamePlaying />
  <!-- <Vote /> -->

  <div class="container">
    <GameList />
  </div>
{:catch}
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
    padding: 0px 30px;
  }

  @media screen and (max-width: 768px) {
    .container-loading {
      height: 50vh;
    }
  }
</style>
