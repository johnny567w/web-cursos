document.addEventListener("DOMContentLoaded", () => {
    // Obtiene el formulario y la lista de cursos del DOM
    const courseForm = document.getElementById("courseForm");
    const courseList = document.getElementById("courseList");

    // Carga los cursos almacenados en localStorage al cargar la página
    const loadCourses = () => {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        courses.forEach(course => {
            addCourseToDOM(course); // Agrega cada curso al DOM
        });
    };

    // Guarda los cursos en localStorage
    const saveCourses = (courses) => {
        localStorage.setItem("courses", JSON.stringify(courses));
    };

    // Obtiene los cursos desde localStorage
    const getCourses = () => {
        return JSON.parse(localStorage.getItem("courses")) || [];
    };

    // Valida los campos obligatorios del formulario de cursos
    const validateCourseForm = (courseName, instructorName, startDate, duration) => {
        if (!courseName || !instructorName || !startDate || !duration) {
            alert("Por favor, completa todos los campos obligatorios."); // Muestra alerta si falta información
            return false;
        }
        return true; // Retorna true si todos los campos son válidos
    };

    // Agrega un curso al DOM
    const addCourseToDOM = (course) => {
        const listItem = document.createElement("li"); // Crea un nuevo elemento de lista
        listItem.innerHTML = `
            <strong>${course.name}</strong>
            (Instructor: ${course.instructor}, Inicio: ${course.startDate}, Duración: ${course.duration})<br>
            <button class="details-btn">Ver más detalles</button>
            <button class="delete-btn">Eliminar</button>
            <div class="details" style="display: none;">${course.description}</div>
        `;

        // Agrega funcionalidad para mostrar/ocultar detalles del curso
        const detailsBtn = listItem.querySelector(".details-btn");
        const detailsDiv = listItem.querySelector(".details");
        detailsBtn.addEventListener("click", () => {
            detailsDiv.style.display = detailsDiv.style.display === "none" ? "block" : "none"; // Alterna la visibilidad
        });

        // Agrega funcionalidad para eliminar un curso
        const deleteBtn = listItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            deleteCourse(course.name); // Llama a la función para eliminar el curso
            listItem.remove(); // Elimina el elemento de la lista
        });

        courseList.appendChild(listItem); // Agrega el nuevo curso a la lista
    };

    // Elimina un curso del localStorage
    const deleteCourse = (courseName) => {
        let courses = getCourses(); // Obtiene la lista de cursos
        courses = courses.filter(course => course.name !== courseName); // Filtra el curso a eliminar
        saveCourses(courses); // Guarda la nueva lista en localStorage
    };

    // Maneja el envío del formulario de cursos
    courseForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Previene el envío del formulario

        // Obtiene valores de los campos del formulario
        const courseName = document.getElementById("courseName").value.trim();
        const instructorName = document.getElementById("instructorName").value.trim();
        const startDate = document.getElementById("startDate").value.trim();
        const duration = document.getElementById("duration").value.trim();
        const description = document.getElementById("description").value.trim();

        // Valida el formulario
        if (!validateCourseForm(courseName, instructorName, startDate, duration)) {
            return; // Sale si hay errores de validación
        }

        // Crea un objeto curso con los datos del formulario
        const newCourse = {
            name: courseName,
            instructor: instructorName,
            startDate: startDate,
            duration: duration,
            description: description
        };

        // Guarda el nuevo curso en localStorage
        const courses = getCourses();
        courses.push(newCourse);
        saveCourses(courses);

        addCourseToDOM(newCourse); // Agrega el nuevo curso al DOM

        courseForm.reset(); // Limpia los campos del formulario
    });

    loadCourses(); // Carga los cursos al iniciar la página
});
