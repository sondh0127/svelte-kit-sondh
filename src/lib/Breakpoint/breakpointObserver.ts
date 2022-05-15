import { objectEntries } from "@antfu/utils";
import { onMount } from "svelte";
import { derived, writable } from "svelte/store";

export type BreakpointSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type BreakpointValue = 640 | 768 | 1024 | 1280 | 1536
/**
 * Pixel sizes of Carbon grid breakpoints.
 * @type {Record<BreakpointSize, BreakpointValue>}
 */
export const breakpoints: Record<BreakpointSize, BreakpointValue> =
  Object.freeze({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  })

/**
 * Creates a readable store that returns the current breakpoint size.
 * It also provides functions for creating derived stores used to do comparisons.
 */
export function breakpointObserver() {
  const store = writable<BreakpointSize>(undefined);

  onMount(() => {
    const match: Record<BreakpointSize, MediaQueryList> = {
      sm: window.matchMedia(`(max-width: ${breakpoints.md}px)`),
      md: window.matchMedia(
        `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px)`
      ),
      lg: window.matchMedia(
        `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl}px)`
      ),
      xl: window.matchMedia(
        `(min-width: ${breakpoints.xl}px) and (max-width: ${breakpoints['2xl']}px)`
      ),
      '2xl': window.matchMedia(`(min-width: ${breakpoints['2xl']}px)`),
    };
    const matchers = objectEntries(match);
    const sizeByMedia = Object.fromEntries(
      matchers.map(([size, queryList]) => [queryList.media, size])
    );

    const size = matchers.find(([size, queryList]) => queryList.matches)![0];
    store.set(size);

    function handleChange({ matches, media }: MediaQueryListEvent) {
      const size = sizeByMedia[media];
      if (matches) store.set(size);
    }

    matchers.forEach(([size, queryList]) =>
      queryList.addEventListener("change", handleChange)
    );

    return () => {
      matchers.forEach(([size, queryList]) =>
        queryList.removeEventListener("change", handleChange)
      );
    };
  });

  return {
    subscribe: store.subscribe,
    smallerThan: (size: BreakpointSize) => {
      checkSizeValid(size);
      return derived(store, ($size) => breakpoints[$size] < breakpoints[size]);
    },
    largerThan: (size: BreakpointSize) => {
      checkSizeValid(size);
      return derived(store, ($size) => breakpoints[$size] > breakpoints[size]);
    },
  };
}

function checkSizeValid(size: BreakpointSize) {
  if (size in breakpoints == false)
    throw new Error(`"${size}" is not a valid breakpoint size.`);
}

export default breakpointObserver;
