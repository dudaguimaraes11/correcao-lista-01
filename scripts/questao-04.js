const temperaturaCelcius = [0, 10, 20, 30, 40];
let temperaturaFahrenheit = [];
let contadorArrayFahrenheit = 0; 

// Varredura de array com laço de repetição
for (let i = 0; i < temperaturaCelcius.length; i++) {
    temperaturaFahrenheit[contadorArrayFahrenheit] = (temperaturaCelcius [i] * 9 / 5 + 32);
    contadorArrayFahrenheit++
} 

console.table (temperaturaCelcius); 
console.table (temperaturaFahrenheit); 