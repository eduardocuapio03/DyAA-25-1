function sumaParesMatriz(A) //Declaramos la funcon sumaParesMatriz
{
    let suma = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] % 2 === 0) {
                suma += A[i][j];
            }
        }
    }

    return suma;
}

// Este es una ejemplo de una matriz 5x5
const n = 5; // Aqui se pone el tamaño de la matriz deseada
//Aqui abajo se coloca la matriz 
const A = [
    [25, 8, 16, 45, 22],
    [4, 13, 7, 14, 36],
    [18, 1, 15, 12, 2],
    [3, 5, 9, 10, 6]
    [17, 19, 21, 34, 1]
];

const resultado = sumaParesMatriz(A);
console.log("La suma de los números pares es:", resultado);