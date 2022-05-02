<script lang="ts">
  import { modal } from "../../stores/modal.store";

  import ModalSignIn from "../Modal/SignIn.svelte";

  function openSignInModal(e: Event) {
    e.preventDefault();

    modal.display();
  }
</script>

<div class="vote-require">
  <div class="vote-require__content">
    <p class="vote-require__message">
      You have to
      <span class="vote-require__link" on:click="{openSignInModal}">sign in</span>
      to vote!
    </p>
  </div>
</div>

<ModalSignIn />

<style>
  .vote-require {
    width: 100%;
    background-color: var(--cube-3);
    color: black;
    display: flex;
    justify-content: center;
  }

  .vote-require__content {
    width: 100%;
    max-width: 768px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .vote-require__message {
    font-size: 1.2rem;
  }

  .vote-require__link {
    color: var(--link);
    text-decoration: underline;
    cursor: pointer;
  }
</style>
