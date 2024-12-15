// soal 1
function fetchDataPromise(){
  return new Promise((resolve) => {
    setTimeout(() =>{
      resolve("Data berhasil diambil");
    }, 2000)
  })
}

async function getDataAsync(){
  const result = await fetchDataPromise()
  console.log(result)
}

getDataAsync()

// soal 2
function checkEven(num){
  return new Promise((resolve, reject) => {
    if (num % 2 == 0){
      resolve("Bilangan genap")
    } else {
      reject("Bilangan ganjil")
    }
  })
}

async function checkEvenAsync(num){
  try {
    const catchEven = await checkEven(num)
    console.log(catchEven)
  } catch (error) {
    console.error(error)
  }
}

checkEvenAsync(6)
checkEvenAsync(9)

// soal 3
function fetchUser(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User Fetched");
    }, 1000)
  })
}

function fetchPost(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Fetched")
    }, 100)
  })
}

async function fetchUserData() {
  const user = await fetchUser()
  console.log(user)
  const post = await fetchPost()
  console.log(post)
}

fetchUserData()

// soal 4
async function delayedPrint(arr) {
  for (const item of arr){
    await new Promise ((resolve) => {
      setTimeout(() => {
        resolve(console.log(item))
      }, 1000)
    })
  }
}

delayedPrint(["A", "B", "C", "D", "E"]);

// soal 5
function fetchUser(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User Fetched");
    }, 1000)
  })
}

function fetchPost(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Fetched")
    }, 100)
  })
}

function fetchComment(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Fetched")
    }, 100)
  })
}

async function fetchAllData() {
  const [user, post, comment] = await Promise.all([fetchUser(), fetchPost(), fetchComment()]);
  console.log(user, post, comment)
}

fetchAllData()
