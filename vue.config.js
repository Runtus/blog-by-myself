const path = require("path");

function resolve(dir)
{
    return path.join(__dirname,dir);
}

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js","css"];
const isProduction = process.env.NODE_ENV === "production";


module.exports = {
    devServer : {
        proxy :  ""
    },
    productionSourceMap : false,
    configureWebpack: {
        externals : {
            vue : "Vue",
            VueRouter : "vue-router",
            Vuex : "vuex",
            ViewUi: "view-design",
            axios : "axios"
        }
    }
    //         config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [
    //                 new BundleAnalyzerPlugin()
    //             ]
    //         }
    //     }
    // },

    // configureWebpack : {
    //     resolve: {
    //         alias: {
    //             "components": "@/components",
    //             "views" :  resolve("src")
    //         }
    //     }
    // },
    // chainWebpack : config => {
    //     config.resolve.alias.set("@",path.join(__dirname,"src")).
    //     set("components",resolve("src/components"));
    // }
};