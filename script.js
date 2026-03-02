document.addEventListener("DOMContentLoaded", function() {

    const products = [
        { id: 1, name: "Dell lattitude 5400 laptop", price: 55999, image: "laptop.jpg" },
        { id: 2, name: "Realme narzo 70 5g smartphone", price: 13999, image: "smartphone.jpg" },
        { id: 3, name: "Boat rokerz 413", price: 2499, image: "headphone.jpg" },
        { id: 4, name: "Realme 45w superVOOC charger", price: 1199, image: "charger.jpg" }
    ];

    let cart = [];

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    const cartCount = document.getElementById("cart-count");
    cartCount.innerText = cart.length;

    document.getElementById("cart-button").addEventListener("click", function() {
        window.location.href = "cart.html";
    });

    const container = document.getElementById("product-container");

    products.forEach(function(product) {

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = product.image;

        const title = document.createElement("h3");
        title.innerText = product.name;

        const price = document.createElement("p");
        price.innerText = "INR " + product.price;

        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.innerText = "Add to Cart";

        addButton.addEventListener("click", function() {

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount.innerText = cart.length;

    addButton.classList.add("clicked");

    setTimeout(function() {
        addButton.classList.remove("clicked");
    }, 200);

});

        const buyButton = document.createElement("button");
        buyButton.type = "button";
        buyButton.innerText = "Buy Now";
        buyButton.classList.add("buy-btn");

        buyButton.addEventListener("click", function() {
            localStorage.setItem("buyNowProduct", JSON.stringify(product));
            window.location.href = "checkout.html";
        });

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(buyButton);

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(buttonContainer);

        container.appendChild(card);
    });

});