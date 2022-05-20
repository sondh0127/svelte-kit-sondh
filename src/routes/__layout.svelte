<script lang="ts">
  import 'uno.css'
  import '../app.css'
  import Header from '$lib/header/Header.svelte'
  import Footer from '$lib/footer/Footer.svelte'
</script>

<div
  class="flex flex-row gap-48px px-128px py-48px h-screen overflow-hidden justify-between"
>
  <header
    class="flex flex-col gap-40px flex-shrink-0 "
  >
    <Header />
  </header>

  <main class="flex-grow flex flex-col gap-16px">
    <div>
      <div class="flex justify-center">
        <picture>
          <source srcset="svelte-welcome.webp" type="image/webp" />
          <img
            class="h-100px object-fill"
            src="svelte-welcome.png"
            alt="Welcome"
          />
        </picture>
      </div>
      <div
        class="flex justify-center relative bg-primary/8 rounded-30px px-16px py-8px"
      >
        <h1
          class="bg-clip-text text-transparent text-6xl font-bold bg-gradient-to-br from-primary/70 via-primary to-white"
        >
          Son Portfolio
        </h1>

        <div
          class="i-twemoji:pushpin w-[26px] h-[26px] absolute right-0 top-0"
        />
      </div>
    </div>
    <div class="p-16px">
      <slot />
    </div>
  </main>

  <footer class="hidden xl:flex flex-col gap-36px min-w-320px">
    <Footer />
  </footer>
</div>
