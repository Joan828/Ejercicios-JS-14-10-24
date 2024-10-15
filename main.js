// # Dadas 2 variables booleanas:
// #     booleano1 = true;
// #     booleano2 = false;
    
// #     Crear una variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2.
// #     Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2.
// #     Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1.
// #     Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2).

const booleano1 = true;
const booleano2 = false; 
const booleanoAnd = booleano1 && booleano2;
console.log(booleanoAnd);

const booleanoOr = booleano1 || booleano2;
console.log(booleanoOr);

const booleanoNot = !booleano1;
console.log(booleanoNot);

const booleanoMix0 = booleano1 || booleano2 && booleano1 || !booleano1 && !booleano2;
console.log(booleanoMix0);


// 2. Operadores
// Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado.
// Crear variable valorResto cuyo valor sea el resto de 17 entre 7.

const valorDivision = 17/3
console.log(valorDivision.toFixed(2))
const valorResto = 17%7
console.log(valorResto)

// 3. Lógica de programación

// Crea una variable A cuyo valor sea el número 9, y después crea una variable B cuyo valor sea un string con el número 9. Desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”. ¿Qué pasa si en vez de tener A == B, comprobamos que A === B?
const a = 9
const b = "9"
if(a == b){console.log("Son iguales")}
if(a === b){console.log("Son iguales")} //No muestra nada porqué son diferente tipo de dato (uno es number y el otro es un string)


// Crea una variable mochila que sea un array de elementos. Desarrolla la lógica para que: a) si mochila tiene más de 10 elementos, muestre por consola el mensaje “No puedo cargar con tantas cosas”; b) si mochila contiene entre 10 y 2 elementos, se muestre por consola “Qué bien voy con mi mochila”, y, si no,  muestre por consola “Creo q no necesito una mochila”.
const mochila = [0]

if(mochila.length>10){console.log("No puedo cargar tantas cosas");
} else if(mochila.length<2){console.log("Creo q no necesito una mochila");
} else {console.log("Qué bien voy con mi mochila");}

// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10.

let contarHasta10 = 0
for (let index = 0; index < 10; index++) {
    contarHasta10++;
}
console.log(`El número suma un total de ${contarHasta10}`);

// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario en el que si diaFestivo es true devuelva un console.log de ‘Hoy no trabajo’ y, si es false, devuelva ‘Hoy trabajo’.

const diaFestivo = false
diaFestivo ? console.log("Hoy no trabajo") : console.log("Hoy trabajo")

// Crea una variable arrayBucle tipo array vacía y rellénala con números del 4 al 18 utilizando un bucle.
const arrayBucle = []
let numeros = 4
for (let index = 0; index < 15; index++) {
    arrayBucle[index] = numeros;
    numeros++;
}
console.log(arrayBucle);

// Recorre la variable creada anteriormente arrayBucle, suma todos sus elementos y guárdalos en una variable de nombre resultado.
let resultado = 0
for (let index = 0; index < arrayBucle.length; index++) {
    resultado += arrayBucle[index];
}
console.log(resultado)

// Dado el siguiente array [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle for of y muestra por consola todos sus elementos. Después, recórrelo utilizando el bucle for in mostrando también por consola todos sus elementos.

const array = ["Con", "Sofia", "aprendiendo", "bucles"]
for (let elemento of array) {
    console.log(elemento);
}
for (let x in array) {
    console.log(array[x])    
}

// Crea un bucle utilizando while que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3.
let i = 0
while ( i < 20) {
    if(i%3 == 0){
        console.log("Patata");
    }
    i++
}

// Extras
// Utiliza la siguiente array para resolver los próximos ejercicios:
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
      },
      {
        nombre: "Laura",
        edad: 24,
      },
      {
        nombre: "Jenny",
        edad: 10,
      },
    ];
// Crea un array con la gente cuyo nombre tiene 4 letras sin utilizar el método filter de los arrays y muéstralo por consola.
let gente4 = []
for (let index = 0; index < gente.length; index++) {
    if(gente[index].nombre.charAt(4) != ""){
        gente4.push(gente[index])
    }    
}
console.log(gente4)
// Crea un array con la gente cuyo nombre empieza por J y sean menores de 40 años sin utilizar el método filter de los arrays y muéstralo por consola.
let genteJ = []
for (let index = 0; index < gente.length; index++) {
    if(gente[index].nombre.charAt(0) == "J" && gente[index].edad < 40){
        genteJ.push(gente[index])
    }    
}
console.log(genteJ)

// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':
let ordenador = {
  marca: "La pava",
  tipo: "portátil",
  perifericos: ["raton", "touchPad"]
}
// TEST 1
      if (typeof ordenador === "object") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 2
      if (ordenador.marca === "La pava") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 3
      if (ordenador.tipo === "portátil") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }
      // TEST 4
      if (ordenador.perifericos[1] === "touchPad") {
        console.log("apruebas");
      } else {
        console.log("suspendes");
      }

