//jumat-w1-exercises7-1
//Menyusun Barisan Bintang
console.log("--------------------")
var rows
console.log("Bintang 5")
for(rows = 1; rows <= 5; rows++){
  console.log('*')
}

console.log("--------------------")
var rows2
var cols2
var star2 = ''

console.log("Bintang Square")
for(rows2 = 1; rows2 <= 5; rows2++){
  star2 = '*'
  for(cols2 = 1; cols2 < 5; cols2++){
    star2 += '*'
  }
  console.log(star2)
}


console.log("--------------------")
var rows3
var cols3
var star3 = ''

console.log("Bintang Pyramid")
for(rows3 = 1; rows3 <= 5; rows3++){
  star3 = '*'
  for(cols3 = 1; cols3 < rows3; cols3++){
    star3 += '*'
  }
  console.log(star3)
}
