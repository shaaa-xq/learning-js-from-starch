// const token = Math.random() * 123456789;
// const pic = ["1.jpg", "2.jpg", "3.jpg"];

// function login(username, callback){
//   setTimeout(() => {
//     callback({username, token})
//   }, 200)
// }

// function getUser(token, callback){
//   if(token){
//     setTimeout(() => {
//       callback({apiKey: 1297485})
//     }, 300)
//   }
// }

// function getPict(apiKey, callback){
//   if(apiKey){
//     setTimeout(() => {
//       callback({pic: pictures})
//     })
//   }
// }

// login('kaguwir', function(response){
//   const {token} = response;
//   getUser({token}, )
// })

// soal 1
function fetchData(callback){
  setTimeout(() => {
    callback('Data berhasil diambil!!');
  }, 2000)
}

// fetchData(function(response){
//   console.log(response)
// })

// soal 2
function calculate(a, b, callback){
  return callback(a, b)
}

const jumlah = (a, b) => (a + b);
const kurang = (a, b) => (a - b);


console.log(calculate(5, 2, jumlah));
console.log(calculate(10, 7, kurang));

// soal 3
function readFile(callback){
  console.log('proses pembacaan file...')
  setTimeout(() => {
    console.log('proses pembacaan file selesai')
    callback({processData});
  }, 5000)
}

function processData(){
  console.log('data sedang diproses')
  setTimeout(() => {
    console.log('data berhasil diproses!!')
  }, 2000)
}

readFile(processData);

// soal 4
function fetchUser(username, callback){
  if (username){
    console.log('memeriksa username...')
    setTimeout(() => {
      callback(username)
    }, 3000)
  } else{
    console.log('username tidak boleh kosong')
  }
}

fetchUser("kaguwir", function(response){
  console.log('username ditemukan:', response);
})

// soal 5
function loopAsync(arr, callback){
  console.log("mencetak angka dimulai!")
  arr.forEach((num, index) => {
    setTimeout(() => {
      callback(num)
    }, 1000 * index)
  });
}

loopAsync([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(response){
  console.log(response)
})