<script lang="ts">
  import { onMount } from "svelte";

  import Modal from "./Modal.svelte";

  let modalRef = null;

  onMount(() => {
    const tabletMql = window.matchMedia("screen and (max-width: 767px)");

    if (tabletMql.matches) {
      modalRef.open();
    }
  });
</script>

<Modal bind:this="{modalRef}">
  <svelte:fragment slot="title">
    <h3 class="modal__title">User Experiences</h3>
  </svelte:fragment>

  <p class="modal__message">Your experience might be not good when using mobile.</p>
  <br />
  <p class="modal__message">Please use a desktop or laptop to view this website.</p>
</Modal>

<style>
  .modal__title {
    font-size: 1.4rem;
    color: var(--info);
  }
</style>
