<script lang="ts">
  import { spring } from 'svelte/motion'

  let count = 0

  const displayed_count = spring()
  $: displayed_count.set(count)
  $: offset = modulo($displayed_count, 1)

  function modulo(n: number, m: number) {
    // handle negative numbers
    return ((n % m) + m) % m
  }
</script>

<div class="flex outline outline-offset-2 outline-primary/85 rounded">
  <button on:click={() => (count -= 1)}>
    <div class="i-carbon:subtract" />
  </button>

  <div
    class="w-80px h-60px overflow-hidden text-center relative border border-1px border-offset-1 border-gray-700"
  >
    <div
      class="absolute w-full h-full"
      style="transform: translate(0, {100 * offset}%)"
    >
      <strong class="-top-full select-none" aria-hidden="true">
        {Math.floor($displayed_count + 1)}
      </strong>
      <strong>{Math.floor($displayed_count)}</strong>
    </div>
  </div>

  <button on:click={() => (count += 1)}>
    <div class="i-carbon:add" />
  </button>
</div>

<style>
  button {
    @apply w-40px flex hover-bg-primary/80 items-center justify-center p-0 border-0 bg-transparent text-primary text-3xl rounded hover-text-white;
  }
  strong {
    @apply absolute flex w-full h-full font-normal text-white text-4xl items-center justify-center;
  }
</style>
