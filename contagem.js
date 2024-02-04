const tartarugas = [
    {
        nome: "Jurema",
        idade: 4,
        qtdDias: 16,
        mtsDias: 30,
      
    },
    {
        nome: "Biricléia",
        idade: 8,
        qtdDias: '',
        mtsDias: 20,
}];

const chegarAteOLago = 480;
const tartaruga1 = (tartarugas[0].qtdDias * tartarugas[0].mtsDias)
const tartaruga2 = (chegarAteOLago / tartarugas[1].mtsDias) 
const chegadaTt2 = (tartaruga2 - tartarugas[0].qtdDias)
   



const mostraDias = function () {
        if (tartaruga1 === chegarAteOLago){
            console.log(`A tartaruga ${tartarugas[0].nome} andou ${tartarugas[0].qtdDias} dias, para chegar até o lago.`);
        }
        if(tartaruga2 != tartaruga1){
                console.log(`A tartaruga ${tartarugas[1].nome} andou um total de ${chegadaTt2} dias a mais que a tartaruga ${tartarugas[0].nome} para chegar até o lago dando um total de ${tartaruga2} dias.`)
            }
    }

mostraDias(tartarugas);



