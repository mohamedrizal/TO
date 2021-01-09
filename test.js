//nama : Mohammad Rizal

//soal esai

//nomer 1 
/* 
    javascript adalah bahasa pemrograman high level,javascript merupakan salah satu bahasa inti untuk membuat web,javascript bisa membuat web lebih interaktif,
    javascript bisa digunakan untuk frontend maupun backend
    salah satu keunggulannya yaitu clien-side
*/

//nomer 2
/*
    -bahasa case-sensitive
        membedakan huruf kecil dan kapital,
        jika salah penulisan makan akan terjadi error
    -identifier
        adalah sebutan untuk keyword,nama atau tulisan,
        bisa berati sebuah variable atau nama fungsi
    -comment
        comment digunakan untuk memberi catatan agar
        mempermudah dalam membaca kode dalam js terdapat
        beberapa cara untuk membuat komentar

        //membuat 1 baris
        *yang saya gunakan yang bersimbol slash dan bintang
        untuk membuat komentar lebih dari satu baris
*/

//soal algoritma

//10 point
function soal1() {
    var totalNumberofRows = 7;
    var output = "";
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output = j
            output += "0".repeat(totalNumberofRows - j)
        }
        console.log(output);
        output = ''
    }
}
soal1()

// soal 30 point
// function soal2(nomer) {

// }

//soal 30 point
function soal3(str) {
    var length = 0
    var res = ""

    var karakter = ["a", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (var i = 0; i < karakter.length; i++) {
        length = (str.match(new RegExp(karakter[i], "gi")) || []).length

        res = `${karakter[i]} : ${length}`

        console.log(res)
        res = ""
    }

    var hurufkecil = str.toLowerCase().split("")

    for (var i = 0; i < hurufkecil.length; i++) {
        if (hurufkecil[i] === " ") {
            hurufkecil[i] === " "
        } else if (hurufkecil[i] === ".") {
            hurufkecil[i] === "."
        } else if (hurufkecil[i] === ",") {
            hurufkecil[i] === ","
        } else {
            hurufkecil[i] =
                karakter[
                karakter.indexOf(hurufkecil[i]) + 5 < karakter.length
                    ? karakter.indexOf(hurufkecil[i]) + 5
                    : karakter.indexOf(hurufkecil[i]) + 5 - karakter.length - 1
                ]
        }

        hasil = hurufkecil.join("")
    }
    console.log(hasil.charAt(0).toUpperCase() + hasil.slice(1));

    // var test1 = str.split("").length

    // console.log(result)

}
soal3("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.")

//soal 20point
var total = 100
function soal4() {
    var langkah = 0
    var number = Math.floor(Math.random() * 101)

    for (var i = 1; i <= number; i++) {
        for (var x = 1; x <= number; x++) {
            i + x === number ? (langkah += 1) : (langkah += 0)
        }
    }

    console.log(`${number} : ${langkah}`)
}
soal4()