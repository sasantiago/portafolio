// Actividades Modulo 3
// Caso 1
// Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día
// viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo
// día le pagan a Hildebrando, a Hildebrando le pagan 2.500.000.
// día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de
// comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la
// mañana a Cartagena las opciones que tiene Hildebrando:
// - si compra una almojábana con gaseosa son 15.000
// le caerá mal porque lleva mucho en el stand
// - un subway con gaseosa 23.000
// estará llenito y bien
// - no compra nada
// - le tocara comprar algo en Medellín
// Imprimir resultados, ir llevando la cuenta de cuanto dinero tiene disponible durante las
// vacaciones
let opcion  = 3;
let saldo = 2500000;

function comida (){
    if (opcion==1){
        saldo = (saldo - 15000);
        console.log(`El saldo restante de comprar una almojabana con gaseosa es ${saldo}`);
  } else if (opcion==2){
    saldo = (saldo - 23000);
    console.log(`El saldo restante de comprar un subway con gaseosa es ${saldo}`);
}   else if (opcion==3){
    console.log(`Toca comprar algo en medellin`);
} 
}
comida(opcion);

// Caso 2
// llega a la sala de espera, y revisa su maleta que no cumple con el tamaño de maleta de
// mano, la aerolínea tiene el tamaño normal para las maletas de mano, 55 cm (alto) x 40
// cm (largo) x 20 cm (ancho), y Hildebrando que va a abordar tiene una maleta de 60 cm
// (alto) x 40 cm (largo)x 20x cm.
// Es un poco más grande el tamaño normal, debe sacar ropa para disminuir el tamaño de la
// maleta. como puede solucionar con matemáticas para que el área sea igual a la normal, y
// que de las medidas correctas del tamaño que pide la aerolínea? Usar .math
// La idea fundamental es que necesitamos reducir cada dimensión de la maleta
// proporcionalmente para que todas las dimensiones cumplan con los límites establecidos
// por la aerolínea.
// Instrucciones matemáticas:
// 1. Factor de reducción para cada dimensión:
// Actividades Modulo 3
// • Para el alto, calculamos el factor de reducción como 𝑎𝑙𝑡𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
// 𝑎𝑙𝑡𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
// • Para el largo, calculamos el factor de reducción como 𝑙𝑎𝑟𝑔𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
// 𝑙𝑎𝑟𝑔𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
// • Para el ancho, calculamos el factor de reducción como 𝑎𝑛𝑐ℎ𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
// 𝑎𝑛𝑐ℎ𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
// 2. Factor de reducción mas pequeño:
// Utilizamos la función Math.min para encontrar el factor de reducción mas
// pequeño entre los tres, Esto asegura que todas las dimensiones se reducirán de manera
// proporcional y ninguna excederá los límites permitidos.
// 3. Nuevas dimensiones:
// • Multiplicamos cada dimensión original por el factor de reducción mas
// pequeño para obtener las nuevas dimensiones ajustadas.
// • Nuevas dimensiones:
// nuevoAlto= altoOriginal * factorReduccion
// nuevoLargo = largoOriginal * factorReduccion
// nuevoAncho=anchoOriginal * factorReducion

let alto = 55 ;
let largo = 40;
let ancho = 20;

function reducción(){
    let redalt = alto/60;
    let redlar = largo/40;
    let redanc = ancho/20;
//fase 2
    let peque = Math.min(redalt,redlar,redanc);
//fase 3
    let nuevoalto = alto * peque;
    let nuevoLargo = largo * peque;
    let nuevoAncho = ancho * peque;
    nuevoalto = parseInt(nuevoalto);
    nuevoLargo = parseInt(nuevoLargo);
    nuevoAncho = parseInt(nuevoAncho);

    console.log(`El reajuste seria alto: ${nuevoalto}cm , largo: ${nuevoLargo}cm , ancho: ${nuevoAncho}cm`);
}
reducción(alto,largo,ancho)


// Caso 3
// ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar
// a las 3 am para Macondo, se encuentra con el problema de que el wifi del aeropuerto
// está fallando, y necesita asegurar su reserva en el hotel para el siguiente día, caminando
// por el aeropuerto encuentra wifi, la red se llama " ElPassEs:
// 01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números
// binarios, además cobran 50.000 la hora.
// Tienen que crear un código que convierta los números binarios, a decimales y luego a
// caracteres 
let elpass1 = "01110010";
let elpass2 = "01101001";
let elpass3 = "01110111";
let elpass4 = "01101001";
elpass1 = parseInt(elpass1)
function convertir(){
    for(i=0;i>elpass1.length;i++){
        let elpass = 0;
        let ahora = elpass+1;
        let potencia = 2**ahora;
        let suma =+ potencia;
        console.log(suma);
    } 
}
convertir(elpass1);
//case 6


    let colorElegido = "amarillo";
    let decisionVerde = 2;
    let decisionRojo = 1;
    let decisionAzul = 1;
    let decisionAmarillo = 3;


    if (colorElegido === "verde") {
        console.log("Opciones para el color verde:");
        console.log("1. Caminatas y agüita para el camino");
        console.log("2. Ir a una hermosa cascada");
        let decisionVerde = 2;

        if (decisionVerde === 1) {
            console.log("Caminatas, y agüita para el camino");
        } else if (decisionVerde === 2) {
            console.log("Irá a una hermosa cascada y se tomará fotos");
        } else {
            console.log("Opción no válida");
        }
    } else if (colorElegido === "rojo") {
        console.log("Opciones para el color rojo:");
        console.log("1. Actividades en la playa");
        console.log("2. Montar moto");
        let decisionRojo = 2;

        if (decisionRojo === 1) {
            console.log("Actividades en la playa");
        } else if (decisionRojo === 2) {
            console.log("Monta moto");
            console.log("Se pone a tomar cocteles mientras descansa, de pronto siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia. (Terminan las vacaciones)");
        } else {
            console.log("Opción no válida");
        }
    } else if (colorElegido === "azul") {
        console.log("Opciones para el color azul:");
        console.log("1. Bingo y bailar");
        console.log("2. Solo quedarse con pasaje de regreso");
        let decisionAzul = 1;

        if (decisionAzul === 1) {
            console.log("Bingo, se lo gana y aumenta su dinero");
            console.log("Bailar, y la pasa muy bien");
        } else if (decisionAzul === 2) {
            console.log("Solo se queda con pasaje de regreso");
        } else {
            console.log("Opción no válida");
        }
    } else if (colorElegido === "amarillo") {
        console.log("Opciones para el color amarillo:");
        console.log("- Ir a la piscina, el agua huele raro, pero no le pone importancia");
        console.log("- Si se mete, empieza a sentirse ahogado, demasiado cloro, muere (Terminan las vacaciones)");
        console.log("- Si no, no pasa nada");
        let decisionAmarillo = 2; 

        if (decisionAmarillo === 1) {
            console.log("Acción correspondiente a la opción 1 para amarillo");
        } else if (decisionAmarillo === 2) {
            console.log("Acción correspondiente a la opción 2 para amarillo");
        } else {
            console.log("Opción no válida");
        }
    } else {
        console.log("Color no reconocido, no se realiza ninguna actividad");
    }
    console.log ("se va con mas dinero!!!");
    console.log("se de vuelve vivo para su casa despues de sus vacaciones");