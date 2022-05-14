<script lang="ts">
  import NavMenu from './NavMenu.svelte'
  import logo from './svrj-logo.png'

  function getInTouch() {
    window.open('mailto:sondh0127@gmail.com', '_blank')
  }
</script>

<header class="flex flex-col gap-40px flex-shrink-0">
  <div class="flex gap-8px items-center">
    <a class="" href="https://github.com/sondh0127">
      <img class="w-48px h-48px object-contain" src={logo} alt="SvelteKit" />
    </a>
    <div class="flex font-bold text-2xl">
      <span class="text-white">sondh</span>
      <span class="text-[#FF3E00]">0</span>
      <span class="text-[#41B883]">1</span>
      <span class="text-[#F7DF1E]">2</span>
      <span class="text-[#00D8FF]">7</span>
    </div>
  </div>

  <nav class="flex flex-col gap-40px">
    <NavMenu />
    <button
      on:click={getInTouch}
      class="w-[max(100%, 150px)] bg-primary hover:bg-primary/85 flex items-center justify-center rounded-30px py-12px px-24px"
    >
      <span class="text-white text-base font-bold"> Get In Touch </span>
    </button>
  </nav>

  <div class="corner" />
</header>
