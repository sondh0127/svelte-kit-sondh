import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import UnoCss from 'unocss/vite'
// import { fileURLToPath, URL } from 'url'
import AutoImport from 'unplugin-auto-import/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },

    vite: {
      plugins: [
        UnoCss(),
        AutoImport({
          dts: './src/auto-imports.d.ts',
          eslintrc: {
            enabled: true,
          },
          imports: [
            'svelte',
            'svelte/store',
            {
              $lib: ['supabase']
            }
          ],
        }),
      ],
      server: {
        port: 7210,
        host: true,
      }
      // resolve: {
      //   alias: {
      //     $components: fileURLToPath(new URL('./src/components', import.meta.url))
      //   }
      // }
    },
  }
};

export default config;
