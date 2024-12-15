// soal 1
for (let i = 1; i <= 10; i++){
  console.log(i)
}

// soal 2
for (let i = 1; i <= 20; i++){
  if (i % 2 !== 0){
    console.log(i)
  }
}

// soal 3
for (let i = 0; i <= 10; i++){
  if (multiple = i * 5){
    console.log(multiple)
  }
}

// soal 4
function factoralize(num){
  if (num === 0 || num === 1){
    return 1
  }
  for (let i = num; i >= 1; i--){
    num = num * i
  }
  return num
}

console.log(factoralize(5))

// soal 5
const str = "JavaScript";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]); 
}
