const items = [
   { href: "/", text: "Blog" },
   { href: "/archive", text: "Archive" },
   { href: "/about", text: "About" }
]

function Navigation({ url = "" }) {
   const activeIndex = items.reduce((previousValue, item, index) => {
      return url.startsWith(item.href) ? index : previousValue
   }, -1)

   return (
      <nav>
         <img alt="11ty logotype" src="/assets/11ty.png" />
         <ul>
            {items.map((item, index) => (
               <li className={activeIndex === index ? "active" : ""}>
                  <a href={item.href}>{item.text}</a>
               </li>
            ))}
         </ul>
      </nav>
   )
}

module.exports = Navigation
