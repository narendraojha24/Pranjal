function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  
  const textElement = document.getElementById("changing-text");
const roles = ["Android developer", "YouTuber"];
let index = 0;

function changeText() {
  textElement.style.opacity = 0; // Fade out the text
  setTimeout(() => {
    textElement.textContent = roles[index]; // Change the text
    textElement.style.opacity = 1; // Fade in the new text
    index = (index + 1) % roles.length; // Move to the next role in the array
  }, 500); // Wait for the fade-out effect before changing the text
}

// Change text every 3 seconds
setInterval(changeText, 2000);
