<script lang="ts">
  import jwt_decode from "jwt-decode";

  import { authApi } from "../../apis/auth.api";
  import { auth } from "../../stores/auth.store";
  import { game } from "../../stores/game.store";
  import { addToast } from "../../stores/toast.store";
  import { user } from "../../stores/user.store";
  import { addVoteGame } from "../../stores/vote.store";

  import { closeModal } from "../Modal/SignIn.svelte";

  window.handleCredentialResponse = async (response) => {
    const data = await authApi.signInWithGoogle({
      idToken: response.credential,
    });

    const decodedToken = jwt_decode(data.accessToken) as any;

    $auth.hasSignedIn = true;

    addToast({ message: "You're signed in", type: "success" });
    closeModal();

    if (decodedToken.isBanned) {
      $auth.isBanned = true;

      $user = {
        ...$user,
        name: decodedToken.name,
        email: decodedToken.email,
        avatar: decodedToken.avatar,
        role: decodedToken.role,
      };

      return;
    }

    $user = {
      _id: decodedToken.sub,
      email: decodedToken.email,
      name: decodedToken.name,
      role: decodedToken.role,
      hasVoted: decodedToken.hasVoted,
      gamesVoted: decodedToken.gamesVoted,
      avatar: decodedToken.avatar,
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
  };
</script>

<svelte:head>
  <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

{#if !$auth.hasSignedIn}
  <div
    id="g_id_onload"
    data-client_id="769272591537-uc3vsgm4fi497461vhkcaugm766q3gqg.apps.googleusercontent.com"
    data-callback="handleCredentialResponse"
    data-locale="en"
  ></div>
{/if}
