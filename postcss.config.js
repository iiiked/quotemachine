module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('postcss-preset-env'),
        require('postcss-color-function'),
        require('cssnano')({
            preset: 'default'
        })   
    ]
}