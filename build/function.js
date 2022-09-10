"use strict";
// tipe data pada balikan function.
function getName() {
    return "Hallo, my name is Kadek Frama";
}
console.log(getName());
function getAge() {
    return 123;
}
console.info(getAge());
function printName() {
    console.info("Print Nama Seseorang...");
}
printName();
/* ========================================== */
// Argument types pada function.
function multiply(val1, val2) {
    return val1 * val2;
}
const results = multiply(2, 3);
console.info('');
console.info('Hasilnya adalah: ' + results);
const add = (val1, val2) => {
    return val1 + val2;
};
console.info(`Results Add: ${add(6, 4)}`);
