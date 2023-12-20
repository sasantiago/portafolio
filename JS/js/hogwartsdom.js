const estudiante = {
    nombre : "",
    edad : "" ,
    Familia : "",
    Linaje : "",
    Cualidades : "",
    casa: "",
    patronus : ""
}


function llamar (){
    const txtNombre = document.getElementById("objName").value;
    
    const txtEdad = document.getElementById("objage").value;
    
    const txtFamilia = document.getElementById("objFamily").value;
    
    const txtLinaje= document.getElementById("objLinaje").value;

    const txtCualidades = document.getElementById("objCualidades").value;

    estudiante.nombre = txtNombre;
    estudiante.edad = txtEdad;
    estudiante.familia = txtFamilia;
    estudiante.linaje = txtLinaje;
    estudiante.cualidades = txtCualidades;

    console.log(estudiante)
    const divPrueba = document.getElementById("prueba")
    divPrueba.innerHTML=`
    Nombre:${estudiante.nombre}
    <br>
    Edad : ${estudiante.edad} 
    <br>
    Familia : ${estudiante.Familia} 
    <br>
    Linaje : ${estudiante.Linaje} 
    <br>
    Cualidades : ${estudiante.Cualidades} `

localStorage.setItem("pruebaCache",
JSON.stringify(estudiante))


}

//fase dos
 function paso2 (){
    clases = [
        clasesTransformaciones = {
            profesor : "Kevin Slughorn"
        },
        clasesHerbollogia = {
            profesor : "Maria umbridge"
        },
    ]
 }

 //fase 3

function paso3(){
    Griffyndor = {
        cualidades : ["Valor,fuerza,Audacia"],
        Linaje : ["Mestizo","Muggle", "Sangre pura"]
    }
    if(String(estudiante.cualidades) == String(Grinffyndor.cualidades) && Grinffyndor.linajes.includes(estudiante.linaje)){
        estudiante.casa = "Griffyndor"
    }
console.log(Griffyndor.cualidades)
console.log(estudiante.Cualidades)

}