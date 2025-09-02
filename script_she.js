const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  console.log(users)
  users.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value) || user.id.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://eformvinhhao.github.io/jsonapi/processing_test.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const name = card.querySelector("[data-name]")
      const id = card.querySelector("[data-id]")
      const date = card.querySelector("[data-date]")
      const version = card.querySelector("[data-version]")
      const uselink = card.querySelector("[data-uselink]")
      const datalink = card.querySelector("[data-datalink]")
      const image = card.querySelector("[data-image]")
      name.textContent = user.name
      id.textContent = user.id
      date.textContent = user.date
      uselink.textContent = "Link sử dụng"
      datalink.textContent = "Link dữ liệu"
      version.textContent = user.version
      image.textContent = user.image
      uselink.setAttribute("href", user.uselink);
      datalink.setAttribute("href", user.datalink);
      image.setAttribute("src", user.image);
      userCardContainer.append(card)
      console.log(user.uselink)
      return { 
        name: user.name,
        image: user.image,
        id: user.id,
        date: user.date,
        uselink: user.uselink,
        datalink: user.datalink,
        version: user.version,
        element: card }
    })
  })
