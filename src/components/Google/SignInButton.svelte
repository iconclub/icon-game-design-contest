<script lang="ts">
  import { onMount } from "svelte";
  import jwt_decode from "jwt-decode";

  import { authApi } from "../../apis/auth.api";
  import { auth } from "../../stores/auth.store";
  import { modal } from "../../stores/modal.store";
  import { addToast } from "../../stores/toast.store";
  import { user } from "../../stores/user.store";

  onMount(() => {
    function disableGoogleOneTap() {
      document.querySelector("#g_id_onload").setAttribute("data-auto_prompt", "false");
    }
    disableGoogleOneTap();
  });

  // @Override - OneTap.svelte
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

    modal.hide();

    addToast({ message: "You're signed in", type: "success" });
  };
</script>

<!-- 
  Duplicated script tag in <head> because it needs to be in the same component 
  with Google Sign In button. 
-->
<svelte:head>
  <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<div
  class="g_id_signin"
  data-type="standard"
  data-shape="rectangular"
  data-theme="outline"
  data-text="signin_with"
  data-size="large"
  data-locale="en"
  data-logo_alignment="left"
></div>
