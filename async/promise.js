// soal 1
function fetchDataPromise(){
  return new Promise((resolve) => {
    setTimeout(() =>{
      resolve("Data berhasil diambil");
    }, 2000)
  })
}

fetchDataPromise().then(value => {console.log(value); return value}); 

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

checkEven(4).then(value => {console.log(value); return value})
checkEven(7).catch(console.error("Bilangan ganjil"));

// soal 3
function multiplyByTwo(num){
  return new Promise((resolve) => {
    resolve(num * 2);
  })
}

function addTen(num){
  return new Promise((resolve) => {
    resolve(num + 10)
  })
}

multiplyByTwo(10).then(addTen).then(console.log);

// soal 4
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

Promise.all([fetchUser(), fetchPost(), fetchComment()]).then((values) => {console.log(values)})

// soal 5
function fetchProduct(product){
  return new Promise((resolve, reject) => {
    if (!product){
      reject("Produk tidak ditemukan")
    } else{
      resolve(`Produk ditemukan: ${product}`)
    }
  })
}
fetchProduct("Kue").then(value => {console.log(value)})
              .catch(console.error())