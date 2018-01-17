import babel from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

const config = {
    input: 'src/index.js',
    output: {
        format: 'umd',
        name: 'RE',
        exports: 'named'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        uglify({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    );
}

export default config