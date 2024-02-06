const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
var products = [
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "/img/products/f1.jpg",
    stars: 5, // Number of stars for rating
    price: 78,
  },
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "/img/products/f2.jpg",
    stars: 5, // Number of stars for rating
    price: 78,
  },
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "/img/products/f3.jpg",
    stars: 5, // Number of stars for rating
    price: 78,
  },
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "/img/products/f4.jpg",
    stars: 5, // Number of stars for rating
    price: 78,
  },
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "/img/products/f5.jpg",
    stars: 5, // Number of stars for rating
    price: 78,
  },
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "/img/products/f6.jpg",
    stars: 5, // Number of stars for rating
    price: 78,
  },
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "/img/products/f7.jpg",
    stars: 5, // Number of stars for rating
    price: 78,
  },
  {
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    image: "/img/products/f8.jpg",
    stars: 5, // Number of stars for rating
    price: 78,
  },
];
$(document).ready(function () {
  // Get the product container
  var productContainer = $(".pro-container");

  // Iterate through products and generate HTML
  products.forEach(function (product) {
    var productHTML = `
      <div class="pro" onclick="window.location.href='sproduct.html';">
        <img src="${product.image}" alt="${product.name}" />
        <div class="des">
          <span>${product.brand}</span>
          <h5>${product.name}</h5>
          <div class="star">
            ${generateStars(product.stars)}
          </div>
          <h4>${product.price}$</h4>
        </div>
        <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
    `;

    // Append the product HTML to the container
    productContainer.append(productHTML);
  });

  // Function to generate star icons based on the number of stars
  function generateStars(starCount) {
    var starsHTML = "";
    for (var i = 0; i < starCount; i++) {
      starsHTML += '<i class="fas fa-star"></i>';
    }
    return starsHTML;
  }
});
