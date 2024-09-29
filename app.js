document.addEventListener("DOMContentLoaded", () => {
    const courseForm = document.getElementById("courseForm");
    const courseList = document.getElementById("courseList");
    const contactForm = document.querySelector(".contact form");

    // Función para validar el formulario de cursos
    const validateCourseForm = (courseName, instructorName, startDate, duration) => {
        if (!courseName || !instructorName || !startDate || !duration) {
            alert("Por favor, completa todos los campos obligatorios.");
            return false;
        }
        return true;
    };

 // Función para agregar un curso a la lista
courseForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtener valores de los campos del formulario
    const courseName = document.getElementById("courseName").value.trim();
    const instructorName = document.getElementById("instructorName").value.trim();
    const startDate = document.getElementById("startDate").value.trim();
    const duration = document.getElementById("duration").value.trim();
    const description = document.getElementById("description").value.trim();

    // Validar el formulario
    if (!validateCourseForm(courseName, instructorName, startDate, duration)) {
        return;
    }

    // Crear un nuevo elemento de lista
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <strong>${courseName}</strong>
        (Instructor: ${instructorName}, Inicio: ${startDate}, Duración: ${duration})<br>
        <button class="details-btn">Ver más detalles</button>
        <div class="details" style="display: none;">${description}</div>
    `;

    // Agregar el nuevo curso a la lista
    courseList.appendChild(listItem);

    // Agregar evento para mostrar/ocultar detalles
    const detailsBtn = listItem.querySelector(".details-btn");
    const detailsDiv = listItem.querySelector(".details");
    detailsBtn.addEventListener("click", () => {
        detailsDiv.style.display = detailsDiv.style.display === "none" ? "block" : "none";
    });

    // Limpiar los campos del formulario
    courseForm.reset();
});
});
