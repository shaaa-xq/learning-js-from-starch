// soal 1
let text = "JavaScript is fun!"
let vowels = ["a", "i", "u", "e", "o"]

for(let i of text){
  if(vowels.includes(i)){
    console.log(i)
  }
}

// soal 2
const nestedArray = [[1,2], [3,4], [5,6]]
let total = 0

for(let subArray of nestedArray){
  for(let num of subArray){
    total += num
  }
}

console.log(total)

// soal 3
const people = [
  {name: "John"},
  {name: "Jane"},
  {name: "Jack"}
]

for(let name of people){
  console.log(name)
}

// soal 4
const numbers = [10, 60, 30, 80, 20, 100]

let result = []

for(let n of numbers){
  if(n > 50){
    result.push(n)
  }
}
console.log(result)

// soal 5
let array = []

for(let arr of nestedArray){
  for(let num of arr){
    array.push(num)
  }
}
console.log(array)