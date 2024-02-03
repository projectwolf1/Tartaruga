const tartaruga1 = {
    nome: "Jurema",
    idade: 4,
    qtdDias: 16,
    mtsDias: 30,
    andou: function (){
        const somaTotal = (this.mtsDias * this.qtdDias);
        console.log(`
            A tartaruga ${tartaruga1.nome} andou um total de ${somaTotal} em ${tartaruga1.qtdDias} dias, para chegar até o lago.
        `);

    },

};

console.log(tartaruga1.andou());


 const tartaruga2 = {    
    nome: "Biricléia",
    idade: 8,
    qtdDias: '',
    mtsDias: 20,
    }


const chegarAteOLago = 480;

const somaChegadaTT2 = function (){
    const soma = (chegarAteOLago / tartaruga2.mtsDias) - (tartaruga1.qtdDias)

    return soma
}

console.log(`
        A tartaruga ${tartaruga2.nome} demorou ${somaChegadaTT2(tartaruga2)} dias a mais que a tartaruga ${tartaruga1.nome} para chegar até o lago.

`);






