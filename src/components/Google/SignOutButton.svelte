<script lang="ts">
  import { authApi } from "../../apis/auth.api";
  import { auth } from "../../stores/auth.store";
  import { user } from "../../stores/user.store";

  async function signOut() {
    await authApi.signOut();

    $auth = {
      hasSignedIn: false,
      isBanned: false,
    };

    $user = {
      _id: "",
      name: "",
      email: "",
      avatar: "",
      role: "",
      hasVoted: false,
      gamesVoted: [],
    };
  }
</script>

<div class="google__sign-out-button" on:click="{signOut}">
  <span class="material-icons">logout</span>
</div>

<style>
  .google__sign-out-button {
    color: var(--danger);
    border: 3px solid var(--danger);
    border-radius: 4px;
    font-size: 1.5rem;
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
</style>
