function enviarDatos() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    // Crear un objeto JSON con los datos
    var datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Realizar una solicitud POST al endpoint
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta:", data);
        
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
