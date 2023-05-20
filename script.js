let isLoggedIn = false;
let isFollowed = false;
// JavaScript to toggle modal visibility
function closeModal() {
  document.getElementById("signinmodal").classList.add("hidden");
  document.getElementById("signupmodal").classList.add("hidden");
}
document.getElementById("closeButton").addEventListener("click", closeModal);
function closeModal2() {
  document.getElementById("signinmodal").classList.add("hidden");
  document.getElementById("signupmodal").classList.add("hidden");
}
document.getElementById("closeButton2").addEventListener("click", closeModal2);

// Function to handle the click event
function handleLogin() {
  isLoggedIn = true;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("loginButton").classList.add("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("div3").classList.remove("hidden");
}

// Add event listener to the login button or element
document.getElementById("loginButton").addEventListener("click", handleLogin);
function handleFollow() {
  isFollowed = !isFollowed;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("follow").classList.add("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("followed").classList.remove("hidden");
}
document.getElementById("follow").addEventListener("click", handleFollow);
function handleGroup() {
  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("join").classList.add("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("leave").classList.remove("hidden");
}
document.getElementById("join").addEventListener("click", handleGroup);
function handleFollow2() {
  isFollowed = !isFollowed;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("follow2").classList.add("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("followed2").classList.remove("hidden");
}
document.getElementById("follow2").addEventListener("click", handleFollow2);
function handleFollow3() {
  isFollowed = !isFollowed;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("follow3").classList.add("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("followed3").classList.remove("hidden");
}
document.getElementById("follow3").addEventListener("click", handleFollow3);

function handleFollow4() {
  isFollowed = !isFollowed;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("follow4").classList.add("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("followed4").classList.remove("hidden");
}
document.getElementById("follow4").addEventListener("click", handleFollow4);

function handleFollowed() {
  isFollowed = !isFollowed;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("follow").classList.remove("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("followed").classList.add("hidden");
}
document.getElementById("followed").addEventListener("click", handleFollowed);
function handleGrouped() {
  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("leave").classList.add("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("join").classList.remove("hidden");
}
document.getElementById("leave").addEventListener("click", handleGrouped);
function handleFollowed2() {
  isFollowed = !isFollowed;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("follow2").classList.remove("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("followed2").classList.add("hidden");
}
document.getElementById("followed2").addEventListener("click", handleFollowed2);
function handleFollowed3() {
  isFollowed = !isFollowed;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("follow3").classList.remove("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("followed3").classList.add("hidden");
}
document.getElementById("followed3").addEventListener("click", handleFollowed3);
function handleFollowed4() {
  isFollowed = !isFollowed;

  // Apply Tailwind CSS classes for logged-in users
  document.getElementById("follow4").classList.remove("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("followed4").classList.add("hidden");
}
document.getElementById("followed4").addEventListener("click", handleFollowed4);

function handleSignIn() {
  document.getElementById("signinmodal").classList.remove("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("signupmodal").classList.add("hidden");
}
document.getElementById("signinbutton").addEventListener("click", handleSignIn);

function handleSignUp() {
  document.getElementById("signinmodal").classList.add("hidden");

  // Remove Tailwind CSS class for non-logged-in users
  document.getElementById("signupmodal").classList.remove("hidden");
}
document.getElementById("signupbutton").addEventListener("click", handleSignUp);
