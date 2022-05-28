<script lang="ts">
  import type { Writable } from 'svelte/store'
  import { fly } from 'svelte/transition'

  export let storeUrl: Writable<string>
  export let duration = 250
</script>

{#key $storeUrl}
  <div
    in:fly={{ x: -50, duration: duration, delay: duration + 50 }}
    out:fly|local={{ x: 50, duration: duration }}
  >
    <slot />
  </div>
{/key}
