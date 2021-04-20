const {
    coffeeStock,
    isCoffeeMachineReady
}= require('./state');
 
// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }
 
//makeCoffee("robusta", 1000);
console.log(coffeeStock);
console.log(isCoffeeMachineReady);