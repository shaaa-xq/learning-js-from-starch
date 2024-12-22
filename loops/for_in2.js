// soal 1
// const scores = {
//   math: 80,
//   english: 90,
//   science: 70
// }

// let sum = 0

// for (let key in scores) {
//   sum += scores[key]
//   console.log("sum: " + sum)
// }

// soal 2
// const user = {
//   name: "Alice",
//   age: 25,
//   city: "Paris"
// }

// let nullKey

// for(let key in user){
//   nullKey = user[key] = null
//   console.log(user)
// }

// soal 3
const data = {
  name: "Alice",
  hobby: "Painting",
  city: "Paris"
}

let str

for (const key in object) {
  str = Object.keys(data).length
  console.log(str)
}