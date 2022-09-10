function Tags({ activeTag, showAll = false, tags }) {
   return (
      tags.length > 0 && (
         <ul className="tags">
            {showAll && (
               <li className={activeTag === "all" ? "active all" : "all"}>
                  <a href={`/archive/`}>all</a>
               </li>
            )}
            {tags.sort().map((tag) => (
               <li className={activeTag === tag ? "active" : ""}>
                  <a href={`/archive/${tag}/`}>{tag}</a>
               </li>
            ))}
         </ul>
      )
   )
}

module.exports = Tags
