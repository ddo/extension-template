import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import vue from 'rollup-plugin-vue'
import replace from '@rollup/plugin-replace'
import css from 'rollup-plugin-import-css'
// import postcss from "rollup-plugin-postcss";
import styles from 'rollup-plugin-styles'

export default [
    {
        input: 'src/pages/background/main.js',
        output: {
            file: 'dist/background.js',
            format: 'es',
        },
        plugins: [resolve(), uglify()],
    },
    {
        input: 'src/pages/content/main.js',
        output: {
            file: 'dist/content.js',
            format: 'es',
        },
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                'process.env.VUE_ENV': JSON.stringify('browser'),
                preventAssignment: true,
            }),
            // postcss({
            //   plugins: [],
            // }),
            styles({
                mode: 'emit',
            }),
            vue(),
            css(),
            commonjs(),
            resolve({ browser: true }),
            uglify(),
        ],
    },
]