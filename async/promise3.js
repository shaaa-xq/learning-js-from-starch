// soal 1
function calculateSumAndDouble(a, b){
  return new Promise((resolve) => {
    setTimeout(() => {
      const sum = a + b
      console.log(sum)
      setTimeout(() => {
        resolve(sum * 2)
      }, 2000)
    }, 1000)
  })
}

calculateSumAndDouble(8, 37)
  .then((value) => {
    console.log(value)
  })

// soal 2
function fetchUserDataId(userId){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`User-${userId} : ${userId}`)
    }, 2000)
  })
}

async function fetchUserDataInBatch(userIds){
  try {
    const promises = userIds.map((userId) => fetchUserDataId(userId))
    const userData = await Promise.all(promises)
    return userData
  } catch (error) {
    console.error()
  }
}

fetchUserDataInBatch(["1", "2", "3", "4", "5"])
  .then((value) => {console.log(value)})

// soal 3
function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b !== 0){
      resolve(a / b)
    } else {
      reject("Tidak bisa membagi dengan nol!")
    }
  })
}

divide(16, 2)
  .then((value) => {console.log(value)})
  .catch((error) => console.error(error))

divide(16, 0)
  .then((value) => {console.log(value)})
  .catch((error) => console.error(error))
