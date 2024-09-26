let container = document.querySelector(".container");
async function getItems() {
    let items = await fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    let products = items.products;
    console.log(products);
    for (let i = 0; i < products.length; i++) {
        let newItems = document.createElement("div")
        newItems.classList.add("items")
        newItems.innerHTML = `
            <div class="image">
                <img src="${products[i].images[0]}" alt="">
            </div>
            <h1 class="title">${products[i].title}</h1>
            <p class="price"> Brand : ${products[i].brand}</p>
            <p class="price"> Price : ${products[i].price}</p>
            <p class="rating"> Rating : ${products[i].rating}</p></p>
            <button>BUY</button>
            
        `
        container.appendChild(newItems)
    }
}
getItems()