// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const scrollBtn = document.getElementById("scroll-btn");
  const contactForm = document.getElementById("contact-form");

  // Navigation scroll effect
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // Mobile menu toggle
  function toggleMobileMenu() {
    mobileMenu.classList.toggle("open");

    // Animate hamburger
    const hamburgers = mobileMenuBtn.querySelectorAll(".hamburger");
    if (mobileMenu.classList.contains("open")) {
      hamburgers[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      hamburgers[1].style.opacity = "0";
      hamburgers[2].style.transform = "rotate(-45deg) translate(4px, -4px)";
    } else {
      hamburgers[0].style.transform = "none";
      hamburgers[1].style.opacity = "1";
      hamburgers[2].style.transform = "none";
    }
  }

  // Smooth scroll to section
  function scrollToSection(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    if (mobileMenu.classList.contains("open")) {
      toggleMobileMenu();
    }
  }

  // Hero scroll button
  function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  // Contact form submission
  function handleFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simple form validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Show success message (in a real app, you'd send this to a server)
    alert("Thank you for your message! I'll get back to you soon.");
    contactForm.reset();
  }

  // Event listeners
  window.addEventListener("scroll", handleScroll);
  mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  scrollBtn.addEventListener("click", scrollToAbout);
  contactForm.addEventListener("submit", handleFormSubmit);

  // Navigation links
  const navLinks = document.querySelectorAll(".nav-link, .nav-mobile-link, .footer-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        scrollToSection(targetId);
      }
    });
  });

  // Hero buttons functionality
  const viewWorkBtn = document.querySelector(".btn-hero");
  const getInTouchBtn = document.querySelector(".btn-glass");

  if (viewWorkBtn) {
    viewWorkBtn.addEventListener("click", function () {
      scrollToSection("#projects");
    });
  }

  if (getInTouchBtn) {
    getInTouchBtn.addEventListener("click", function () {
      scrollToSection("#contact");
    });
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animateElements = document.querySelectorAll(".skill-card, .project-card, .contact-item");
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Project buttons functionality
  const projectButtons = document.querySelectorAll(".project-buttons .btn");
  projectButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // In a real app, these would link to actual projects
      const buttonText = this.textContent.trim();
      if (buttonText === "Code") {
        // alert("This would link to the GitHub repository.");
      } else if (buttonText === "Live") {
        // alert("This would link to the live project.");
      }
    });
  });

  // Social links functionality
  const socialLinks = document.querySelectorAll(".social-link, .footer-social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      alert("This would link to the social media profile.");
    });
  });

  // Resume button functionality
  const resumeButtons = document.querySelectorAll(".btn-outline");
  resumeButtons.forEach((button) => {
    if (button.textContent.trim() === "Resume") {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        // In a real app, this would download or open the resume
        alert("This would download or open the resume.");
      });
    }
  });

  // Initial call to set navbar state
  handleScroll();
});
