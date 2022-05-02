<script lang="ts">
  import Modal from "./Modal.svelte";
  import GoogleSignInButton from "../Google/SignInButton.svelte";
</script>

<Modal>
  <svelte:fragment slot="title">
    <h5 class="modal__title">Sign In</h5>
  </svelte:fragment>

  <p class="modal__message">Please sign in to continue.</p>

  <div class="modal__google">
    <GoogleSignInButton />
  </div>
</Modal>

<style>
  .modal__title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-top: 8px;
    color: var(--danger);
  }

  .modal__google {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
</style>
