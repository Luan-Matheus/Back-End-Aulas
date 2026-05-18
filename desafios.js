const categoria = "Eletrônicos";
const descricao = "Smartphone 252GB, Preto";
const produto = "Smartphone";
const preco = 2499.90;
const estoque = 15;

console.log(`O produto é: ${produto}.`);
console.log(`O ${produto} custa R$ ${preco.toFixed(2)}.`);
console.log(`No estoque ainda restam ${estoque} unidades.`);
console.log(`A categoria de ${produto} é ${categoria}.`);
console.log(`Descrição: ${descricao}.`);

const numero1 = 20;
const numero2 = 4;
const resultadoSubtracao = numero1 - numero2;
const resultadoMultiplicacao = numero1 * numero2;

console.log(`O resultado da subtração é ${resultadoSubtracao}, e o resultado da multiplicação é ${resultadoMultiplicacao}.`);

const desconto = 12;
const precoComDesconto = preco * (1 - desconto / 100);

console.log(`Preço com 12% de desconto: R$ ${precoComDesconto.toFixed(2)}.`);
