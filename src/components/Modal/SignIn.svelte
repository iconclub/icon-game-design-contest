<script context="module" lang="ts">
  let modalRef = null;

  export function openModal() {
    modalRef.open();
  }

  export function closeModal() {
    modalRef.close();
  }
</script>

<script lang="ts">
  import Modal from "./Modal.svelte";
  import GoogleSignInButton from "../Google/SignInButton.svelte";
</script>

<Modal bind:this="{modalRef}">
  <svelte:fragment slot="title">
    <h3 class="modal__title">Sign In</h3>
  </svelte:fragment>

  <p class="modal__message">Please sign in to continue.</p>

  <div class="modal__google">
    <GoogleSignInButton />
  </div>
</Modal>

<style>
  .modal__title {
    font-size: 1.6rem;
    color: var(--danger);
  }

  .modal__google {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
</style>
