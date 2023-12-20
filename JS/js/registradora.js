function clasificarEdad(edad) {
    let clasificacion = "";

    if (edad <= 13) {
        clasificacion = "Niñ@";
    } else if (edad >= 14 && edad <= 17) {
        clasificacion = "Adolescente";
    } else if (edad >= 18 && edad < 35) {
        clasificacion = "Adulto Joven";
    } else if (edad >= 35 && edad < 50) {
        clasificacion = "Adulto";
    } else {
        clasificacion = "Adulto Mayor";
    }

    return clasificacion;
}

function mostrarr() {
    let variNombre = document.getElementById("nombre").value;
    let variApellido = document.getElementById("apellido").value;
    let variSexo = document.getElementById("sexo").value;
    let variEdad = parseInt(document.getElementById("edad").value);

    let nuevoRegistro = {
        nombre: variNombre,
        apellido: variApellido,
        sexo: variSexo,
        edad: variEdad
    };

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const tabla = document.createElement("table");
    const encabezados = ["Nombre", "Apellido", "Sexo", "Edad", "Clasificación de Edad"];
    const encabezadoRow = document.createElement("tr");

    encabezados.forEach(encabezado => {
        const th = document.createElement("th");
        th.textContent = encabezado;
        encabezadoRow.appendChild(th);
    });

    tabla.appendChild(encabezadoRow);

    const fila = document.createElement("tr");

    for (const prop in nuevoRegistro) {
        const dato = document.createElement("td");
        dato.textContent = nuevoRegistro[prop];
        fila.appendChild(dato);
    }

    const clasificacion = clasificarEdad(nuevoRegistro.edad);
    const clasificacionTd = document.createElement("td");
    clasificacionTd.textContent = clasificacion;
    fila.appendChild(clasificacionTd);

    tabla.appendChild(fila);
    resultado.appendChild(tabla);
}
