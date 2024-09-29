document.addEventListener("DOMContentLoaded", () => {
    const courseForm = document.getElementById("courseForm");
    const courseList = document.getElementById("courseList");
    const contactForm = document.querySelector(".contact form");

    // Función para agregar un curso a la lista
    courseForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página

        // Obtener valores de los campos del formulario
        const courseName = document.getElementById("courseName").value;
        const instructorName = document.getElementById("instructorName").value;
        const startDate = document.getElementById("startDate").value;
        const duration = document.getElementById("duration").value;
        const description = document.getElementById("description").value;

        // Crear un nuevo elemento de lista
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${courseName}</strong> (Instructor: ${instructorName}, Inicio: ${startDate}, Duración: ${duration})<br>${description}`;
        
        // Agregar el nuevo curso a la lista
        courseList.appendChild(listItem);

        // Limpiar los campos del formulario
        courseForm.reset();
    });

    // Función para enviar el formulario de contacto
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página

        // Obtener valores del formulario de contacto
        const email = contactForm.querySelector("input[type='email']").value;
        const message = contactForm.querySelector("textarea").value;

        // Aquí puedes agregar lógica para enviar el mensaje (por ejemplo, a un servidor)
        console.log(`Correo: ${email}, Mensaje: ${message}`);

        // Limpiar el formulario de contacto
        contactForm.reset();
    });
});