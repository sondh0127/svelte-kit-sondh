<script lang="ts">
  import { page } from '$app/stores'

  export let mini = false

  const items = [
    {
      icon: 'i-ant-design:home-filled',
      path: '/',
      label: 'Home',
    },
    {
      icon: 'i-ant-design:idcard-outlined',
      path: '/about',
      label: 'About',
    },
    {
      icon: 'i-ant-design:book-outlined',
      path: '/educations',
      label: 'Educations',
    },
    {
      icon: 'i-ant-design:folder-open-outlined',
      path: '/works',
      label: 'Works',
    },
    {
      icon: 'i-ant-design:project-outlined',
      path: '/projects',
      label: 'Projects',
    },
    // {
    //   icon: 'i-carbon:carbon',
    //   path: '/blog',
    //   label: 'Blog',
    // },
  ]
</script>

<ul class="flex flex-col items-start py-10px gap-10px list-none m-0 p-0">
  {#each items as item, i (i)}
    {@const active = $page.url.pathname === item.path}
    <li class="py-8px">
      <a
        class="flex items-center py-6px px-16px gap-16px rounded-38px text-white hover:bg-primary"
        class:active
        sveltekit:prefetch
        href={item.path}
      >
        <div class="{item.icon} w-30px h-30px text-base" />
        {#if !mini}
          <div class="text-base font-bold">
            {item.label}
          </div>
        {/if}
      </a>
    </li>
  {/each}
</ul>

<style>
  .active {
    @apply text-primary hover-text-white;
  }
</style>
