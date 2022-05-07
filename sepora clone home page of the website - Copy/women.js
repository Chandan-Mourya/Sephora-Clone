function store(data) {

    let container = document.getElementById("container")
    map.forEach((el) => {
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.image

        let price = document.createElement("p")
        price.innerText = el.price

        let title = document.createElement("p")

        title.innerText = el.title

        div.append(img, price, title)

        container.append(div)
    })

}
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())

.then(res => console.log(res), store(res))