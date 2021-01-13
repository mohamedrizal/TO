package main

import (
	"fmt"
	"strings"
	"math/rand"
)
//soal esay
/* 
	*nomer1
		Golang merupakan bahasa pemrograman yang dibuat oleh google
		pada tahun 2009,dengan fitur garbage,dan juga compiler disediakan
		bebas oleh google secara bebas dan open source

	*nomer2
		-bahasa case-sensitive
			membaca huruf kapital dan kecil
			jika salah penulisan maka akan terjadi error

		-comment
			digunakan untuk memberi catatan agar mempermudah
			dalam membaca kode,
			terdapat beberapa cara untuk membuat komentar
			
			//membuat 1 baris komentar
			/*membuat lebih dari 1 baris

		-kodingan dari dibaca dari atas kebawah
*/

//soal algoritma	
func main() {
	soal1(7)
	soal3()
	soal4()
}

func soal1(number int) {
	var test string = "0"

	for i := 1; i <= number; i++ {
		var nol string = strings.Repeat(test, number - i)
		fmt.Println(i,nol)
	}
}

func soal3() {
	str1 := "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio."

	var length int = 0

	var karakter = [26]string {"a", "b" ,"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}

	for i:=0; i<len(karakter); i++ {
		length =strings.Count(str1, karakter[i])
		fmt.Println(karakter[i],length)
	}
}

func soal4()  {
	var langkah int = 0
	var number int = rand.Intn(101)

	for i := 1; i<=number; i++ {
		for	x := 1; x<= number; x++ {
			if i+x == number {
				langkah += 1
			} else {
				langkah += 0
			}
		}
	}

	fmt.Println(number, langkah)
}