const Navigation = require("../components/Navigation")

function BlogLayout({ collections: { article: articles }, page, title }) {
   return (
      <>
         <Navigation url={page.url} />
         <main>
            <header>
               <h1>{title}</h1>
            </header>
            {articles.map((article) => {
               return (
                  <article>
                     <h2>{article.data.title}</h2>
                     <p>{article.data.excerpt}</p>
                     <p>
                        <a href={article.url}>Read full article</a>
                     </p>
                  </article>
               )
            })}
         </main>
      </>
   )
}

module.exports = {
   default: BlogLayout,
   data: {
      layout: "BaseLayout.jsx"
   }
}
