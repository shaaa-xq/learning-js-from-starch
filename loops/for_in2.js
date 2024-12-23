// soal 1
const scores = {
  math: 80,
  english: 90,
  science: 70
}

let sum = 0

for (let key in scores) {
  sum += scores[key]
  console.log("sum: " + sum)
}

// soal 2
const user = {
  name: "Alice",
  age: 25,
  city: "Paris"
}

let nullKey

for(let key in user){
  nullKey = user[key] = null
  console.log(user)
}

// soal 3
const data = {
  name: "Alice",
  hobby: "Painting",
  city: "Paris"
}

let str

for (const key in data) {
  str = data[key].length
  console.log(str)
}

// soal 4
const obj = {
  a: 10,
  b: null,
  c: 30,
  d: null
}

for(let key in obj){
  if(obj[key] === null){
    delete obj[key]
  }
}
console.log(obj)

// soal 5
const person = {
  name: "Bob",
  address: {
    city: "NYC",
    zip: "10001"
  }
}
let indent = 0

for(let key in person){
  if(typeof person[key] === 'object'){
    console.log(`${key}:`)
    for(let subKey in person[key]){
      console.log(`${' '.repeat(indent + 4)}${subKey}: ${person[key][subKey]}`)
    }
  }else{
    console.log(`${key}: ${person[key]}`)
  }
}