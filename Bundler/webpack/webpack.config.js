module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        // 在复杂的项目里可能会有一些构建出的资源需要异步加载，加载这些异步资源需要对应的 URL 地址。
        // utput.publicPath 配置发布到线上资源的 URL 前缀，为string 类型。 默认值是空字符串 ''，即使用相对路径。
        // 使用该配置项时要小心，稍有不慎将导致资源加载404错误。
        // publicPath: 'https://cdn.example.com/assets/',
        // filename:'[name]_[chunkhash:8].js',
        filename: "./dist/bundle.js",
        // path: path.resolve(__dirname, 'dist_[hash]'),
        // output.libraryTarget 配置以何种方式导出库。
        // output.library 配置导出库的名称。
        // 当用 Webpack 去构建一个可以被其他模块导入使用的库时需要用到它们。
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
        // loaders: [
        //     // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        //     { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        // ],

        // preLoaders: [
        //     // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        //     { test: /\.js$/, loader: "source-map-loader" }
        // ]
    },

    // Other options...
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};