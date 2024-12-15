// soal 1
let number = 6
let n1 = 0, n2 = 1, nextTerm
let i = 0

while (i <= number) {
  console.log(n1)
  i++
  nextTerm = n1 + n2
  n1 = n2
  n2 = nextTerm
}

// soal 2
let digit = 12345678
let i = 0

while(digit > 0){
  digit = Math.floor(digit / 10)
  i++
}

console.log(i)

// soal 3
let a = 1
let max = 512

while(a <= max){
  console.log(a)
  a *= 2
}

// soal 4
let numbers = 123456789
let x = 0

while(numbers > 0){
  numbers = Math.floor(numbers / 10)
  x++
  if(x % 2 == 0){
    console.log(x)
  }
}

// soal 5
const nums = [10, 20, 15, 5, 10]
let i = 0
let total = 0

while(total < 50 && i < nums.length){
  total += nums[i]
  i++
}
console.log(i)
console.log(total)