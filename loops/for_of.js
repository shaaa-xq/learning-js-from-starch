// soal 1
const colors = ["Red", "Green", "Blue"]

for(let key of colors){
  console.log(key)
}

// soal 2
const text = "JavaScript"

for(let word of text){
  console.log(word)
}

// soal 3
const numbers = [10, 20, 30, 40, 50]

for (let num of numbers){
  console.log(num)
}

// soal 4
const scores = [85, 90, 78, 88, 76]
let sum = 0

for (let score of scores){
  sum += score
}
console.log(sum)

// soal 5
const students = [
  {name: "John", age: 18},
  {name: "Jane", age: 20},
  {name: "Jack", age: 22}
]

for (let i of students){
  console.log(i)
}