<script lang="ts">
  import NavMenu from './NavMenu.svelte'
  import logo from './svrj-logo.png'
  import { breakpointObserver } from '$lib/Breakpoint/breakpointObserver'
  import StreamingButton from './StreamingButton.svelte'

  function getInTouch() {
    window.open('mailto:sondh0127@gmail.com', '_blank')
  }
  let show = true
  let isMounted = false
  const size = breakpointObserver()

  $: if (isMounted) {
    show = ['md', 'lg', 'xl', '2xl'].includes($size)
  }

  onMount(() => {
    isMounted = true
  })
</script>

{#if show}
  <div class="flex gap-8px items-center justify-start">
    <a class="" href="https://github.com/sondh0127">
      <img class="w-48px h-48px object-contain" src={logo} alt="SvelteKit" />
    </a>

    {#if $size !== 'md'}
      <div class="flex font-bold text-2xl">
        <span class="text-white">sondh</span>
        <span class="text-[#FF3E00]">0</span>
        <span class="text-[#41B883]">1</span>
        <span class="text-[#F7DF1E]">2</span>
        <span class="text-[#00D8FF]">7</span>
      </div>
    {/if}
  </div>

  <nav class="flex flex-col gap-40px">
    <NavMenu mini={$size === 'md'} />
    <div class="relative" on:click={getInTouch}>
      <StreamingButton>
        {#if $size === 'md'}
          <div class="i-carbon-carbon w-[24px] h-[24px] text-white" />
        {:else}
          <span class="text-white text-base font-bold"> Get In Touch </span>
        {/if}
      </StreamingButton>
    </div>
  </nav>
{/if}
