// soal 1
const id = Math.floor(Math.random() * 12)
const balance = "5000"

function fetchUserData(id, name){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({id, name})
    }, 2000)
  })
}

function fetchAccountBalance(balance){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({balance})
    }, 1000)
  })
}

fetchUserData(id, "Alice").then((value) => {
  console.log(value);
  return fetchAccountBalance(balance).then((value) => {
    console.log(value)
  })
})

// soal 2
function fetchDiscount(amount) {
  return new Promise((resolve, reject) => {
    if(amount >= 100){
      resolve("You got 10% Discount!")
    } else if(amount >= 50){
      resolve("You got 5% discount!")
    } else{
      reject("Belanjaan tidak cukup untuk diskon")
    }
  })
}

fetchDiscount(10)
  .then((value) => {console.log(value)})
  .catch(console.error())

// soal 3
const tasks = ["Task 1 ", "Task 2", "Task 3", "Task 4"]
const batchSize = 2

async function processBatcPromise(tasks, batchSize){
  for (let i = 0; i < tasks.length; i+= batchSize){
    const batch = tasks.slice(i, i + batchSize)
    console.log(`Batch selesai: ${batch}`)
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }
}

processBatcPromise(tasks, batchSize)

// soal 4
const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Promise 1 selesai")
})

const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Promise 2 selesai")
})

Promise.race([promise1, promise2])
  .then((value) => {console.log(value)})

// soal 5
const name = ["Alice", "Anna", "Noya"]
const orders = [["101", "102"], ["103", "104"], ["105"]]

function fetchDataUser(name){
  return new Promise((resolve) => {
    resolve(`Name: ${name[0]}`)
  })
}

function fetchUserOrders(orders){
  return new Promise((resolve) => {
    resolve(`Orders: ${orders[0]}`)
  })
}

fetchDataUser(name).then((value) => {
  console.log(value); 
  return fetchUserOrders(orders).then((value) => {
    console.log(value)
  })
})