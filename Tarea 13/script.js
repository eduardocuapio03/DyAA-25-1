function esPalindromo(x) {

    if (x <= 1 || x >= 10000 || x < 0) {
        return false;
    }
    
    let original = x;
    let inverso = 0;

    while (x > 0) {
        let ultimoDigito = x % 10; 
        inverso = inverso * 10 + ultimoDigito; 
        x = Math.floor(x / 10); 
    }

    return original === inverso;
}

console.log(esPalindromo(121)); // Verdadero
console.log(esPalindromo(100)); // Falso
console.log(esPalindromo(0));   // Falso
console.log(esPalindromo(-121)); // Falso