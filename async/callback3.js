// soal 1
const userId = Math.floor(Math.random() * 12)
const name = "Alice"

function fetchUserData(userId, name, callback){
  setTimeout(() => {
    callback(`id: ${userId}, name: ${name}`)
  }, 2000)
}

fetchUserData(userId, name, function(response){
  console.log(response)
})

// soal 2
function calculate(a, b, callback){
  setTimeout(() => {
    callback(result = a + b)
    setTimeout(() => {
      callback(result * result)
    }, 2000)
  }, 1000)
}

calculate(5, 7, function(response) {
  console.log(response)
})

// soal 3
const items = ["Cheesecake", "Red Velvet", "Blueberry Cheesecake", "Chocolate Mousse"];

function processItems(items, callback) {
  items.forEach((item, index) => {
    setTimeout(() => {
      callback(item);
    }, 1000 * index);
  });
}

processItems(items, function (response) {
  console.log(response);
});
