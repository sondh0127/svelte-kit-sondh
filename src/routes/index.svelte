<!-- <script context="module" lang="ts">
  // import { browser, dev } from '$app/env'

  // export const prerender = true
  // // we don't need any JS on this page, though we'll load
  // // it in dev so that we get hot module replacement...
  // export const hydrate = true
  // // ...but if the client-side router is already loaded
  // export const router = browser
</script> -->
<script lang="ts">
  import MarqueeContainer from '$lib/components/MarqueeContainer.svelte'

  import SvelteHead from '$lib/layout/SvelteHead.svelte'
</script>

<SvelteHead title="Home" />

<div class="flex flex-col gap-64px">
  <section class="flex flex-col gap-8px items-start">
    <div class="wrapper flex-between hidden">
      <p class="px-20px font-mono">Software Engineer</p>
      <p class="px-20px font-mono">Frontend Enthusiast</p>
      <div
        class="i-carbon:information-filled absolute top-[-16px] right-[-16px] w-32px h-32px text-primary"
      />
    </div>
    <div class="wrapper flex-between">
      <!-- <MarqueeContainer delay={2.5} duplicated={true} speed={200} marqueeWidth={100}> -->
      <p class="px-20px font-mono">Mid-Level Developer</p>
      <p class="px-20px font-mono">3+ Years Experience</p>
      <!-- </MarqueeContainer> -->
    </div>

    <div class="wrapper flex-between">
      <!-- <MarqueeContainer duplicated={true} speed={200}>
        <div>
          <p class="mr-32px">
            <span class="text-[#00D8FF]">React</span>
            <span class="i-logos:react h-20px w-20px ml-2px v-baseline" />
          </p>
        </div>
        <div>
          <p class="mr-32px">
            <span class="text-[#41B883]">Vue</span>
            <span class="i-logos:vue h-20px w-20px ml-2px v-baseline" />
          </p>
        </div>
        <div>
          <p class="mr-32px">
            <span class="text-[#FF3E00]">Svelte</span>
            <span class="i-logos:svelte-icon h-20px w-20px ml-2px v-baseline" />
          </p>
        </div>

        <div>
          <p class="mr-32px">
            <span class="text-[#F7DF1E]">Javascript</span>
            <span class="i-logos:javascript h-20px w-20px ml-2px v-baseline" />
          </p>
        </div>
        <div>
          <p class="mr-32px">
            <span class="text-[#007ACC]">Typescript</span>
            <span
              class="i-logos:typescript-icon h-20px w-20px ml-2px v-baseline"
            />
          </p>
        </div>
      </MarqueeContainer> -->
    </div>

    <div class="wrapper flex-between">
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
          <span class="text-[#FFE62E]"> Hanoi, </span>
          <span class="text-[#F42F4C]"> VietNam </span>
        </p>
        <div class="i-twemoji:flag-vietnam h-30px w-30px" />
      </div>
    </div>
  </section>

  <section class="flex flex-col gap-24px text-2xl">
    <div class="wrapper flex-between max-w-560px !justify-center">
      <a class="" href="/about">Who I am?</a>
    </div>
    <div class="wrapper flex-between max-w-560px">
      <a href="/educations">My educations.</a>
      <a href="/works">Check my works!</a>
    </div>
    <div class="wrapper flex-between max-w-560px !justify-center">
      <a href="/projects">Project and Contributors</a>
    </div>
  </section>
</div>

<style>
  .wrapper {
    @apply rounded-30px bg-primary/8 relative w-[min(100%,800px)] px-32px py-8px mx-auto;
  }

  .flex-between {
    @apply flex items-center flex-wrap justify-between;
  }

  p {
    @apply text-xl font-bold;
  }

  a {
    @apply hover-underline hover-text-primary font-bold;
  }
</style>
