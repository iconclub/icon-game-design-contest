<script lang="ts">
  import { user } from "../../stores/user.store";

  $: name = $user.name || "Guest";
  $: avatar = $user.avatar || "images/default_avatar_retro.jpg";
</script>

<nav class="navbar">
  <a href="/" class="navbar__brand">Game Design Contest 2022</a>

  <img src="images/logo_4.png" alt="Logo" class="navbar__logo" />

  <div class="navbar__right">
    <div class="navbar__item">
      <img src="{avatar}" alt="Avatar" class="navbar__avatar" />
      <p class="navbar__user">Hello, {name}</p>
    </div>
  </div>
</nav>

<style>
  .navbar {
    background-color: var(--cube-2);
    color: white;
    padding: 15px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    justify-items: center;
  }

  .navbar__brand {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: white;
  }

  .navbar__logo {
    height: 50px;
  }

  .navbar__right {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .navbar__item {
    display: flex;
    align-items: center;
  }

  .navbar__avatar {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    object-fit: cover;
  }
</style>
