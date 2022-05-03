<script lang="ts">
  import jwt_decode from "jwt-decode";

  import { authApi } from "../../apis/auth.api";
  import { auth } from "../../stores/auth.store";
  import { addToast } from "../../stores/toast.store";
  import { user } from "../../stores/user.store";

  window.handleCredentialResponse = async (response) => {
    const data = await authApi.signInWithGoogle({
      idToken: response.credential,
    });

    const decodedToken = jwt_decode(data.accessToken) as any;

    $auth.hasSignedIn = true;
    $user = {
      _id: decodedToken.sub,
      email: decodedToken.email,
      name: decodedToken.name,
      role: decodedToken.role,
      hasVoted: decodedToken.hasVoted,
      gamesVoted: decodedToken.gamesVoted,
      avatar: decodedToken.avatar,
    };

    addToast({ message: "You're signed in", type: "success" });
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
