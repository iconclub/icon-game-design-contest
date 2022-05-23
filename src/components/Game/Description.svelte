<script lang="ts">
  import { game } from "../../stores/game.store";
</script>

<div class="description">
  <div class="description__content">
    <h1 class="description__name">{$game.playing.name}</h1>

    <h3 class="description__title">Descriptions</h3>
    <p class="description__text">
      {$game.playing.description}
    </p>

    <h3 class="description__title">Team members</h3>
    <ul class="description__members">
      {#each $game.playing.members as member}
        <li class="description__member">- {member}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .description {
    font-family: "Bangers", "Roboto", sans-serif;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
  }

  .description__content {
    width: 100%;
    max-width: 768px;
    padding: 15px;
  }

  .description__name {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--cube-1);
  }

  .description__title {
    font-size: 1.6rem;
    color: var(--info);
  }

  .description__text {
    font-size: 1.3rem;
    text-align: justify;
    text-justify: inter-word;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  .description__member {
    font-size: 1.3rem;
  }
</style>
