/* const numbers = [3, 4, 6, 7, 2];
const result = numbers.forEach(n => console.log(n + 2));
 */ //Result can not be consoled after using for Each

const products = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1000 },
  { name: "Tablet", price: 300 },
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.style.textAlign = "center";
  productDiv.style.border = "2px solid red";
  productDiv.style.display = "flex";
  productDiv.style.justifyContent = "center";
  productDiv.style.gap = "1rem";

  productDiv.innerHTML = `
    <h3>${product.name}</h3>
    <h5>${product.price}</h5>  
    `;
  productList.appendChild(productDiv);
});

const notifications = [
  { message: "You have a new friend request.", time: "2 minutes ago" },
  { message: "Your password was changed successfully.", time: "1 hour ago" },
  { message: "New comment on your post.", time: "Yesterday" },
];

const notificationList = document.getElementById("notification-list");
notifications.forEach((notification, index) => {
  const notificationDiv = document.createElement("div");
  notificationDiv.classList.add("notification");
  index++;
  notificationDiv.innerHTML = `
      <p>${index}: ${notification.message}</p>
      <small>${notification.time}</small>
      <button class="dismiss-btn">Dismiss</button>
    `;

  // Add event listener to the dismiss button
  notificationDiv
    .querySelector(".dismiss-btn")
    .addEventListener("click", () => {
      notificationDiv.remove(); // Remove the notification from the DOM
      console.log(`Notification ${index + 1} dismissed.`);
    });

  notificationList.appendChild(notificationDiv);
});
