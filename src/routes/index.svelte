<script context="module" lang="ts">
  import { browser, dev } from '$app/env'

  export const prerender = true
  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev
  // ...but if the client-side router is already loaded
  export const router = browser
</script>

<script lang="ts">
  import SvelteHead from '$lib/layout/SvelteHead.svelte'
</script>

<SvelteHead title="Home" />

<section />
