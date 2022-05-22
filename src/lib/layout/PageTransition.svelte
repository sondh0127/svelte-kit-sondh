<script>
  import { fly } from 'svelte/transition'
  export let url = ''
  export let duration = 250
</script>

{#key url}
  <div
    in:fly={{ x: -50, duration: duration, delay: duration + 50 }}
    out:fly|local={{ x: 50, duration: duration }}
  >
    <slot />
  </div>
{/key}
