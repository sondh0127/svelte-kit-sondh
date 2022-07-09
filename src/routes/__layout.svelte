<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => ({ props: { url } })
</script>

<script lang="ts">
  // import 'uno.css'
  import '../app.css'
  import Header from '$lib/header/Header.svelte'
  import Footer from '$lib/footer/Footer.svelte'
  import PageTransition from '$lib/layout/PageTransition.svelte'
  import MarqueeContainer from '$lib/components/MarqueeContainer.svelte'

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
  class="grid md:grid-cols-[0.5fr_2.5fr] lg:grid-cols-[0.3fr_1.9fr_0.8fr] xl:grid-cols-[0.5fr_1.8fr_0.7fr] min-h-screen mx-auto 2xl:w-screen-2xl"
  sm="w-screen-sm"
  md="w-screen-md"
  lg="w-screen-lg"
  xl="w-screen-xl"
>
  <Header bind:show />
  <main class="flex-grow h-full w-full flex flex-col gap-16px">
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
        class="flex justify-center relative bg-primary/8 rounded-30px px-16px py-8px mx-8px"
      >
        <h1
          class="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary/70 via-primary to-white"
        >
          Son Portfolio
        </h1>

        <div
          class="i-twemoji:pushpin w-[26px] h-[26px] absolute right-0 top-0"
        />
      </div>
    </div>

    <PageTransition {storeUrl}>
      <slot />
    </PageTransition>
  </main>

  <Footer bind:footerDrawer />
</div>
