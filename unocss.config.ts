import { defineConfig, presetAttributify, presetUno, presetIcons, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
// import { presetScrollbar } from 'unocss-preset-scrollbar'
import { extractorSvelte } from '@unocss/core'



export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    theme: {
      colors: {
        'primary': 'hsl(var(--primary-color))',
        // 'primary-hover': 'var(--primary-color-hover)',
        // 'primary-pressed': 'var(--primary-color-pressed)',
        // 'primary-active': 'var(--primary-color-active)',
        // 'info': 'var(--info-color)',
        // 'info-hover': 'var(--info-color-hover)',
        // 'info-pressed': 'var(--info-color-pressed)',
        // 'info-active': 'var(--info-color-active)',
        // 'success': 'var(--success-color)',
        // 'success-hover': 'var(--success-color-hover)',
        // 'success-pressed': 'var(--success-color-pressed)',
        // 'success-active': 'var(--success-color-active)',
        // 'warning': 'var(--warning-color)',
        // 'warning-hover': 'var(--warning-color-hover)',
        // 'warning-pressed': 'var(--warning-color-pressed)',
        // 'warning-active': 'var(--warning-color-active)',
        // 'error': 'var(--error-color)',
        // 'error-hover': 'var(--error-color-hover)',
        // 'error-pressed': 'var(--error-color-pressed)',
        // 'error-active': 'var(--error-color-active)',
        // 'light': '#ffffff',
        // 'dark': '#18181c',
        // 'deep-dark': '#101014',
      },

    },
    shortcuts: [
      ['scrollbar-default', 'scrollbar scrollbar-rounded scrollbar-w-7px scrollbar-radius-4 scrollbar-track-color-gray-100 scrollbar-thumb-color-gray-300 dark:scrollbar-thumb-color-gray-500 dark:scrollbar-track-color-gray-600'],
    ],
    extractors: [extractorSvelte],
    presets: [
      presetUno(),
      presetIcons({

        collections: {
          carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any),
          'ant-design': () => import('@iconify-json/ant-design/icons.json').then(i => i.default as any),
          'twemoji': () => import('@iconify-json/twemoji/icons.json').then(i => i.default as any),
        },
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
      // presetAttributify({ strict }),
      presetWebFonts({
        provider: 'google',
        fonts: {
          sans: 'Poppins',
          mono: 'Fira Mono'
        },
      }),
      // presetScrollbar({}),

    ],
    transformers: [
      // transformerVariantGroup(),
      transformerDirectives(),
    ],
  })
}

export default createConfig()
