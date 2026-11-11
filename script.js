
// =================================
// CONFIGURACIÓN
// =================================

// Número de WhatsApp con prefijo del país.
// Sin +, espacios ni guiones.

const WHATSAPP_NUMBER = "34694408565";


// =================================
// MENÚ PARA MÓVILES
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
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
}


// =================================
// FORMULARIO DE CONTACTO
// =================================

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "34XXXXXXXXX") {
            if (formFeedback) {
                formFeedback.textContent =
                    "Configura primero tu número de WhatsApp en script.js.";
            }
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

Enviado desde la web de TRAZA.
        `.trim();

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}
