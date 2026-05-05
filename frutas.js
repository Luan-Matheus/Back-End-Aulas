//Lista ordenada de valores

const frutas = ["Maça", "Banana", "Uva", "Manga"];
//console.log|(frutas);
console.log(frutas[3]);

frutas[0] = "Abacaxi";
console.log(frutas);

frutas[2] = "Morango";
console.log(frutas);

frutas[3] = "Melão";
console.log(frutas);

console.log(frutas.length)
    frutas.push("Abacate");
    const removido = frutas.pop();
    console.log(frutas);
    console.log(removido);
    frutas.shift();
    console.log(frutas);
    console.log(frutas.indexOf("Melancia"));
    console.log(frutas.indexOf("Pêra"));
    ]