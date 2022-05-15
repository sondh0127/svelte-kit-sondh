<script lang="ts">
  import NavMenu from './NavMenu.svelte'
  import logo from './svrj-logo.png'
  import { fade } from 'svelte/transition'
  import { breakpointObserver } from '$lib/Breakpoint/breakpointObserver'

  function getInTouch() {
    window.open('mailto:sondh0127@gmail.com', '_blank')
  }

  const size = breakpointObserver()

  $: show = ['md', 'lg', 'xl', '2xl'].includes($size)
</script>

{#if show}
  {#key show || $size === 'md'}
    <header
      transition:fade={{ duration: 200 }}
      class="flex flex-col gap-40px flex-shrink-0 "
    >
      <div class="flex gap-8px items-center justify-start">
        <a class="" href="https://github.com/sondh0127">
          <img
            class="w-48px h-48px object-contain"
            src={logo}
            alt="SvelteKit"
          />
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
        <button
          on:click={getInTouch}
          class="w-full bg-primary hover:bg-primary/85 flex items-center justify-center rounded-30px py-12px px-24px"
        >
          {#if $size === 'md'}
            <div class="i-carbon-carbon w-[24px] h-[24px] text-white" />
          {:else}
            <span class="text-white text-base font-bold"> Get In Touch </span>
          {/if}
        </button>
      </nav>
    </header>
  {/key}
{/if}
