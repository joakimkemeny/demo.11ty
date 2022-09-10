const markdownIt = require("markdown-it")

function EleventyConfig(config) {
   // Copy assets
   config.addPassthroughCopy({ "src/assets": "assets" })

   // Configure JSX as the templating language
   config.addPlugin(require("eleventy-hast-jsx").plugin)

   // Configure excerpt
   config.setFrontMatterParsingOptions({
      excerpt: true,
      excerpt_alias: "excerpt"
   })

   // Configure Markdown
   config.setLibrary(
      "md",
      markdownIt({
         breaks: false,
         html: true,
         linkify: true,
         typographer: true
      })
   )

   return {
      dir: {
         input: "content",
         layouts: "../src/layouts",
         output: "build"
      }
   }
}

module.exports = EleventyConfig
