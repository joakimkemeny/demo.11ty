const { Raw } = require("eleventy-hast-jsx")
const Navigation = require("../components/Navigation")

function AboutLayout({ content, page, title }) {
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
         </main>
      </>
   )
}

module.exports = {
   default: AboutLayout,
   data: {
      layout: "BaseLayout.jsx"
   }
}
