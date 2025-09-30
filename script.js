document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show")
    })
  }

  // Smooth scroll for CTA button
  const ctaButton = document.getElementById("cta-button")
  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      document.getElementById("beneficios").scrollIntoView({
        behavior: "smooth",
      })
    })
  }

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll(".nav-menu a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        })
      }

      // Close mobile menu if open
      navMenu.classList.remove("show")
    })
  })

  // Form validation
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const message = document.getElementById("message").value.trim()

      let isValid = true

      // Clear previous errors
      document.getElementById("name-error").textContent = ""
      document.getElementById("email-error").textContent = ""
      document.getElementById("message-error").textContent = ""

      // Validate name
      if (name === "") {
        document.getElementById("name-error").textContent = "El nombre es obligatorio"
        isValid = false
      } else if (name.length < 3) {
        document.getElementById("name-error").textContent = "El nombre debe tener al menos 3 letras"
        isValid = false
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (email === "") {
        document.getElementById("email-error").textContent = "El email es obligatorio"
        isValid = false
      } else if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Por favor ingresa un email válido"
        isValid = false
      }

      // Validate message
      if (message === "") {
        document.getElementById("message-error").textContent = "El mensaje es obligatorio"
        isValid = false
      } else if (message.length < 3) {
        document.getElementById("message-error").textContent = "El mensaje debe tener al menos 3 letras"
        isValid = false
      }

      if (isValid) {
        alert("¡Mensaje enviado correctamente! Te contactaremos pronto.")
        contactForm.reset()
      }
    })
  }
})
