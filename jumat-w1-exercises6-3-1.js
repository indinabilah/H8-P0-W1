//jumat-week1-exercises6-3
//Angka Ganjil dan Genap
//soal 1 & 2
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
