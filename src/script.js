let isLoggedIn = false;
// JavaScript to toggle modal visibility
const toggleButton = document.querySelector(
  '[data-modal-toggle="authentication-modal"]'
);
const modal = document.querySelector("#authentication-modal");

toggleButton.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

const hideButtons = document.querySelectorAll(
  '[data-modal-hide="authentication-modal"]'
);
hideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});

// Function to handle the click event
function handleLogin() {
  isLoggedIn = true;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("div1").classList.remove("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("div3").classList.add("hidden");
}

// Add event listener to the login button or element
document.getElementById("loginButton").addEventListener("click", handleLogin);
