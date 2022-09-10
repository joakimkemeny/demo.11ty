const Navigation = require("../components/Navigation")
const Tags = require("../components/Tags")

function ArchiveLayout({ collections, page, title }) {
   let tags = Object.keys(collections).filter((tag) => !["all"].includes(tag))

   // Find active tag based on page url
   let index = page.url.lastIndexOf("/archive")
   let activeTag = page.url.substring(index + "/archive".length).replaceAll("/", "")
   if (activeTag === "") {
      activeTag = "all"
   }

   return (
      <>
         <Navigation url={page.url} />
         <main>
            <article>
               <header>
                  <h1>{title}</h1>
               </header>
               <Tags activeTag={activeTag} showAll={true} tags={tags} />
               <ul>
                  {collections.article
                     .filter(
                        (article) => activeTag === "all" || article.data.tags.includes(activeTag)
                     )
                     .map((article) => (
                        <li>
                           <a href={article.data.page.url}>{article.data.title}</a>
                        </li>
                     ))}
               </ul>
            </article>
         </main>
      </>
   )
}

module.exports = {
   default: ArchiveLayout,
   data: {
      layout: "BaseLayout.jsx"
   }
}
