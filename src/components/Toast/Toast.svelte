<script>
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";

  import SuccessIcon from "./SuccessIcon.svelte";
  import ErrorIcon from "./ErrorIcon.svelte";
  import InfoIcon from "./InfoIcon.svelte";

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
    <SuccessIcon width="1.1em" />
  {:else if type === "error"}
    <ErrorIcon width="1.1em" />
  {:else}
    <InfoIcon width="1.1em" />
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
    padding: 0.75rem 1.5rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    margin: 0 auto 0.5rem auto;
    width: 20rem;
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
    padding: 0;
    margin: 0 0 0 auto;
    line-height: 1;
    font-size: 1rem;
  }
</style>
