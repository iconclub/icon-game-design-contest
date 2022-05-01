<script lang="ts">
  import { onMount } from "svelte";
  import jwt_decode from "jwt-decode";

  import { authApi } from "../../apis/auth.api";
  import { isAuthenticated } from "../../stores/auth.store";
  import { user } from "../../stores/user.store";
  import { modal } from "../../stores/modal.store";

  onMount(() => {
    function disableGoogleOneTapBelowLaptop() {
      const mediaQuery = window.matchMedia("(max-width: 1024px)");
      if (mediaQuery.matches) {
        document.querySelector("#g_id_onload").setAttribute("data-auto_prompt", "false");
      } else {
        document.querySelector("#g_id_onload").setAttribute("data-auto_prompt", "true");
      }
    }
    disableGoogleOneTapBelowLaptop();
  });

  // @Override - OneTap.svelte
  window.handleCredentialResponse = async (response) => {
    const data = await authApi.sendPayload({
      idToken: response.credential,
    });

    const decoded = jwt_decode(data.accessToken) as any;

    $isAuthenticated = true;
    $user = {
      _id: decoded.sub,
      email: decoded.email,
      name: decoded.name,
      role: decoded.role,
    };

    modal.hide();
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
