// soal 1
let input 

do {
  input = prompt("Masukkan angka: ")
} while (input % 2 != 0);

// soal 2
let num = 4
let x = 0

do {
  x++
  if(x % 4 == 0 && x <= 30){
    console.log(x)
  }
} while (x <= 40);

// soal 3
let numbers = [12, 45, 67, 34, 89, 23]
let max = numbers[0]
let a = 1

do{
  if(numbers[a] > max){
    max = numbers[a]
    console.log(max)
  }
  a++
} while(a < numbers.length)

// soal 4
let angka = "12345"
let reversed = ""
let b = angka.length

do {
  b--
  reversed = angka[b]
  console.log(reversed)
} while (b >= 0);

// soal 5
let str = "Hello World! THIS is JavaScript"
let upper
let c = 0
do {
  c++
  if(str.charAt(c) === str.charAt(c).toUpperCase() && str.charAt(c) !== " "){
    upper = str.charAt(c)
    console.log(upper)
  }
} while (c < str.length);