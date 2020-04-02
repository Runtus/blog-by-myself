module.exports = {
  "plugins": [

    //   "component", {
    //   "libraryName": "mint-ui",
    //   "style": true
    // },
      ["@babel/plugin-syntax-dynamic-import"],
      ["import", {
        "libraryName": "view-design",
        "libraryDirectory": "src/components"
      }]
  ]
}
