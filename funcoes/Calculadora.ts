import readline = require('readline-sync');

let resultadoDivisao: any;

let numero1: number;
let numero2: number;

numero1 = readline.questionFloat("Digite o primeiro numero ");
numero2 = readline.questionFloat("Digite o segundo numero ");

console.log(somar(numero1, numero2));

console.log("O Resultado da subtração é: " + subtrair(numero1, numero2));

console.log("O Resultado da multiplicação é: " + multiplicar(numero1, numero2));

resultadoDivisao = dividir(numero1, numero2);

if ( resultadoDivisao != null)
    console.log("O Resultado da divisão é: " + resultadoDivisao);
else
    console.log("Não existe divisão por zero");


about();

// Função com Retorno
function somar(num1: number, num2: number): number{
    return num1 + num2;
} 
function subtrair(num1: number, num2: number): number{
    return num1 - num2;

}

function multiplicar(num1: number, num2: number): number{
    return num1 * num2;
        
}

function dividir(numero1: number, numero2: number): number|null {
    let divisao = numero1 / numero2;

    return (divisao != Infinity ? divisao : null)
}


      

// Funcção sem Retorno
function about(): void{
    console.log("Feito por Yasmine");
}

