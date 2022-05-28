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
  import SvelteHead from '$lib/layout/SvelteHead.svelte'
  import RotatingText from '$lib/RotatingText.svelte'
</script>

<SvelteHead title="Home" />

<div class="flex flex-col gap-64px">
  <section class="flex flex-col gap-8px">
    <div class="wrapper flex-between">
      <p>
        <!-- <RotatingText length={2} let:i> -->
          {#each ['Software Engineer', 'Frontend Enthusiast'] as item, j (j)}
            <span>
              {#if item === ' '}
                &nbsp;
              {:else}
                {item}
              {/if}
            </span>
          {/each}
        <!-- </RotatingText> -->
      </p>
      <p>
        <!-- <RotatingText length={2} let:i> -->
          {#each ['Mid-Level Developer', '3+ Years Experience'] as item, j (j)}
            <span>
              {#if item === ' '}
                &nbsp;
              {:else}
                {item}
              {/if}
            </span>
          {/each}
        <!-- </RotatingText> -->
      </p>
      <div
        class="i-carbon:information-filled absolute top-[-16px] right-[-16px] w-32px h-32px text-primary"
      />
    </div>

    <div class="wrapper flex-between">
      <p>
        <!-- <RotatingText length={3} let:i duration={3000}> -->
          <!-- {#if i === 0} -->
            {#each 'React' as c}
              <span class="text-[#00D8FF]">{c}</span>
            {/each}
            <span class="i-logos:react h-26px w-26px ml-6px" />
          <!-- {/if} -->
          <!-- {#if i === 1} -->
            {#each 'Vue' as c}
              <span class="text-[#41B883]">{c}</span>
            {/each}
            <span class="i-logos:vue h-26px w-26px ml-6px" />
          <!-- {/if} -->
          <!-- {#if i === 2} -->
            {#each 'Svelte' as c}
              <span class="text-[#FF3E00]">{c}</span>
            {/each}
            <span class="i-logos:svelte-icon h-26px w-26px ml-6px" />
          <!-- {/if} -->
        <!-- </RotatingText> -->
      </p>

      <p>
        <!-- <RotatingText length={2} let:i duration={3000}> -->
          <!-- {#if i === 0} -->
            {#each 'Javascript' as c}
              <span class="text-[#F7DF1E]">{c}</span>
            {/each}
            <span class="i-logos:javascript h-26px w-26px ml-6px" />
          <!-- {/if} -->
          <!-- {#if i === 1} -->
            {#each 'Typescript' as c}
              <span class="text-[#007ACC]">{c}</span>
            {/each}
            <span class="i-logos:typescript-icon h-26px w-26px ml-6px" />
          <!-- {/if} -->
        <!-- </RotatingText> -->
      </p>
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
