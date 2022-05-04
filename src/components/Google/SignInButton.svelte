<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    function disableGoogleOneTap() {
      document.querySelector("#g_id_onload").setAttribute("data-auto_prompt", "false");
    }
    disableGoogleOneTap();
  });

  // Response handler is defined in OneTap.svelte
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
