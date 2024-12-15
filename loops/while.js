// soal 1
let num = 10

while (num >= 1) {
  console.log(num)
  num--
}

// soal 2
let n = 1

while (n <= 20){
  if (n % 2 === 0){
    console.log(n)
  }
  n++
}

// soal 3
let x = 1
let result = 0

while (x <= 50){
  result += x
  x++
}

console.log(result)

// soal 4
let text = "Programming"
let a = 0

while(a <= text.length){
  console.log(text[a])
  a++
}

// soal 5
let b = 1

while(b <= 100){
  console.log(b)
  if(b == 42){
    break
  }
  b++
}