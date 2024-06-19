//Crie uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function resultadoDemulti(Multi){
    Multi = parseInt(prompt('Digite um número:'));
    let soma = Multi * Multi;
    
    alert(`${Multi} * ${Multi} = ${soma}`);
}

resultadoDemulti();

/**
 * Correção
 * 
 * function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 
 */