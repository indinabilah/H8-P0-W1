//jumat-week1-exercises6-3
//Angka Ganjil dan Genap
//soal 1 & 2
console.log("Angka Ganjil dan Genap")
var i = 1
var genap = "GENAP"
var ganjil = "GANJIL"
var j

for(i = i; i <=100; i++){
  j = i % 2
  if(j == 0){
    console.log(i + " " + genap)
  }else{
    console.log(i + " " + ganjil)
  }
}

console.log("--------------------")
console.log("3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9")
console.log("pertambahan counter sebesar 2")
for(i = 0; i < 101; i++){
  j = i + 2
  console.log(j)
  i++
}

var i = 0
console.log("pertambahan counter sebesar 5")
for(i = 0; i < 101; i++){
  j = i + 5
  console.log(j)
  i++
}

console.log("pertambahan counter sebesar 9")
for(i = 0; i < 101; i++){
  j = i + 9
  console.log(j)
  i++
}

console.log("--------------------")
console.log("Kelipatan 3 6 10")
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
