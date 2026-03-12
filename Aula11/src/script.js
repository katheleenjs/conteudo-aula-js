// Utilzando o operador in
const pessoa = {
    primeiroNome: "Katheleen",
    ultimoNome: "Santos",
    idade: 23,
    pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);

// Criação de objetos aninhados

const pessoa2 = {
    primeiroNomeNome: "Gabriel",
    segundoNome: "Felix",
    carros: {
        carro1: "Porsche",
        carro2: "Volkswagen",
        carro3: "Audi",
    },
    motos: {
        moto1: "Ducati",
        moto2: "Royal Enfield",
    },
}

let propriedadeMotos = "moto1";

console.log(pessoa2.carros.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2["carros"]["carro1"]);
console.log(pessoa2.motos["propriedadeMotos"]);