document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("newsletter-form");
    const successMessage = document.getElementById("success-message");
    
    if (form && successMessage) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        successMessage.classList.remove("hidden");
        sessionStorage.setItem("newsletter-submitted", "true");
      });
  
      if (sessionStorage.getItem("newsletter-submitted") === "true") {
        successMessage.classList.remove("hidden");
      }
    }
  });