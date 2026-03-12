// Criação de métodos
const casa = {
    portas: 10,
    janelas: 20,
    telhado: true,
    laje: true,
    pets: {
        cachorro: {
            nome: "Perninha",
            raca: "SRD",
            latir: function () {
                return this.nome + " latiu: Au Au";
            }
        },
    },
}

console.log(casa.pets.cachorro.latir());

let texto = new String("Perninha");

console.log(texto);

let teste = this;

console.log(teste);