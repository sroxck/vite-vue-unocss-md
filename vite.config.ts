import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Markdown from 'vite-plugin-md'

import pages from 'vite-plugin-pages'

import Unocss from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/, /\.md$/], // <--
  }),
  Markdown(),
  Unocss({
    shortcuts: [
      { logo: 'i-logos-vue w-6em h-6em transform transition-800' },
    ],
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
    ],
  }),
  pages({dirs:'src/components', extensions: ['vue', 'ts', 'js', 'md'],}),
  ]
})
