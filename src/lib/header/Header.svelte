<script lang="ts">
  import NavMenu from './NavMenu.svelte'
  import { breakpointObserver } from '$lib/Breakpoint/breakpointObserver'
  import StreamingButton from './StreamingButton.svelte'
  import { fly } from 'svelte/transition'

  function getInTouch() {
    window.open('mailto:sondh0127@gmail.com', '_blank')
  }
  export let show = false
  const size = breakpointObserver()

  $: isDrawer = size.smallerThan('md')

  let isMounted = false
  onMount(() => (isMounted = true))
  $: display = isMounted ? !$isDrawer || show : false

  $: mini = size.smallerThan('xl')
</script>


{#if display}
  <header
    transition:fly|local={{ x: -240 }}
    class="{$isDrawer
      ? 'fixed shadow-lg bg-dark z-10'
      : ''} px-16px py-12px min-h-screen flex flex-col flex-shrink-0"
    class:min-w-240px={!$mini}
  >
    <div
      class="h-50px flex gap-16px items-center justify-center"
    >
      <a class="" href="#">
        <img
          class="w-36px h-36px object-contain"
          src="/svrj-logo.png"
          alt="SvelteKit"
        />
      </a>

      {#if !$mini}
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
      <NavMenu mini={$mini} />
      <div class="relative" on:click={getInTouch}>
        <StreamingButton>
          {#if $mini}
            <div class="i-carbon-carbon w-[24px] h-[24px] text-white" />
          {:else}
            <span class="text-white text-base font-bold"> Get In Touch </span>
          {/if}
        </StreamingButton>
      </div>
    </nav>
  </header>
  {#if $isDrawer}
    <div
      on:click={() => (show = false)}
      class="bg-gray-500/40 z-9 absolute w-full h-full"
    />
  {/if}
{/if}
