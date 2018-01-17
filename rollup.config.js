import babel from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: {
        format: 'umd',
        name: 'RE',
        exports: 'named',
        file: 'dist/ramda-e.js'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}