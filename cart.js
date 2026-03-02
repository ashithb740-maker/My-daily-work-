document.addEventListener("DOMContentLoaded", function() {

    const cartContainer = document.getElementById("cart-container");
    const totalPriceElement = document.getElementById("total-price");

    let cart = [];

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceElement.innerText = 0;
    return;
}
    let total = 0;

    cart.forEach(function(product, index) {

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("card");

        const name = document.createElement("h3");
        name.innerText = product.name;

        const price = document.createElement("p");
        price.innerText = "₹ " + product.price;

        total += product.price;

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.type = "button";

        removeButton.addEventListener("click", function() {

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            window.location.reload();

        });

        itemDiv.appendChild(name);
        itemDiv.appendChild(price);
        itemDiv.appendChild(removeButton);

        cartContainer.appendChild(itemDiv);

    });

    totalPriceElement.innerText = total;
    document.getElementById("clear-cart").addEventListener("click", function() {
    localStorage.removeItem("cart");
    window.location.reload();
    });

});
