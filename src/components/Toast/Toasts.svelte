<script lang="ts">
  import { dismissToast, toasts } from "../../stores/toast.store";

  import Toast from "./Toast.svelte";

  console.log($toasts);
</script>

{#if $toasts}
  <div class="toasts">
    {#each $toasts as toast (toast.id)}
      <Toast type="{toast.type}" on:dismiss="{() => dismissToast(toast.id)}">{toast.message}</Toast>
    {/each}
  </div>
{/if}

<style>
  .toasts {
    position: absolute;
    top: 12vh;
    right: 2vw;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 1000;
  }
</style>
