// soal 1
// const char = "*"
// let n = 5
// let row

// for(let i = 1; i <= n; i++){
//   let str = char.repeat(i * 1)

//   console.log(str)
// }

// soal 2
// for (let num = 2; num <= 50; num++){
//   let isPrime = true

//   for(let i = 2; i <= Math.sqrt(num); i++){
//     if(num % i === 0){
//       isPrime = false
//       break
//     }
//   }

//   if(isPrime){
//     console.log(num)
//   }
// }

// soal 3
// function factor(num){
//   if(num === 0 || num === 1){
//     return 1
//   }
//   for(let i = num - 1; i >= 1; i--){
//     num *= i
//   }
//   return num
// }

// console.log(factor(5))

// soal 4
// const array = [1, 2, 3, 4, 3, 2, 1]

// for(let i = 0; i < array.length / 2; i++){
//   if(array[i] == array[array.length - 1 - i]){
//     console.log("Palindrome")
//   } else{
//     console.log("Not Palindrome")
//   }
// }

// soal 5
// const numbers = [10, 15, 20, 25, 30, 35]
// let even = []

// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] % 2 == 0){
//     even.push(numbers[i])
//   }
// }
// console.log(even)