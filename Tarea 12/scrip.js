function busquedabinaria(A, ele, start = 0) {
    let n = A.length;

    // Caso base: Si el arreglo tiene un solo elemento
    if (n == 1) {
        return A[0] == ele ? start : -1;
    }

    // Encuentra el punto medio
    //Math.floor redondea hacia abajo un número decimal, lo usamos para calcular el índice central del arreglo.
    let m = Math.floor(n / 2);

    // Verifica si el elemento del medio es el que buscamos
    if (A[m] == ele) {
        return start + m;
    }

    // Si el elemento del medio es mayor que el elemento buscado,
    // realiza una búsqueda binaria en la primera mitad
    if (A[m] > ele) {
        return busquedabinaria(A.slice(0, m), ele, start);
    //A.slice crea una copia de una parte del arreglo, lo usamos para dividir el arreglo en mitades durante la búsqueda binaria    
    } 
    // Si no, realiza una búsqueda binaria en la segunda mitad
    else {
        return busquedabinaria(A.slice(m + 1), ele, start + m + 1);
    }
}
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let elementToFind = 7;

console.log(busquedabinaria(arr, elementToFind)); // se debe imprimir: 3

elementToFind = 8;
console.log(busquedabinaria(arr, elementToFind)); // Se debe imprimir: -1