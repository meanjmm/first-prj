module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: './app/temp/scripts/bundle.js'
    }
},
module= {
    loaders: [
        {
            loaders: 'babel',
            query: {
            presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
        }
    ]
}























// module.exports = {
//     entry: "C:\\Users\\JMLaptop\\Desktop\\test\\first-prj\\app\\assets\\scripts\\App.js",
//     output: {
//         path:"C:\\Users\\JMLaptop\\Desktop\\test\\first-prj\\app\\temp\\scripts\\",
//         filename: "App1.js"
//     }
// };