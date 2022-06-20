<script lang="ts">
  import type { Writable } from 'svelte/store'
  import { fly } from 'svelte/transition'

  export let storeUrl: Writable<string>
  export let duration = 250

</script>

{#key $storeUrl}
  <div
    class="p-16px scrollbar scrollbar-w-0"
    md="scrollbar scrollbar-rounded scrollbar-w-5px scrollbar-w-4px scrollbar-radius-6px scrollbar-track-color-primary/30 scrollbar-thumb-color-primary/75"
    in:fly={{ x: -50, duration: duration, delay: duration + 50 }}
    out:fly|local={{ x: 50, duration: duration }}
  >
    <slot />
  </div>
{/key}
