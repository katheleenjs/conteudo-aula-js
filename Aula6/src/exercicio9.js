// Exercício 9: Escreva um algoritmo para ler as dimensões de um trapézio (base e altura), calcular e escrever a área do trapézio.

alert("Trapézio");

let B = parseFloat(prompt("Informe o valor da base maior"));
let b = parseFloat(prompt("Informe o valor da base menor"));
let altura = parseFloat(prompt("Informe o valor da altura"));

let resultado = ((B + b) * altura) /2;

alert(`O resultado da área de um trapézio de base maior ${B} e base menor ${b} é: ${resultado}`);