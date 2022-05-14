<script lang="ts">
  export let size: BreakpointSize

  export let sizes: Record<BreakpointSize, boolean> = {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  }

  import { createEventDispatcher } from 'svelte'
  import { breakpointObserver, breakpoints } from './breakpointObserver'
  import type { BreakpointSize } from './breakpointObserver'

  const dispatch = createEventDispatcher()
  const observer = breakpointObserver()

  $: size = $observer
  $: sizes = {
    sm: size == 'sm',
    md: size == 'md',
    lg: size == 'lg',
    xl: size == 'xl',
    '2xl': size == '2xl',
  }
  $: if (size != undefined)
    dispatch('change', { size, breakpointValue: breakpoints[size] })
</script>

<slot {size} {sizes} />
