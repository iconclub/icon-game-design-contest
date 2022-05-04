<script lang="ts">
  // Source:
  // https://github.com/Schum123/svelte-loading-spinners/blob/master/src/Circle2.svelte

  export let size: string | number = "60";
  export let unit: string = "px";
  export let colorOuter: string = "#FF3E00";
  export let colorCenter: string = "#40B3FF";
  export let colorInner: string = "#676778";
  export let durationMultiplier: number = 1;
  export let durationOuter: string = `${durationMultiplier * 2}s`;
  export let durationInner: string = `${durationMultiplier * 1.5}s`;
  export let durationCenter: string = `${durationMultiplier * 3}s`;
</script>

<div
  class="circle"
  style:--size="{size}{unit}"
  style:--colorInner="{colorInner}"
  style:--colorCenter="{colorCenter}"
  style:--colorOuter="{colorOuter}"
  style:--durationInner="{durationInner}"
  style:--durationCenter="{durationCenter}"
  style:--durationOuter="{durationOuter}"
></div>

<style>
  .circle {
    width: var(--size);
    height: var(--size);
    box-sizing: border-box;
    position: relative;
    border: 9px solid transparent;
    border-top-color: var(--colorOuter);
    border-radius: 50%;
    animation: circleSpin var(--durationOuter) linear infinite;
  }

  .circle:before,
  .circle:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: 9px solid transparent;
    border-radius: 50%;
  }

  .circle:after {
    border-top-color: var(--colorInner);
    top: 27px;
    left: 27px;
    right: 27px;
    bottom: 27px;
    animation: circleSpin var(--durationInner) linear infinite;
  }

  .circle:before {
    border-top-color: var(--colorCenter);
    top: 9px;
    left: 9px;
    right: 9px;
    bottom: 9px;
    animation: circleSpin var(--durationCenter) linear infinite;
  }

  @keyframes circleSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
