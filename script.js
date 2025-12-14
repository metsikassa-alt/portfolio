
const typingElement = document.querySelector('.typing');
const textArray = [
  "a Web Developer 💻",
  "a Cybersecurity Enthusiast 🔒",
  "a Java Programmer ☕",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentText = textArray[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1500); // wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length; // loop through texts
    setTimeout(type, 500);
  } else {
    setTimeout(type, typingSpeed);
  }
}

// Start typing animation
type();

// Toggle Menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


