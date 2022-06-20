<script lang="ts">
  import breakpointObserver from '$lib/Breakpoint/breakpointObserver'

  import { supabase } from '$lib/supabase'
  import { fly } from 'svelte/transition'
  import FooterItem from './FooterItem.svelte'

  export let footerDrawer = false

  const footerGroups = [
    {
      title: 'Working on',
      icon: 'i-twemoji:laptop',
      extra: '3 projects',
    },
    {
      title: 'Current learning',
      icon: 'i-twemoji:bookmark',
      extra: '3 resources',
    },

    {
      title: 'Wish list',
      icon: 'i-twemoji:wrapped-gift',
      extra: '3 items',
    },
  ]

  async function getData() {
    const prom1 = supabase.from('projects').select('*')
    const prom2 = supabase.from('resources').select('*')
    const prom3 = supabase.from('wishlist').select('*')
    const res = await Promise.all([prom1, prom2, prom3])
    return [res[0].data, res[1].data, res[2].data]
  }

  const size = breakpointObserver()

  $: isDrawer = size.smallerThan('lg')

  let isMounted = false
  onMount(() => (isMounted = true))
  $: display = isMounted ? !$isDrawer || footerDrawer : false
</script>

<!-- <Counter /> -->

{#if display}
  <footer
    transition:fly|local={{ x: 360 }}
    class="lg:flex py-12px px-16px flex-col gap-36px min-w-320px min-h-screen {footerDrawer
      ? 'fixed shadow-lg bg-dark z-10 right-0 '
      : ''}"
  >
    <div class="flex items-center justify-between px-16px">
      <div class="flex items-center gap-8px">
        <img alt="avatar-sondh" class="w-50px h-50px" src="/sondh0127-sm.png" />
        <div>
          <p class="font-bold text-sm">Son Hong Do</p>
          <p class="font-bold text-sm text-primary">@sondh0127</p>
        </div>
      </div>
      <div>
        <button class="hover:bg-primary/30 rounded-full p-4px">
          <div class="i-ant-design:setting-filled w-30px h-30px" />
        </button>
      </div>
    </div>
    <div class="overflow-auto gap-36px flex flex-col">
      {#await getData()}
        {#each footerGroups as group, i (i)}
          <FooterItem {group}>
            <div class="flex flex-col min-h-[calc(28px+8px)]" />
          </FooterItem>
        {/each}
      {:then data}
        {#each footerGroups as group, i (i)}
          <FooterItem {group}>
            <div class="flex flex-col min-h-[calc(28px+8px)]">
              {#each data[i] || [] as item, j (j)}
                <div
                  class="my-4px py-4px flex justify-between items-center hover:bg-primary/30 cursor-pointer px-8px rounded-lg"
                >
                  <p class="text-sm font-semibold">{item.name}</p>
                  <p class="text-xs font-medium">05/2022</p>
                </div>
              {/each}
            </div>
          </FooterItem>
        {/each}
      {/await}
    </div>
  </footer>
  {#if $isDrawer}
    <div
      on:click={() => (footerDrawer = false)}
      class="bg-gray-500/40 z-9 absolute w-full h-full"
    />
  {/if}
{/if}
