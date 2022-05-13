<script lang="ts">
  export let message = "Oops! Something went wrong";
</script>

<div class="error">
  <div class="error__icon">
    <span class="material-icons">running_with_errors</span>
  </div>
  <h1 class="error_message">
    {message}
  </h1>
</div>

<style>
  .error {
    color: gray;
  }

  .error__icon .material-icons {
    font-size: 8rem;
  }

  .error_message {
    font-size: 1.5rem;
    text-align: center;
  }
</style>
