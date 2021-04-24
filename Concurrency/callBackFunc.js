// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// }

// const coffee = orderCoffee();
// console.log(coffee); GAGAL Mengambil nilai Null

const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 10000);
    return coffee;
}

orderCoffee(coffee => { console.log(coffee); });

//CALLBACK HELL

