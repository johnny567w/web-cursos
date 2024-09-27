document.addEventListener("DOMContentLoaded", () => {
    const courseForm = document.getElementById("courseForm");
    const courseList = document.getElementById("courseList");

    // Cargar cursos desde localStorage
    loadCourses();

    // Manejar el envío del formulario
    courseForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar el envío del formulario

        const courseName = document.getElementById("courseName").value;
        const instructorName = document.getElementById("instructorName").value;
        const startDate = document.getElementById("startDate").value;
        const duration = document.getElementById("duration").value;
        const description = document.getElementById("description").value;

        // Crear un nuevo curso
        const course = {
            courseName,
            instructorName,
            startDate,
            duration,
            description,
        };

        // Agregar el curso a localStorage
        addCourseToLocalStorage(course);

        // Mostrar el curso en la lista
        displayCourse(course);

        // Reiniciar el formulario
        courseForm.reset();
    });

    // Función para cargar cursos desde localStorage
    function loadCourses() {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        courses.forEach(course => displayCourse(course));
    }

    // Función para agregar curso a localStorage
    function addCourseToLocalStorage(course) {
        const courses = JSON.parse(localStorage.getItem("courses")) || [];
        courses.push(course);
        localStorage.setItem("courses", JSON.stringify(courses));
    }

    // Función para mostrar un curso en la lista
    function displayCourse(course) {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${course.courseName}</strong><br>
            Instructor: ${course.instructorName}<br>
            Fecha de inicio: ${course.startDate}<br>
            Duración: ${course.duration}<br>
            <button onclick="showDetails('${course.courseName}')">Ver más detalles</button>
        `;
        courseList.appendChild(li);
    }
});

// Función para mostrar más detalles de un curso
function showDetails(courseName) {
    alert(`Mostrando más detalles para: ${courseName}`);
}
