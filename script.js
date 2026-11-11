
// =================================
// CONFIGURACIÓN
// =================================

// Sustituye las X por tu número de WhatsApp.
// Incluye el prefijo del país, sin +, espacios ni guiones.
// Ejemplo: 34600111222

const WHATSAPP_NUMBER = "34694408565";


// =================================
// MENÚ PARA MÓVILES
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );
});

// Cerrar el menú al pulsar un enlace.

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
    });
});


// =================================
// FORMULARIO DE CONTACTO
// =================================

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (WHATSAPP_NUMBER === "34XXXXXXXXX") {
        formFeedback.textContent =
            "Primero tienes que configurar tu número de WhatsApp en script.js.";
        return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const projectType = document.getElementById("project-type").value;
    const message = document.getElementById("message").value.trim();

    const whatsappMessage = `
¡Hola! Me gustaría solicitar información sobre un proyecto web.

Nombre: ${name}
Correo electrónico: ${email}
Tipo de proyecto: ${projectType}

Mi idea:
${message}

Enviado desde la web de NODO Studio.
    `.trim();

    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});
