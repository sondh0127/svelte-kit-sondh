import type { TransitionConfig } from 'svelte/transition'

export function rotatingText(
  node: Element,
  { delay = 0, direction = -1 as 1 | -1 },
): TransitionConfig {
  const h = node.clientHeight
  return {
    delay: delay,
    css: (t, u) => {
      return `
        opacity: ${t * 2};
        transform-origin: center center ${h * 0.5}px;
        transform: rotateX(${direction * 90 * u}deg);
      `
    },
  }
}
