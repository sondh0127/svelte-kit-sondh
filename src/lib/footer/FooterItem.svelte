<script lang="ts">
  interface Group {
    title: string
    icon: string
    extra: string
  }

  export let group: Group
</script>

<div class="p-26px bg-primary/4 rounded-26px flex flex-col gap-4px">
  <div class="flex items-center justify-between">
    <div class="flex items-end gap-8px">
      <div class="{group.icon} w-26px h-26px" />
      <p class="text-base font-bold text-primary">{group.title}</p>
    </div>
    <p class="text-primary font-bold text-sm">{group.extra}</p>
  </div>

  <slot />
</div>
