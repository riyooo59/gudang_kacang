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