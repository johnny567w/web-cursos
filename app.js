// Mostrar más detalles
function showDetails(button) {
    const details = button.nextElementSibling;
    details.style.display = details.style.display === "none" ? "block" : "none";
}

// Validar y agregar cursos
document.getElementById('courseForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const courseName = document.getElementById('courseName').value;
    const instructor = document.getElementById('instructor').value;
    const startDate = document.getElementById('startDate').value;
    const duration = document.getElementById('duration').value;
    const description = document.getElementById('description').value;

    // Crear un nuevo objeto curso
    const newCourse = {
        courseName,
        instructor,
        startDate,
        duration,
        description
    };

    // Guardar en localStorage
    let courses = JSON.parse(localStorage.getItem('courses')) || [];
    courses.push(newCourse);
    localStorage.setItem('courses', JSON.stringify(courses));

    // Actualizar la lista de cursos
    displayCourses();

    // Limpiar formulario
    document.getElementById('courseForm').reset();
});

// Mostrar cursos almacenados
function displayCourses() {
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    const courseContainer = document.getElementById('courses');
    courseContainer.innerHTML = ''; // Limpiar la lista

    courses.forEach((course, index) => {
        courseContainer.innerHTML += `
        <div class="course">
            <h3>${course.courseName}</h3>
            <p>Instructor: ${course.instructor}</p>
            <p>Fecha de inicio: ${course.startDate}</p>
            <p>Duración: ${course.duration} semanas</p>
            <button onclick="showDetails(this)">Ver más detalles</button>
            <div class="details" style="display: none;">
                <p>Descripción: ${course.description}</p>
            </div>
        </div>`;
    });
}

// Inicializar la lista de cursos
document.addEventListener('DOMContentLoaded', displayCourses);
