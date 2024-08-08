var object = "helo, world"

console. object 
console.log("hello, world")

// Ini adalah declaration variable dengan var dan init dengan value "john"
/*
halo this is a comment multiline 
ini adalah komentar dengan banyak baris
*/
var name ='john';
console.log (name);

name = "akbar"
console.log(name);

let data = "this is a simple string";
console.log (data);

let empty 
console.log (empty);

const pi=3.14 // => variable dengan data float (bilangan decimal)
const area = 10 // => variable dengan tipe data integer (bilangan bulat)
const description = "ini adalah deskripsi"
console.log(typeof area) ; //=> type of untuk mengecheck tipe apakah dari variabel area 
console.log(typeof description);

const sudahistirahat = true; //=> variable dengan tipe data boolean (true/false)
console.log(typeof sudahistirahat);

const profile = {
    name: "akbar", // => tipe data dari propertly name adalah string
    age: 23, //=> tipe data dari age adalah number
    addres: "bandung", // => tipe data dari addres adalah string
    isMariied: false, // => tipe data dari isMariied adalah false,
    school:{ // => propertly dengan tipe data object atau nested object
    name: 'UIN',
    year: 2024
}
}

console.log(profile);
console.log(profile.name); // => akses propertly name didalam object profile 
console.log(profile.school.name); // => akses propently name 
console.log(typeof profile);

// Array 
const sampleArray = [50, //=>. data pertama didalam Array dn selanjutnya adalah urutan setelahnya
    "A", 
    true,
     {name:"akbar"} // => array of object
    ]

    console.log(typeof sampleArray);

    const scores = [70, 80, 90, 95]; // => 70 merupakan element dari Array yg berlokasi di index ke 0

    /**
     * setiap data didalam Array memiliki index sebagai uruta atau lokasi data tersebut berada
     * 
     * Dan Array itu selalu dimulai dengan index 0 yang artinya data peryama didalam Array,
     * 
     * dalam conotoh diatas index ke 0 adalah 70
     *  */ 

    console.log(scores [0]); // => akses Array menggunakan index

    scores[0]= 50; // => merubah isi dari Array inex ke 0
    console.log(scores[0]); // output: 50

const fruits = ["aplle", "banana","kiwi"];
console.log(fruits) // =>  output is apple banan kiwi
    fruits.push ("orange");
    console.log(fruits); // => output aplle banana kiwi orange 

    fruits.unshift ("mango"); // =. menambahkan element diawal Array

    console.log(fruits); //=> output mango applr banana kiwi orange 

    fruits.pop(); // => mengapus element di akhir Array
    console.log(fruits); // => output mango apple banana kiwi
fruits.shift(); // => menghapus element diawal Array
console.log(fruits); // => output apple banana kiwi 

console.log(fruits.length); // => memastikan panjang dari Array 
    
const morefruits = ["kiwi","grape"];
const allfruits = fruits.concat(morefruits); // => menggabungkaan 2 Array menjadi 1
console.log(allfruits); // => output apple banana kiwi orange grape 

/**
 * 
 * let i = 0 adalah definisi dari index Array yang mau kita mulai perulangannya. jika i ini isinya 0 
 * maka array akan di akses dari inedx 0
 * 
 * i< foods.length adalah condition, yang berarti variable i itu tidak boleh kurang dari, 
 * foods.length atau dalam kasus ini index itu tidak boleh melebihi panjang array
 * 
 * ++ merupakan increment (atau menambah 1)
 * __ merupakan decrement (atau mengurangi 1)
 * 
 * 
 */



const foods = ["noodle", "egg", "rice"];  
for (let i = 0; i  < foods.length; i++) {
 console.log(foods[i]);
}

console.log("perulangan berhasil");




const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    
    ];
    
console.log(matrix[1][1]); // => output 5

for (let i = 0; i <  matrix.length; i++) {
for (let j = 0; j < matrix [i].length; j++) {
    console.log(matrix[i][j]);
}
}

// multidimensi Array
const matrixs = [
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ],
];

console.log(matrixs[0][1][2]); //=> output 6


// segitiga kanan
for (let i = 0; i < 5; i++) {
    let str = "* "
    console.log(str.repeat(i));
}

// segitiga kiri
let x = 5
for (let i = 0; i < x; i++) {
    let str = "* "
    let space = " "
    console.log(space.repeat((x-i)) + str.repeat);
}

const isLoggedin = true;
/**
 * ketika variable dalam kondisi if () bernilai boolean cukup gunakan variable jika ingin,
 * memeriksa bawa itu true atau benar. jika ingin memeriksa jika itu salah cukup gunakan !nama variable 
 * yang artinya ! melambangkan negativ value dalam kasus booleam negativ adalah valse
 */

if (isLoggedin) { // => untuk tipe data booleam kita hanya cukup memasukan kondisi true atau false

    console.log("Hallo admin");
} else {
    console.log("Harap login");
}

const baju = "putih";
if(baju== "putih")  { // => kalau tipe datanya booleam kita harus pakai operasi ==
console.log("baju bersih");
} else if (baju == "merah") {
    console.log("baju warna merah");
} else {
    console.log("baju kotor");
}


/**
 * 
 * @returns string 
 * ini merupakan declaration dari sebuah function sederhana,
 * declaratio function ditulis dengan keywords function namafunction ()
 * jika function tidak memiliki keywords return dia merupakan void function 
 * yang berarti function tersebut tidak mengembalikan nilai apaun ketika digunakan
 * gae = 23 itu merupakan initialization parameter dengan nilai awal atau default value,
 * ketika kita melakukan pemanggilan function tanpa mengirim parameter age, maka secara default 
 * age itu bernilai 23 jika kita memakukan nilai parameter ke2 nilai age akan sesuai berdasarkan
 * parameter kedua yang dikirimdari pemanggilan function
 * 
 * 
 */

function greet(name, age = 23) {
// penggunaan string literal atau ` ketika ingin menggunakan variable/parameter harus dengan ${}
return `Helo, ${name}. my age is ${age} yo`;
}

const greeting = greet("akbar", 24); // => jika function memiliki keywords return didalamnya bisa menggunakan variable 
console.log(greeting);
console.log(greet("akbar")); // => function bisa digunakan langsung tanpa variable seperti contoh berikut

/**
 *  * perkalian
 * / pembagian
 *  + penjumlahan
 *  - pengurangan
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */




function add(a, b) {
    
 return a + b;
    }
    

console.log(add(5, 3)); // => output selalu a + b dalam kasus ini argument nya bernilai 5 dan 3hasilnya 8 

function fizzBuzz(number) {
if (number %  2 == 0) {
    return "fizz";
}

if (number % 3 == 0) {
    return "buzz";
}

if (number % 5 == 0 ) {
    return "fizzBuzz";
}

return "failed";
}

console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7)); 

const greetAnom = function (name) {
    return `Hello, ${name} from anonymous function`;
}

console.log(greetAnom("akbar"));

// Arrow function
const greetArrow = (name) => `Hello, ${name} from arrow function`;

console.log(greetArrow("akbar"));

/**
 * class itu didefinisikan dengan keywords class
 * class juga memiliki constructor, dimana conctructor akan selalu di akses diawal ketika
 * kita melakukan pembuatan object baru dari class dengan keywords new car("toyota", "campry", 2020)
 * pada dalam conctructor kita menggunakan keywords this. untuk mendefinisikan sebuah property
 * didalam object mirip dengan tipe data obejct lainnya class juga punya property
 * 
 */

class Car {
    constructor(name, brand, year) {
        this._name = name;
        this._brand = brand;
        this._year = year;
    }

    information() {
        return `${this.name} have brand from ${this._brand} and build in ${this._year}`;
    }
// ini adalah setter untukmerubah nilai dari sebuah property
    setName(name) {
        this._name = name;
    }
// ini adalah getter untuk mengambil data dari sebuah property
    getname() {
        return this.name;
    }
    // ini adalah getter untuk mengambil data dari sebuah property
getName() {
    return this.name;
}

// ini merupakan contoh penggunaan seters dgn keywords set
set name(value) {
    if (value !== "") {
    this._name = value;
    } else {
        console.log("the value must be no empty string");
    }
    
}
// ini merupakan contoh penggunaan getters dgn keywords get
get name() {
return this._name;
}
}


const car = new Car("toyota", "camry", 2020); 
console.log(car.information());
//car.setName("Daihatsu");
car.name = "Daihatsu" // menggunakan setter untuk merubah data dari property yang ada di class
console.log(car.information());
console.log(car.name);


class Animal {
    constructor(name) {
    this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
/**
 * dog merupakan sebuah children class ayng mewarisi semua yang ada didalam class animal,
 * baik itu property maupun method
 * 
 */

class Dog extends Animal {
    speak() {
        console.log("what the dog do`ing");
    }
 }

const dog = new Dog("Holy");
dog.speak();


class Cat extends Animal {
constructor(name, collor) {
super(name)
this.collor = collor }


speak() {
super.speak()
console.log(`${this.name} moews.`);

}
}
const cat = new Cat("whisker", "Gray")
cat.speak();


class MathUtil {
static add(a, b) {
    return a + b;
}

static multiply(a, b ) {
    return a * b;
}
}

console.log(MathUtil.add(1, 2));
console.log(MathUtil.multiply(5, 3));

/**
 * naming conversion clas biasanya menggunakan pascalCase atau sebgai contoh Loandisbursement
 * naming conversion variable biasanya itu camelCase atau variableName
 *naming conversion function biasanya itu camelCase atau functionmName
 *  
 */

 