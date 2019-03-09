//jumat-week1-exercises6-3
//Kelipatan 3 6 10
var i = 1
console.log("Kelipatan 3")
for(i = 1; i <= 100; i = i + 2){
  j = i % 3
  if(j == 0){
    console.log(i + " kelipatan 3")
  }
}

console.log("Kelipatan 6")
for(i = 1; i <= 100; i = i + 5){
  j = i % 6
  if(j == 0){
    console.log(i + " kelipatan 6")
  }
}

console.log("Kelipatan 10")
for(i = 1; i <= 100; i = i + 9){
  j = i % 10
  if(j == 0){
    console.log(i + " kelipatan 10")
  }
}
