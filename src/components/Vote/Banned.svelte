<script lang="ts">
</script>

<div class="vote-banned">
  <div class="vote-banned__content">
    <p class="vote-banned__message">You is being banned due to previous invalid vote</p>
    <p class="vote-banned__sub-message">
      If this is a mistake, please contact the
      <a class="vote-banned__link" href="https://www.facebook.com/iconclub.it.tdtu" target="_blank">
        Organization Board
      </a>
    </p>
  </div>
</div>

<style>
  .vote-banned {
    width: 100%;
    background-color: #bb2124;
    color: white;
    display: flex;
    justify-content: center;
  }

  .vote-banned__content {
    width: 100%;
    max-width: 768px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .vote-banned__message {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .vote-banned__link {
    color: var(--link);
    text-decoration: underline;
    cursor: pointer;
  }
</style>
