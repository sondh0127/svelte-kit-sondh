<script context="module" lang="ts">
  import { browser, dev } from '$app/env'

  export const prerender = true
  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = true
  // ...but if the client-side router is already loaded
  export const router = browser
</script>

<script lang="ts">
  import SvelteHead from '$lib/layout/SvelteHead.svelte'
</script>

<SvelteHead title="Home" />

<div class="flex flex-col gap-64px">
  <section class="flex flex-col gap-8px">
    <div class="wrapper">
      <p class="text-white">Software Engineer</p>
      <p class="text-white">Frontend Developer</p>
    </div>

    <div class="wrapper">
      <div class="flex items-center gap-8px">
        <div class="i-logos:react h-30px w-30px" />
        <p class="text-[#00D8FF]">React</p>
      </div>
      <div class="flex items-center gap-8px">
        <div class="i-logos:vue h-30px w-30px" />
        <p class="text-[#41B883]">Vue</p>
      </div>
      <div class="flex items-center gap-8px">
        <div class="i-logos:svelte-icon h-30px w-30px" />
        <p class="text-[#FF3E00]">Svelte</p>
      </div>
    </div>

    <div class="wrapper">
      <p class="text-white">Middle Level</p>
      <p class="text-white">3+ years experience</p>
      <div
        class="i-carbon:information-filled absolute top-[-16px] right-[-16px] w-32px h-32px text-primary"
      />
    </div>

    <div class="wrapper">
      <div class="flex items-center gap-8px">
        <div class="i-logos:javascript h-30px w-30px" />
        <p class="text-[#F7DF1E]">Javascript</p>
      </div>

      <div class="flex items-center gap-8px">
        <div class="i-logos:typescript-icon h-30px w-30px" />
        <p class="text-[#007ACC]">Typescript</p>
      </div>
    </div>

    <div class="wrapper">
      <div class="flex items-center gap-8px">
        <div class="i-twemoji:technologist-light-skin-tone h-30px w-30px" />
        <p class="text-white hover:underline hover:text-primary">
          <a href="https://github.com/sondh0127" target="_blank">
            Available for hire
          </a>
        </p>
      </div>

      <div class="flex items-center gap-8px">
        <p>
          <span class="text-[#FFE62E]"> Hanoi, </span>&nbsp
          <span class="text-[#F42F4C]"> VietNam </span>
        </p>
        <div class="i-twemoji:flag-vietnam h-30px w-30px" />
      </div>
    </div>
  </section>

  <section class="flex flex-col gap-24px">
    <div class="wrapper max-w-560px !justify-center">
      <a class="" sveltekit:prefetch href="/about">Who I am?</a>
    </div>
    <div class="wrapper max-w-560px">
      <a sveltekit:prefetch href="/educations">My educations.</a>
      <a sveltekit:prefetch href="/works">Check my works!</a>
    </div>
    <div class="wrapper max-w-560px !justify-center">
      <a sveltekit:prefetch href="/projects">Project and Contributors</a>
    </div>
  </section>
</div>

<style>
  .wrapper {
    @apply flex items-center flex-wrap justify-between px-32px py-8px rounded-30px bg-primary/8 relative w-[min(100%,800px)] mx-auto;
  }

  p {
    @apply text-xl font-bold;
  }

  a {
    @apply hover-underline hover-text-primary text-2xl font-bold;
  }
</style>
