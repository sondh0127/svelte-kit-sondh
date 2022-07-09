import UnoCss from 'unocss/vite'
// // import { fileURLToPath, URL } from 'url'
import AutoImport from 'unplugin-auto-import/vite'

// /** @type {import('vite').UserConfig} */
// const config = {

//   plugins: [
//     sveltekit(),
//     UnoCss(),
//     AutoImport({
//       dts: './src/auto-imports.d.ts',
//       eslintrc: {
//         enabled: true,
//       },
//       imports: [
//         'svelte',
//         'svelte/store',
//         {
//           $lib: ['supabase']
//         }
//       ],
//     }),
//   ],
//   // server: {
//   //   port: 7210,
//   //   host: true,
//   // }
//   // resolve: {
//   //   alias: {
//   //     $components: fileURLToPath(new URL('./src/components', import.meta.url))
//   //   }
//   // }
// };

// export default config;

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    // UnoCss({}),
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
  ]
};

export default config;
