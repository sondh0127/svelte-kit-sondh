import { browser } from '$app/env';


export const windowFocus = () => {
  if (browser) {
    const focused = writable(window.document.hasFocus())

    window.addEventListener('blur', () => {
      focused.set(false)
    })

    window.addEventListener('focus', () => {
      focused.set(true)
    })

    return {
      subscribe: focused.subscribe,
    }
  }

  return writable(false)
}
