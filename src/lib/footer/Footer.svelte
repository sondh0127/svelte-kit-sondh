<script lang="ts">
  import { supabase } from '$lib/supabase'

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

  async function getProjects() {
    let { data, error } = await supabase.from('projects').select('*')
    return data || []
  }
</script>

<!-- <Counter /> -->
<div class="flex items-center justify-between">
  <div class="flex items-center gap-8px">
    <img alt="avatar-sondh" src="/sondh0127-sm.png" />
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
<div class="overflow-auto">
  {#each footerGroups as item, i (i)}
    <div class="p-26px bg-primary/4 rounded-26px flex flex-col gap-4px">
      <div class="flex items-center justify-between">
        <div class="flex items-end gap-16px">
          <p class="text-base font-bold text-primary">{item.title}</p>
          <div class="{item.icon} w-26px h-26px" />
        </div>
        <p class="text-primary font-bold text-xs">{item.extra}</p>
      </div>

      <div class="flex flex-col">
        {#await getProjects()}
          <!-- promise is pending -->
          <div>Loading...</div>
        {:then projects}
          {#each projects as item, i (i)}
            <div
              class="my-4px py-4px flex justify-between items-center hover:bg-primary/30 cursor-pointer px-4px rounded-lg"
            >
              <p class="text-sm font-semibold">{item.name}</p>
              <p class="text-xs font-medium">05/2022</p>
            </div>
          {/each}
        {/await}
      </div>
    </div>
  {/each}
</div>
