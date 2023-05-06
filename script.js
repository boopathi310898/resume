// Get the navigation links and sections
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

// Add a click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent the default behavior of the link
    e.preventDefault();

    // Get the section ID from the link href
    const sectionID = link.getAttribute("href");

    // Scroll to the section with a smooth animation
    document.querySelector(sectionID).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Add an intersection observer to each section
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If the section is in view, add the "active" class to the corresponding link
    if (entry.isIntersecting) {
      const link = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
      link.classList.add("active");
    } else {
      const link = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
      link.classList.remove("active");
    }
  });
}, {
  threshold: 0.5
});

sections.forEach((section) => {
  observer.observe(section);
});