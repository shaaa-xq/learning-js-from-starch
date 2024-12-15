// soal 1
// function fetchUserData(name, callback){
//   setTimeout(() => {
//     callback({name})
//   }, 2000)
// }

// function fetchOrderData(order, callback){
//   setTimeout(() => {
//     callback({order})
//   }, 3000)
// }

// fetchUserData("Alice", function(response){
//   console.log(response)
//   fetchOrderData("Cheesecake", function(response){
//     console.log(response)
//   })
// })

// soal 2
// const productId = Math.round(Math.random() * 123)
// const userOrder = "Cheesecake"

// function getUser(username, callback){
//   callback({username})
// }
// function getUserOrders(userOrder, callback){
//   callback({userOrder})
// }
// function getOrderDetails(productId, userOrder, callback){
//   callback({productId, userOrder})
// }

// getUser("Alice", function(response){
//   console.log(response)
//   getUserOrders(userOrder, function(response){
//     console.log(response)
//     getOrderDetails(productId, userOrder, function(response){
//       console.log(response)
//     })
//   })
// })

// soal 3
// const task = ["Tugas jarkom", "PBL", "Tugas bahasa inggris"]

// function processQueue(task, callback){
//   task.forEach((item, index) => {
//     setTimeout(() => {
//       callback(item)
//     }, 1000 * index)
//   });
// }

// processQueue(task, function(response){
//   console.log(response)
// })

// soal 4
// const number = ["1", "2", "3", "4", "5", "6"]
// function processBatch(number, callback) {
//   callback(number.slice())
// }

// processBatch(function(response){
//   console.log(`Processing batch: ${response}`)
// })

// soal 5
const fileName = ["image.jpg", "image.png", "vlog.vid", "logo.png"]

function uploadFiles(fileName, callback){
  console.log("Uploading file on progress...")
  fileName.forEach((item, index) => {
    setTimeout(() => {
      callback(item)
    },2000 * index)
    
  });
}

uploadFiles(fileName, function(response){
  console.log(response)
})
