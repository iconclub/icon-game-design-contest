<script lang="ts">
  import { isAuthenticated } from "../../stores/auth.store";
  import { modal } from "../../stores/modal.store";

  import ModalSignIn from "../Modal/SignIn.svelte";

  export let data = {
    thumbnail: "",
    name: "",
    team: "",
  };

  function play() {
    console.log("played");
  }

  function vote() {
    if (!$isAuthenticated) {
      modal.display();
    }
  }
</script>

<div class="game">
  <img class="game__thumbnail" src="{data.thumbnail}" alt="{data.name}" on:click="{play}" />
  <div class="game__detail">
    <h5 class="game__title">{data.name}</h5>
    <h5 class="game__team">By {data.team}</h5>
  </div>
  <div class="game__action">
    <button type="button" class="btn btn--success" on:click="{vote}">Vote</button>
  </div>
</div>

<ModalSignIn />

<style>
  .game {
    width: 250px;
    height: max-content;
    border: 3px solid #ccc;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .game:hover {
    border: 3px solid white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  .game__thumbnail {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .game__detail {
    margin: 0px 10px 10px;
  }

  .game__title {
    font-size: 1.1rem;
    margin-bottom: 15px;
    width: calc(100%);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .game__team {
    font-style: italic;
    text-align: end;
    margin-bottom: 15px;
  }

  .game__action {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #ccc;
    padding: 10px;
    background-color: var(--light);
  }
</style>
