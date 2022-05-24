<script lang="ts">
  import { rotatingTextIn, rotatingTextOut } from './actions/rotatingText'
  import { windowFocus } from '$lib/stores'
  export let length = 2

  export let duration = 4000
  let currentWordIndex = -1
  let maxWordIndex = length - 1

  function rotateText() {
    tick().then(() => {
      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
    })
  }
  const focused = windowFocus()

  onMount(() => {
    rotateText()

    setInterval(() => {
      if ($focused) {
        rotateText()
      }
    }, duration)
  })

  let clientWidth = 0
</script>

<div class="relative">
  <div class="opacity-0" style="width: {clientWidth}px;">&nbsp;</div>
  {#each Array(length) as _, i (i)}
    {#if i === currentWordIndex}
      <div
        bind:clientWidth
        in:rotatingTextIn={{ focused }}
        out:rotatingTextOut|local={{ focused }}
        class="flex top-0 left-0 absolute"
      >
        <slot {i} />
      </div>
    {/if}
  {/each}
</div>

<style global>
  .letter.out {
    transform: rotateX(90deg);
    transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2);
  }
  .letter.in {
    transition: 0.38s ease;
  }
  .letter.behind {
    transform: rotateX(-90deg);
  }
</style>
