//jumat-w1-exercises7-1
//Menyusun Barisan Bintang Dengan Nested Looping

var rows
var cols
var star = ''

console.log("Bintang Square")
for(rows = 1; rows <= 5; rows++){
  star = '*'
  for(cols = 1; cols < 5; cols++){
    star += '*'
  }
  console.log(star)
}
