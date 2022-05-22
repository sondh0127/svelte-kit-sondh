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


export function rotatingTextIn(node: Element, { speed = 1 }): TransitionConfig {
  const children = node.children
  const h = node.clientHeight

  for (let i = 0; i < children.length; i++) {
    const child = children.item(i) as HTMLElement
    const styles: Partial<CSSStyleDeclaration> = {
      transformOrigin: `center center ${h * 0.6}px`,
    }
    Object.assign(child.style, styles)
    child.classList.add('letter', 'behind')
  }
  const duration = children.length / (speed * 0.01)

  return {
    duration,
    tick: (t) => {
      const i = Math.trunc(children.length * t)
      const child = children[i]
      if (child) {
        child.classList.replace('behind', 'in')
      }
    },
  }
}

export function rotatingTextOut(node: Element, { speed = 1 }): TransitionConfig {
  const children = node.children
  const duration = children.length / (speed * 0.01)

  return {
    duration,
    tick: (t, u) => {
      const i = Math.trunc(children.length * u)
      const child = children[i]
      if (child) {
        child.classList.replace('in', 'out')
      }
    },
  }
}
