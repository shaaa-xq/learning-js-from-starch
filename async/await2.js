// soal 1
async function delayedLoop() {
  for (let i = 1; i <= 10; i++){
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(i))
      }, 1000)
    })
  }
}

delayedLoop()

// soal 2
const balance = "5000"

function fetchUserData(name){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`User: ${name}`)
    }, 2000)
  })
}

function fetchAccountBalance(balance){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Balance: ${balance}`)
    }, 1000)
  })
}

async function fetchAllData() {
  const allData = await Promise.all([fetchUserData("Alice"), fetchAccountBalance(balance)])
  console.log(allData)
}

fetchAllData()

// soal 3
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

async function fetchDiscountData(amount){
  try {
    const diskon = await fetchDiscount(amount)
    console.log(diskon)
  } catch (error) {
    const reject = await fetchDiscount(amount)
    console.error(reject)
  }
}

fetchDiscountData(10)
fetchDiscountData(50)
fetchDiscountData(100)

// soal 4
function fetchUser(){
  return new Promise((resolve) => {
    resolve("User fetched!")
  })
}

function fetchPost(){
  return new Promise((resolve) => {
    resolve("Post fetched!")
  })
}

function fetchComment() {
  return new Promise((resolve) => {
    resolve("Comment fetched!")
  })
}

async function parallelAsync(){
  try {
    const fetchAll = await Promise.all([fetchUser(), fetchPost(), fetchComment()])
    console.log(fetchAll)
  } catch (error) {
    console.error()
  }
}
parallelAsync()

// soal 5
const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"]
const batchSize = 2

async function processInBatches(tasks, batchSize) {
  for (let i = 0; i < tasks.length; i += batchSize){
    const batch = tasks.slice(i, i + batchSize)
    await Promise.all(
      batch.map((task) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Processing task: ${task}`)  
            resolve() 
          }, 2000)
        })
      })
    )
    console.log(`Batch selesai: ${batch}`)  
  }
}

processInBatches(tasks, batchSize)