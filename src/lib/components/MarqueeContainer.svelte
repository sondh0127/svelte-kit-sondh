<script lang="ts">
  export let pauseOnHover = false

  export let pauseOnClick = false

  export let direction = 'left'

  export let speed = 140

  export let marqueeWidth = 800

  export let duplicated = false

  export let play = true

  let loopCount = 0
  let marqWrapEl: HTMLDivElement

  function animStart() {
    if (duplicated) {
      loopCount++
    }
    marqWrapEl.addEventListener('animationend', animStart, { once: false })
  }

  let start = false
  $: if (marqWrapEl && !start) {
    start = true
    animStart()
  }

  //max width of the marquee: 1640
  let containerWidth
  $: duration = loopCount > 1 ? 1640 / speed : (1640 + marqueeWidth) / speed

  $: name = loopCount > 1 ? 'scroll' : 'scroll0'

  $: _style = `
		--pause-on-hover: ${pauseOnHover ? 'paused' : 'running'};
		--pause-on-click: ${pauseOnClick ? 'paused' : 'running'};
	`

  $: _marqueeStyle = `
		--play: ${play ? 'running' : 'paused'};
		--direction: ${direction === 'left' ? 'normal' : 'reverse'};
		--duration: ${duration}s;
    --name: ${name};
    --transform : translateX(${loopCount > 1 ? 0 : marqueeWidth / 16}em);
    --iteration-count: ${loopCount > 1 || !duplicated ? 'infinite' : '1'};
	`
</script>

<div class="marquee-container" style={_style} bind:clientWidth={containerWidth}>
  <div class="marquee" bind:this={marqWrapEl} style={_marqueeStyle}>
    <slot />
  </div>
  {#if duplicated}
    <div class="marquee" style={_marqueeStyle}>
      <slot />
    </div>
  {/if}
</div>

<!-- <div class="absolute top-0 left-0">
  loopCount: {loopCount}
</div> -->
<style global>
  .marquee-container {
    display: flex;
    width: 100%;
    overflow-x: hidden;
    flex-direction: row;
    position: relative;
  }

  .marquee-container:hover .marquee {
    animation-play-state: var(--pause-on-hover);
  }

  .marquee-container:active .marquee {
    animation-play-state: var(--pause-on-click);
  }

  .marquee {
    flex: 0 0 auto;
    min-width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    animation: var(--name) var(--duration) linear 0.001s var(--iteration-count);
    animation-play-state: var(--play);
    animation-direction: normal;
    animation-direction: var(--direction);
    transform: var(--transform);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes scroll0 {
    100% {
      transform: translateX(-100%);
    }
  }
</style>
