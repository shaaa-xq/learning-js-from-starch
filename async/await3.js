// soal 1
// const numbers = ["1", "7", "18"]

// function processArray(num){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num ** 2)
//     }, 1000)
//   })
// }
// async function processInSerial(numbers) {
//   const result = []
//   for (const num of numbers){
//     const serial = await processArray(num)
//     result.push(serial)
//   }
//   return result
// }

// async function processInParallel(numbers) {
//   const promises = numbers.map(processArray)
//   const result = await Promise.all(promises)
//   console.log(result)
// }

// processInSerial(numbers)
//   .then((result) => {console.log(result)})

// processInParallel(numbers)

// soal 2
// function simulateLogin(username, password){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!username || !password){
//         reject("Input tidak valid!")
//         return
//       }
//       setTimeout(() => {
//         const usernameValid = "guwieerr"
//         const passwordValid = "bawadehewak"

//         if (username === usernameValid && password === passwordValid){
//           resolve("Login berhasil!")
//         } else {
//           reject("Login gagal! Password atau username anda salah")
//         }
//       }, 2000)
//     }, 1000)
//   })
// }

// async function login(username, password){
//   try {
//     const result = await simulateLogin(username, password)
//     console.log(result)
//   } catch (error) {
//     console.error(error)
//   }
// }

// login("guwieerr", "bawadehewak")
// login("sipriaterang", "cahayaganteng")

// soal 3
// async function fetchPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "GET",
//     });
//     if (!response.ok) {
//       throw new Error();
//     }

//     const json = await response.json();
//     const posts = json.slice(0, 5)

//     posts.forEach((post, index) => {
//       console.log(`Post #${index + 1}: Title ${post.title}`)
//     });
//     console.log();
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// fetchPosts()

