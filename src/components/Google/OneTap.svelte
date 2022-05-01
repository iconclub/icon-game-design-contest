<script lang="ts">
  import jwt_decode from "jwt-decode";

  import { authApi } from "../../apis/auth.api";
  import { isAuthenticated } from "../../stores/auth.store";
  import { user } from "../../stores/user.store";

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
  };
</script>

<svelte:head>
  <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<div
  id="g_id_onload"
  data-client_id="769272591537-uc3vsgm4fi497461vhkcaugm766q3gqg.apps.googleusercontent.com"
  data-callback="handleCredentialResponse"
  data-locale="en"
></div>
