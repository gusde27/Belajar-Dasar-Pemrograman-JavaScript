const executorFunction = (resolv, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolv("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}
 
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}

console.log(makeCoffee());
//console.log(coffeePromise);
 
 
/* output
Promise { 'Kopi berhasil dibuat' }
*/

/*
Executor function memiliki dua parameter, yaitu resolve dan reject 
yang berupa fungsi. Berikut penjelasan detailnya:

resolve() adalah parameter pertama pada executor function. Parameter 
ini merupakan fungsi yang dapat menerima satu parameter. Biasanya kita
gunakan untuk mengirimkan data ketika promise berhasil dilakukan. Ketika
fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi
fulfilled.

reject() adalah parameter kedua pada executor function. Parameter ini
merupakan fungsi yang dapat menerima satu parameter dan digunakan untuk
memberikan alasan kenapa Promise tidak dapat terpenuhi. Ketika fungsi ini
terpanggil, kondisi Promise akan berubah dari pending menjadi rejected.
Executor function akan berjalan secara asynchronous hingga akhirnya
kondisi Promise berubah dari pending menjadi fulfilled/rejected.
*/