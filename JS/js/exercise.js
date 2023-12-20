// Ejercicios con Condicionales en JavaScript
// 1. Verifica si un número es positivo.


// const grupo = 36;
// function par(){
//     if (grupo>0){
//         console.log("Es un numero positivo");
//     } else {
//         console.log("El numero es negativo");
//     }
// }
// par(grupo);


// 2. Verifica si un número es negativo.
// function impar() {
//     if (grupo < 0) {
//         console.log("Es un numero negativo");
//     } else {
//         console.log("El número es positivo");
//     }
// }



// 3. Comprueba si un número es par.

// function par (){
//     if (grupo%2==0){
//     console.log("Es par");
// }  else {
//     console.log("Es impar")
// }
// }
// par(grupo)

// 4. Comprueba si un número es impar.
// function par (){
//     if (grupo%2==0){
//     console.log("Es par");
// }  else {
//     console.log("Es impar")
// }
// }
// par(grupo)


// 5. Determina si un número es múltiplo de 5.
// function par (){
//     if (grupo%5==0){
//     console.log("Es multiplo de 5");
// }  else {
//     console.log("No es multiplo")
// }
// }
// par(grupo)

// 6. Verifica si un número es divisible entre 3.
// function par (){
//     if (grupo%3==0){
//     console.log("Es multiplo de 3");
// }  else {
//     console.log("No es multiplo")
// }
// }
// par(grupo)

// 7. Determina si un número es mayor que 100.
// function par (){
//     if (grupo>100){
//     console.log("Es mayor que 100");
// }  else {
//     console.log("No lo es
// }
// }
// par(grupo)
// 8. Verifica si un número es menor que -50.
// function par (){
//     if (grupo<-50){
//     console.log("Es menor que 50");
// }  else {
//     console.log("No es menor")
// }
// }
// par(grupo)

// 9. Comprueba si un número está en el rango de 20 a 50.
// function par (){
//     if (grupo>20 && grupo<50){
//     console.log("Esta en el rango");
// }  else {
//     console.log("No esta en el rango")
// }
// }
// par(grupo)

// 10. Determina si un número es igual a 0.
// function par (){
//     if (grupo==0){
//     console.log("Es igual");
// }  else {
//     console.log("No es igual")
// }
// }
// par(grupo)

// 11. Verifica si un número es mayor que -10 y menor que 10.
// function par (){
//     if (grupo>-10 && grupo<10){
//     console.log("Esta en el rango");
// }  else {
//     console.log("No esta en el rango")
// }
// }
// par(grupo)

// 12. Determina si un número es un año bisiesto.
// function pare (){
//     if (grupo%4==0){
//         console.log(`El año ${grupo} es bisiesto`);
//     } else{
//         console.log(`El año ${grupo} NO es bisiesto`)
//     }
// }
// pare(grupo);


// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).
// function pare (){
//         if (grupo>=18){
//             console.log(`Es  mayor de edad y tiene ${grupo} años `);
//         } else{
//             console.log(`Es menor de edad porque tiene ${grupo} `)
//         }
//     }
//     pare(grupo);
// 14.
// 15. Verifica si un número es un cuadrado perfecto.
// function pare (){
//     const test = grupo**0.5;
//     const final = grupo%test;
//     if (final==0){
//         console.log(`es un numero cuadrado perfecto`);
//     } else{
//         console.log(`no es un numero cuadrado perfecto `)
//     }
// };
// pare(grupo);
// 16. Determina si un número es un número de Fibonacci.
// function esFibonacci(num) {
//     let primer = 0;
//     let sec = 1;

//     while (primer <= num) {
//         if (primer === num) {
//             return true;
//         }
//         let cuarto = primer + sec;
//         primer = sec;
//         sec = cuarto;
//     }

//     return false;
// }

// const grupos = 8;
// console.log(esFibonacci(grupos));


// 17. Verifica si un número es una potencia de 2.
// function potencia (){
//     const pot = grupo**0.5
//     if (grupo%pot==0){
//         console.log("Es potencia de dos");
//     }else{
//         console.log("No es potencia");
//     }
// }

// potencia(grupo);

// 18. Determina si un número es un palíndromo.

// let cualquier = "1213";
// let quier = cualquier.split("").reverse().join("");
// function palindromo (){
//     if (quier==cualquier){
//         console.log("Es un numero palindromo");
//     } else {
//         console.log ("No es un numero palindromo")
//     }
// }
// palindromo(cualquier);


// 19. Verifica si una cadena de texto contiene la palabra "JavaScript".
// const palabra = "cualquier vuelta de Javascript";
// const contenedora = "Javascript"
// if (palabra.includes(contenedora)){
//     console.log("Si la contiene ");
// } else{
//     console.log("No la contiene");
// }


// 20. Determina si una cadena tiene más de 10 caracteres.
// const palabra = "cualquier vuelta";
// const contadora = palabra.length;
// function cadena(){
// if (contadora>10){
//     console.log("La cadena de caracteres tiene mas de 10");
//    }
// else{
//     console.log("La cadena de caracteres no tiene mas de 10")
//    }
// }
// cadena(palabra);


// 21. Verifica si una cadena de texto está en minúsculas.
// const palabra = "CUALQUIER vuelta";
// function cadena(){
// if (palabra==palabra.toLowerCase){
//     console.log("La cadena de caracteres esta en minusculas");
//    }
// else{
//     console.log("La cadena de caracteres no esta en minusculas")
//    }
// }
// cadena(palabra);

// 22. Determina si una cadena de texto contiene al menos un número.
// const palabra = "adi" ;

// function cadena(palabra) {
//     if (/\d/.test(palabra)) {
//         console.log("La cadena de caracteres contiene al menos un número");
//     } else {
//         console.log("La cadena de caracteres no contiene números");
//     }
// }

// cadena(palabra);

// 23. Verifica si una cadena de texto termina con un punto (.).
// const palabra = "you do not . let said.";


// function cadena () {
//     if (palabra.endsWith(".")){
//     console.log("Termina con un punto");
// }else {
//     console.log("No termina con punto");
// }
// }
// cadena(palabra);
// 24. Determina si una cadena de texto es un pangrama (contiene todas
// las letras del alfabeto).
// <const letras = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
// const frase  = ("cadena de texto interactiva posiblemnte hasta las ximenos fip z");
// function contenedora (){
//     if (frase.includes(letras)){
//     console.log("contiene");
// }else{
//     console.log ("no contiene");
// }}
// contenedora(frase);

// 25. Verifica si un día de la semana es laborable (de lunes a viernes).
// const entre = ("lunes","martes","miercoles","jueves","viernes","sabado");
// const dia = ("viernes");
// function labor (){
//     if (dia.indexOf(entre)){
//     console.log(`El dia ${dia} es laborable`)
//     } else{
//         console.log(`El dia ${dia} NO es laborable`)
//     }
// }
// labor(dia);


// 26. Determina si un día es fin de semana (sábado o domingo).
// const entre = ("sabado","domingo","lunes");
// const dia = ("domingo");
// function labor (){
//     if (entre.indexOf(dia)){
//     console.log(`El dia ${dia} es fin de semana`)
//     } else{
//         console.log(`El dia ${dia} NO es Fin de semana`)
//     }
// }
// labor(dia);


// 27. Verifica si un número representa un mes válido (del 1 al 12).
// const dia = (12);
// function labor (){
//     if (dia<13 && dia!=0){
//     console.log(`El numero ${dia} representa un mes del año`);
//     } else{
//         console.log(`El numero ${dia} NO representa un mes del año`);
//     }
// }
// labor(dia);


// 28. Determina si una hora está en el rango de 9 AM a 6 PM.
// const hora =2;
// function det(){
//     if (hora>9 && hora<19){
//     console.log("Pertenece");
// } else {
//     console.log("No pertenece");
// }
// }
// det(hora)


// 29. Verifica si una persona es mayor de 65 años o menor de 18 años.
// const hora =459;
// function det(){
//     if (hora<18){
//     console.log("Es menor de 18");
// }   if (hora>65) {
//     console.log("Es mayor de 65");
// } else{
//     console.log("tiene entre 19 y 65")
// }
// }
// det(hora);


// 30. Determina si un triángulo es equilátero (tres lados iguales).
// const x = 200;
// const y = 200;
// const z = 205;
// function equi () {
//     if (x==y && y==z && z==x){
//     console.log("Es un triangulo equilatero");
// } else {
//     console.log("No es un triangulo equilatero")
// }
// }
// equi(x,y,z);
// 31. Verifica si un triángulo es isósceles (dos lados iguales).
// const x = 200;
// const y = 500;
// const z = 100;
// function equi () {
//     if (x==y && z!=x){
//         console.log("Es un triangulo isosceles");
// }    else if (y!=z && z==x){
//         console.log("Es un triangulo isosceles");
// }       else if(x!=y && y==z) {
//         console.log("Es un triangulo isosceles");
// }   else{
//     console.log("NO es un triangulo isosceles")
// }
// }
// equi(x,y,z);


// 32. Determina si un triángulo es escaleno (todos los lados diferentes).
// const x = 2000;
// const y = 500;
// const z = 200;
// function equi () {
//     if (x!=y && y!=z && z!=x){
//         console.log("El triangulo es escaleno");
//     }
//     else{
//         console.log("No es escaleno");
//     }
// }
// equi(x,y,z)


// 33. Verifica si un número es mayor que el doble de otro número.
// const numero = 23;
// const numeromenor = 12;
//  function doble(){
//     if(numeromenor*2<numero){
//         console.log(`El numero ${numero} es mayor que el doble del numero ${numeromenor}`);
//     } else{
//         console.log("No es mayor que el doble");
//     }
//  }
// doble();


// 34. Determina si la suma de dos números es mayor que 100.
// const uno = 20;
// const dos = 81;
// function suma (){
//     if(uno+dos>100){
//         console.log("La suma de los dos numeros es mayor")
//     } else{
//         console.log ("No es mayor que 100");
//     }
// }
// suma();


// 35. Verifica si la resta de dos números es menor que 50.
// const uno = 30;
// const dos = 10;
// function resta (){
//     if(uno-dos<50){
//         console.log("La resta de los dos numeros es menor que 50")
//     } else{
//         console.log ("No es menor que 50");
//     }
// }
// resta();

// 36. Determina si un número es el doble del otro número.
// const numero = 23;
// const numeromenor = 12;
//  function doble(){
//     if(numeromenor*2<numero){
//         console.log(`El numero ${numero} es mayor que el doble del numero ${numeromenor}`);
//     } else{
//         console.log("No es mayor que el doble");
//     }
//  }
// doble();

// 37. Verifica si el doble de un número es igual al triple de otro número.
// const numero = 2;
// const numeromenor = 3;
//  function doble(){
//     if(numeromenor*2==numero*3){
//         console.log("es igual");
//     } else{
//         console.log("No es igual ");
//     }
//  }
// doble();


// 38. Determina si la suma de dos números es igual a 50.
// const uno = 30;
// const dos = 10;
// function resta (){
//     if(uno+dos==50){
//         console.log("La suma de los dos numeros es igual que 50")
//     } else{
//         console.log ("No es igual que 50");
//     }
// }
// resta();


// 39. Verifica si el producto de dos números es mayor que 500.
// const uno = 30;
// const dos = 10;
// function resta (){
//     if(uno+dos>500){
//         console.log("La suma de los dos numeros es mayor que 500")
//     } else{
//         console.log ("No es mayor que 500");
//     }
// }
// resta();

// 40. Determina si la división de dos números es menor que 10

// const uno = 30;
// const dos = 10;
// function resta (){
//     if(uno/dos<10){
//         console.log("La division de los dos numeros es menor que 10")
//     } else{
//         console.log ("la division entre los dos numeros es mayor que 10");
//     }
// }
// resta();