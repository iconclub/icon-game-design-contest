<script lang="ts">
  import { fade } from "svelte/transition";

  import { modal } from "../../stores/modal.store";

  function onClose() {
    modal.hide();
  }

  function onEscDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    }
  }
</script>

<svelte:window on:keydown="{onEscDown}" />

{#if $modal.visible}
  <div class="modal" transition:fade="{{ duration: 200 }}" on:click="{onClose}">
    <div class="modal__content">
      <div class="modal__header">
        <slot name="title">
          <h5 class="modal__title">Modal title</h5>
        </slot>
        <button type="button" class="modal__close" on:click="{onClose}">
          <span>&times;</span>
        </button>
      </div>
      <div class="modal__body">
        <slot />
      </div>
      <div class="modal__footer">
        <slot name="footer">
          <button type="button" class="btn btn--secondary" on:click="{onClose}">Close</button>
        </slot>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    z-index: 1050;
  }

  .modal__content {
    background-color: white;
    width: 50vw;
    max-width: 500px;
    min-width: 400px;
    margin: 10vh auto;
    border-radius: 4px;
  }

  .modal__header {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid #e5e5e5;
  }

  .modal__title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-top: 8px;
  }

  .modal__close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.5rem;
  }

  .modal__close:hover {
    color: #c5c5c5;
  }

  .modal__body {
    padding: 16px;
  }

  .modal__footer {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #e5e5e5;
    padding: 16px;
  }
</style>
