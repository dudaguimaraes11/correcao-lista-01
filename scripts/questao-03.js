const notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]; 
let totalSomaNotas = 0; 
let mediaturma = 0; 
let mediaTurma = 0; 
let acimaDaMedia = 0; 
let menorNota = notas [0];
let maiorNota = notas [0];

// Varredura do Array de notas com laço de repetição

for (let i = 0; i < notas.length; i++) {
    totalSomaNotas += notas [i]; 

    //Verificação da maior e menor nota 
    if (notas [i] > maiorNota) {
        maiorNota = notas [i];
    }

    if (notas [i] < menorNota) {
        menorNota = notas [i];
    }
}

//Varredura do array com notas com laço de repetição
for (let i = 0; i < notas.length; i++) {
    if (notas [i] > mediaTurma) {
        acimaDaMedia++ 
    }
}

mediaTurma = totalSomaNotas/ notas.length; 

console.log (`A média da turma é: ${mediaTurma}.`);
console.log (`A quantidade de alunos acima da média é: ${acimaDaMedia}.`);
console.log (`A maior nota é: ${maiorNota}.`);
console.log (`A menor nota é: ${menorNota}.`);





