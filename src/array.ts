// array.
let array: number[];        // array yang dibuat harus berisi nilai number/integer semua.
array = [1, 2, 3];

let array2: string[];       // array yang dibuat harus berisi nilai string semua.
array2 = ['string1', 'string2', 'string3'];

let array3: any[];          // array dengan value bebas atau dapat berisi berbagai tipe value.
array3 = [1, 'string', true, {}];
console.info(array3);


// tuples.
let biodata: [string, number];      // tuples adalah tipe data pada typescript yang merupakan array dengan tipe data dan value sudah ditentukan.
biodata = ['Surabaya', 123];        // Jadi hanya dapat berisi sesuai dengan tipe data yang telah ditentukan dan dengan jumlah value yang telah ditentukan.
biodata = ['Badung', 321];
biodata = ["Karangasem", 100];

console.info(biodata);