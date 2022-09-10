const { Raw } = require("eleventy-hast-jsx")
const Navigation = require("../components/Navigation")
const Tags = require("../components/Tags")

function ArticleLayout({ content, page, tags, title }) {
   return (
      <>
         <Navigation url={page.url} />
         <main>
            <article>
               <header>
                  <h1>{title}</h1>
               </header>
               <Raw html={content} />
            </article>
            <Tags tags={tags} />
         </main>
      </>
   )
}

module.exports = {
   default: ArticleLayout,
   data: {
      layout: "BaseLayout.jsx"
   }
}
