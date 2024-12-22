// soal 1
let i = 1

do {
  console.log(i)
  i++
} while (i <= 5);

// soal 2
let n = 3

do {
  if (n % 3 == 0){
    console.log(n)
  }
  n++
} while (n <= 30);

// soal 3
let x = 1
let result = 0

do {
  result += x
  x++
} while (x <= 20);

console.log(result)

// soal 4
const password = "kaguwirganteng"
let inputPassword

do {
  inputPassword = prompt("Masukkan Password Anda: ")  
  if(inputPassword === password){
    console.log("Password Benar")
  }
} while (inputPassword != password);

// soal 5
let text = "Coding"
let b = text.length - 1
do {
  console.log(text[b])
  b--
} while (b >= 0);
