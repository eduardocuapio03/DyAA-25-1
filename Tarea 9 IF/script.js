function candles(candles){
   //Declaramos la funcion candles
    let maxHeight = candles[0];
    
 //Iniciamos un For para encontrar la altura maxima de las velas 
    for (let i = 1; i < candles.length; i++) {
        if (candles[i] > maxHeight) {
            maxHeight = candles[i];
        }
    }
    
  // Contamos cuantas velas hay con la altura maxima
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxHeight) {
            count++;
        }
    }
    
    return count;
}
// Fin del programa
console.log(candles([4, 4, 1, 3])); // 2 
console.log(candles([1, 1, 1, 1, 1])); // 5 
console.log(candles([5, 3, 1, 3, 5, 3, 1, 3, 5])); // 3
console.log(candles([10000, 10001, 10002, 10002, 10000])); // 2
console.log(candles([999, 1000, 99, 912, 100])); // 1