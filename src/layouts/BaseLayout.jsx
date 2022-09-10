const { DOCTYPE, Raw } = require("eleventy-hast-jsx")

function BaseLayout({ content, title }) {
   return (
      <>
         <DOCTYPE />
         <html lang="en">
            <head>
               <meta charSet="utf-8" />
               <title>{title}</title>
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
               />
               <link rel="stylesheet" href="/assets/styles.css" />
            </head>
            <body>
               <Raw html={content} />
            </body>
         </html>
      </>
   )
}

module.exports = {
   default: BaseLayout
}
