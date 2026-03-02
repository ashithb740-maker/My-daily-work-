document.addEventListener("DOMContentLoaded", function() {

    const container = document.getElementById("checkout-container");
    const totalElement = document.getElementById("checkout-total");

    const productData = localStorage.getItem("buyNowProduct");

    if (!productData) {
        container.innerHTML = "<p>No product selected.</p>";
        return;
    }

    const product = JSON.parse(productData);

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("card");

    const name = document.createElement("h3");
    name.innerText = product.name;

    const price = document.createElement("p");
    price.innerText = "₹ " + product.price;

    itemDiv.appendChild(name);
    itemDiv.appendChild(price);

    container.appendChild(itemDiv);

    totalElement.innerText = product.price;

    document.getElementById("confirm-btn").addEventListener("click", function() {

        alert("Order placed successfully!");

        localStorage.removeItem("buyNowProduct");
        localStorage.removeItem("cart");
        window.location.href = "index.html";

    });

});