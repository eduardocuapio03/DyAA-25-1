/** Este programa opera con Math.max
 * candles
 * 
 * @param {number[]} arr The candles heights.
 * @returns {number} The number of candles that are tallest.
 */
function candles(candles) {
    // Encontrar la altura máxima de las velas
    const maxHeight = Math.max(...candles);
    
    // Contar cuántas veces aparece la altura máxima en el arreglo
    const count = candles.filter(candle => candle === maxHeight).length;
    
    return count;
}
  
  console.log(candles([4, 4, 1, 3])); // 2 
  console.log(candles([1, 1, 1, 1, 1])); // 5 
  console.log(candles([5, 3, 1, 3, 5, 3, 1, 3, 5])); // 3
  console.log(candles([10000, 10001, 10002, 10002, 10000])); // 2
  console.log(candles([999, 1000, 99, 912, 100])); // 1