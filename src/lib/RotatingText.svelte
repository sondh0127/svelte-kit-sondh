<script lang="ts">
  import { sleep } from '@antfu/utils'

  import { rotatingText } from './actions/rotatingText'
  export let words = [
    'awesome',
    'beautiful',
    'creative',
    'fabulous',
    'interesting',
  ]
  export let classNames = [
    'text-[#e74c3c]',
    'text-[#8e44ad]',
    'text-[#3498db]',
    'text-[#2ecc71]',
    'text-[#f1c40f]',
  ]
  let currentWordIndex = -1
  let maxWordIndex = words.length - 1

  async function rotateText() {
    await tick()
    currentWordIndex =
      currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1
  }

  onMount(() => {
    rotateText()
  })
</script>

<div class="relative">
  {#each words as w, i (i)}
    <span class="opacity-0">{i === currentWordIndex ? w : ''}</span>
    {#if i === currentWordIndex}
      <span class="absolute top-0 left-0 flex {classNames[i]}">
        {#each w as item, j (j)}
          <span
            on:introend={async () => {
              if (j === w.length - 1) {
                await sleep(1500)
                rotateText()
              }
            }}
            in:rotatingText={{ delay: j * 100 }}
            out:rotatingText={{ delay: j * 100, direction: 1 }}
          >
            {#if item === ' '}
              &nbsp;
            {:else}
              {item}
            {/if}
          </span>
        {/each}
      </span>
    {/if}
  {/each}
</div>
