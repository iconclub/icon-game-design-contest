<script lang="ts">
  import { user } from "../../stores/user.store";

  $: name = $user.name || "Guest";
  $: avatar = $user.avatar || "/images/default_avatar_retro.jpg";
</script>

<nav class="navbar">
  <a href="/" class="navbar__brand">
    <img src="favicon.png" alt="logo" class="navbar__logo" />
    Game Design Contest 2022
  </a>
  <div class="navbar__right">
    <div class="navbar__item">
      Hello, {name}
      <img src="{avatar}" alt="Avatar" class="navbar__avatar" />
    </div>
  </div>
</nav>

<style>
  .navbar {
    background-color: var(--cube-2);
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar__brand {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }

  .navbar__brand:hover {
    color: var(--cube-3);
  }

  .navbar__logo {
    width: 40px;
    margin-right: 15px;
  }

  .navbar__item {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .navbar__avatar {
    vertical-align: middle;
    width: 40px;
    height: 40px;
    margin-left: 15px;
    border-radius: 50%;
    object-fit: cover;
  }
</style>
