const products = [
  {
    "id": 1,
    "name": "Product no 01",
    "description": "High-quality product with modern features.",
    "price": 29.99,
    "currency": "USD",
    "inStock": true,
    "category": "Electronics",
    "tags": ["gadget", "tech", "new"],
    "createdAt": "2025-05-16T10:00:00Z",
    "updatedAt": "2025-05-16T10:00:00Z"
  },
  {
    "id": 2,
    "name": "Product no 02",
    "description": "Durable and affordable item for everyday use.",
    "price": 15.50,
    "currency": "USD",
    "inStock": false,
    "category": "Home & Kitchen",
    "tags": ["kitchen", "daily-use"],
    "createdAt": "2025-05-15T12:30:00Z",
    "updatedAt": "2025-05-15T12:30:00Z"
  }
];


const container = document.getElementsByClassName("card-container")[0];


products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${product.name}</h3>
    <p><strong>Category:</strong> ${product.category}</p>
    <p>${product.description}</p>
    <p><strong>Price:</strong> ${product.price} ${product.currency}</p>
    <p><strong>Status:</strong> ${product.inStock ? 'In Stock' : '<span class="out-of-stock">Out of Stock</span>'}</p>
    <p><strong>Tags:</strong> ${product.tags.join(", ")}</p>
  `;

  container.appendChild(card);
});
