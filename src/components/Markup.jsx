const { Raw } = require("eleventy-hast-jsx")
const MarkdownIt = require("markdown-it")

function Markup({ html = "", inline = false, markdown }) {
   const Markdown = MarkdownIt({
      breaks: false,
      html: true,
      linkify: true,
      typographer: true
   })

   let rawHtml = markdown
      ? inline
         ? Markdown.renderInline(markdown)
         : Markdown.render(markdown)
      : html

   return <Raw html={rawHtml} />
}

module.exports = Markup
