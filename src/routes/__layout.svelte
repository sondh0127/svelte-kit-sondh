<script lang="ts">
  import 'uno.css'
  import '../app.css'
  import Header from '$lib/header/Header.svelte'
  import Counter from '$lib/Counter.svelte'
</script>

<div
  class="flex flex-row gap-48px px-128px py-48px min-h-screen justify-between"
>
  <Header />

  <main class="flex-grow">
    <div
      class="flex justify-center relative bg-primary/8 rounded-30px px-16px py-8px"
    >
      <h1
        class="bg-clip-text text-transparent text-6xl font-bold bg-gradient-to-br from-primary/70 via-primary to-white"
      >
        Son Portfolio
      </h1>

      <div class="i-twemoji:pushpin w-[30px] h-[30px] absolute right-0 top-0" />
    </div>
    <h1>
      <div class="welcome">
        <picture>
          <source srcset="svelte-welcome.webp" type="image/webp" />
          <img src="svelte-welcome.png" alt="Welcome" />
        </picture>
      </div>
    </h1>
    <slot />
  </main>

  <footer>
    <Counter />
  </footer>
</div>
