// tipe data pada balikan function.

function getName(): string {
    return "Hallo, my name is Kadek Frama";
}

console.log(getName());


function getAge(): number {
    return 123;
}

console.info(getAge());


function printName(): void {        // tipe function void artinya function tidak dapat mengebalikan (return) nilai.
    console.info("Print Nama Seseorang...");
}

printName();


/* ========================================== */


// Argument types pada function.

function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

const results = multiply(2,3);
console.info('');
console.info('Hasilnya adalah: ' + results);


