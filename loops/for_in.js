// soal 1
const student = {
  name: "Alice",
  age: 20,
  major: "Informatics"
}

for (const key in student) {
  console.log(`${key}`)
}

// soal 2
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
}

for (const key in car){
  console.log(`${key}: ${car[key]}`)
}

// soal 3
const book = {
  title: "Javascript Guide",
  author: "John Doe",
  pages: 300
}

for (let key in book){
  key = Object.keys(book)
  console.log(key)
}

// soal 4
const fruits = ["Apple", "Banana", "Cherry"]

for (let index in fruits){
  console.log(`index-${index}: ${fruits[index]}`)
}

// soal 5
const laptop = {
  brand: "Dell",
  specs: {
    ram: "16GB",
    storage: "512GB SSD"
  }
}

for(let key in laptop){
  if(typeof laptop[key] === 'object'){
    console.log(`${key}`)
    for(let subKey in laptop[key]){
      console.log(`${subKey}: ${laptop[key][subKey]}`)
    }
  } else{
    console.log(`${key}: ${laptop[key]}`)
  }
}
