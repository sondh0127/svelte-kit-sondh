<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => ({ props: { url } })
</script>

<script lang="ts">
  import 'uno.css'
  import '../app.css'
  import Header from '$lib/header/Header.svelte'
  import Footer from '$lib/footer/Footer.svelte'
  import RotatingText from '$lib/RotatingText.svelte'
  import PageTransition from '$lib/layout/PageTransition.svelte'

  export let url: string
  const storeUrl = writable(url)
  $: storeUrl.set(url)

  let show = false
  let footerDrawer = false

  storeUrl.subscribe(() => {
    show = false
    footerDrawer = false
  })

</script>

<div
  class="flex flex-row lg:gap-24px xl:gap-48px h-screen overflow-hidden justify-between max-w-screen-2xl 2xl:mx-auto"
>
  <Header bind:show />
  <main
    class="flex-grow flex flex-col gap-16px 2xl:w-[calc(1536px-240px-320px-48px-48px)]"
  >
    <div>
      <div class="flex justify-between px-16px py-12px">
        <button
          on:click={() => (show = !show)}
          class="z-8 text-gray-900 flex-shrink-0 w-36px"
        >
          <img
            class="w-36px h-36px object-contain"
            md="hidden"
            src="/svrj-logo.png"
            alt="SvelteKit"
          />
        </button>
        <div class="flex justify-center">
          <picture>
            <!-- <source srcset="svelte-welcome.webp" type="image/webp" /> -->
            <img
              class="h-50px object-fill"
              src="svelte-welcome.png"
              alt="Welcome"
            />
          </picture>
        </div>
        <div class="w-36px">
          <button
            on:click={() => (footerDrawer = !footerDrawer)}
            class="hover:bg-primary/30 rounded-full p-4px"
            lg="hidden"
          >
            <div class="i-ant-design:setting-filled w-30px h-30px" />
          </button>
        </div>
      </div>

      <!--  -->
      <div
        class="flex justify-center relative bg-primary/8 rounded-30px px-16px py-8px"
      >
        <h1 class="text-5xl md:text-6xl font-bold">
          <!-- <RotatingText length={2} let:i duration={3000}> -->
          {#each ['Son Hong Do', 'Son Portfolio'] as item, j (j)}
            <span
              class={[
                'bg-clip-text text-transparent bg-gradient-to-br from-primary/70 via-primary to-white',
                'bg-clip-text text-transparent bg-gradient-to-br from-yellow/70 via-yellow to-white',
              ][0]}
            >
              {#if item === ' '}
                &nbsp;
              {:else}
                {item}
              {/if}
            </span>
          {/each}
          <!-- </RotatingText> -->
        </h1>

        <div
          class="i-twemoji:pushpin w-[26px] h-[26px] absolute right-0 top-0"
        />
      </div>
    </div>

    <PageTransition storeUrl={storeUrl}>
      <div class="p-16px">
        <slot />
      </div>
    </PageTransition>
  </main>

  <Footer bind:footerDrawer />
</div>
