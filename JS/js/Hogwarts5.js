let linaje = {
    Nombre:"Manolo",
    edad : "29",
    familia: "Castanos",
    linaje : "Sangre Pura",
    casa  : "Griffindor",
    animalpatronus: "Liebre",
    cualidades: ["Ambicion, Determinacion, Astucia"]
};

let materias = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
};
//fase 3

let sombrero ={
    Gryffindor : (linaje.cualidades=="Valor,fuerza,audacia"),
    Hufflepuff : (linaje.cualidades== "Justicia,Lealtad,Paciencia") && (linaje.linaje=="Mestizo" || linaje.linaje =="Mugle"),
    Ravenclaw : (linaje.cualidades=="Creatividad,Erudicion,Inteligencia"),
    Slytherin : (linaje.cualidades == "Ambicion, Determinacion, Astucia") && (linaje.linaje =="Sangre Pura")

};
let casaAsignada = Object.keys(sombrero).find(casa => sombrero[casa]);
linaje.casa = casaAsignada;
console.log("La casa asignada es:", casaAsignada);
console.log(linaje);

//finaliza 3

//fase 4
let boggart = "presente";
let claseTransformaciones ={
    profesor : "Profesor Kevin Slughorn",
    horario : "Tarde",
    rastrear : false,
    realizarTransformacionRiddikulus() {
        if (boggart=="presente"){
            console.log("El boggart esta hechizado con Riddikulus")
        }else{
            console.log("No hay presencia de ningun boggart")
        }
    },
    enfrentarBoggart(){
        console.log("El boggart esta presente");
        this.realizarTransformacionRiddikulus();
        console.log ( "y ha sido derrotado");
    }
}
claseTransformaciones.enfrentarBoggart();
//fase 5

let defensaContraLasArtesOscuras = {
    linaje: linaje,

    generarPatronus() {
        const patronus = ["Liebre", "Fénix", "Hada"]; 
        const numeroAleatorio = Math.floor(Math.random() * patronus.length); 
        this.linaje.animalpatronus = patronus[numeroAleatorio];
        
    },
    
};
defensaContraLasArtesOscuras.generarPatronus();
console.log (`El animal asignado es ${linaje.animalpatronus}`)
console.log(linaje);
function dementor (){
    if (linaje.animalpatronus ==="Liebre" || linaje.animalpatronus ==="Fénix" || linaje.animalpatronus ==="Hada"){
        console.log("Haz derrotado al dementor");
    } else {
        console.log("Haz sido absorbido por el dementor  seras llevado a enfermeria")
    }
}
//fase 6
dementor();
