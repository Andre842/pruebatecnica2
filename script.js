// 8.  Encuentra y corrige los errores

//Primero
function maxNum (n1,n2) {
    if (n1>n2) {
        return n2;
    }
    else {
        return n1;
    }
}
console.log(maxNum(3,7))

//segundo
function squared(a){
    return a*a
}
console.log(squared(5))

//Tercero
function menosQue100(a,b){
    let sum = a + b
    if (sum >= 100) {
        return false
    } else {
        return true
    }
}
console.log(menosQue100(25,100));
console.log(menosQue100(35,75));
console.log(menosQue100(20,75));

//Ejercicio 3
function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
}
console.log(factorial(5));

//Ejercicio 4
function ordenarArray(array) {
    return array.sort();
}
const nuevoArray = ["manzana", "banana", "pera", "uva"];
const arrayOrdenado = ordenarArray(nuevoArray);
console.log(arrayOrdenado);

  
 