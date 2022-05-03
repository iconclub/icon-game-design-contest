<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  export let type = "error";

  const dispatch = createEventDispatcher();

  function dismiss() {
    dispatch("dismiss");
  }
</script>

<div
  class="toast toast--{type}"
  role="alert"
  in:fly="{{ y: 200, duration: 1000 }}"
  out:fly="{{ x: 200 }}"
>
  {#if type === "success"}
    <span class="material-icons">check_circle</span>
  {:else if type === "error"}
    <span class="material-icons">warning</span>
  {:else}
    <span class="material-icons">info</span>
  {/if}

  <div class="toast__content">
    <slot />
  </div>

  <button type="button" class="toast__close" on:click="{dismiss}">
    <span>&times;</span>
  </button>
</div>

<style>
  .toast {
    color: white;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    width: 250px;
    margin-bottom: 10px;
  }

  .toast--error {
    background: var(--danger);
  }

  .toast--success {
    background: var(--success);
  }

  .toast--info {
    background: var(--info);
  }

  .toast__content {
    margin-left: 1rem;
  }

  .toast__close {
    color: white;
    background: transparent;
    border: none;
    font-size: 1.3rem;
    margin-left: auto;
    cursor: pointer;
  }
</style>
