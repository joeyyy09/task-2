
window.addEventListener("scroll", function (e) {
  const target = document.querySelectorAll(".scroll");

  var index = 0,
    length = target.length;
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if (target[index].dataset.direction === "vertical") {
      target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
    } else {
      var posX = window.pageYOffset * target[index].dataset.ratex;
      var posY = window.pageYOffset * target[index].dataset.ratey;

      target[index].style.transform =
        "translate3d(" + posX + "px, " + posY + "px, 0px)";
    }
  }
});
// Get the element to fade
const fadeElement = document.querySelector(".fade-element");

// Set the initial opacity
let opacity = 1;

// Function to handle scroll event
function handleScroll() {
  // Calculate the opacity based on the scroll position
  opacity = 1 - 9 * (window.scrollY / window.innerHeight);

  // Apply the opacity to the element
  fadeElement.style.opacity = opacity > 0 ? opacity : 0;
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);



function scrollLeftOnMobile() {
  if (window.innerWidth < 768) {
    // Adjust the threshold as needed
    window.scrollBy(40, 0); // Adjust the scroll amount as needed
  }
}

setInterval(scrollLeftOnMobile, 2000); // 2000 milliseconds = 2 seconds
