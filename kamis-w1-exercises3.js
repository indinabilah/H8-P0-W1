//kamis-w1-exercises3
var nama = "indi"
var peran = "Ksatria"

if(nama == ""){
  console.log("Nama harus diisi!")
}else if(nama !== "" &&peran == ""){
  console.log("hallo " + nama + ", pilih peranmu untuk memulai game")
}else if(peran == "Ksatria"){
  console.log("selamat datang di Dunia Proxytia, " + nama)
  console.log("hallo " + peran + nama + ", kamu dapat menyerang dengan senjatamu!")
}else if(peran == "Tabib"){
  console.log("selamat datang di Dunia Proxytia, " + nama)
  console.log("hallo " + peran + nama + ", kamu akan membantu temanmu yang terluka")
}else if(peran == "Zero"){
  console.log("selamat datang di Dunia Proxytia, " + nama)
  console.log("hallo " + peran + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
}else{
  console.log("hayo lo")
}


// var nama = "indi"
// var peran = "Ksatria"
//
// if(nama == ""){
//   console.log("Nama harus diisi!")
// }else if(nama !== "" && peran !== ""){
//   console.log("hallo " + nama + ", pilih peranmu untuk memulai game")
// }else if(peran == "Ksatria"){
//   console.log("selamat datang di Dunia Proxytia, " + nama)
//   console.log("hallo " + peran + ' '+nama + ", kamu dapat menyerang dengan senjatamu!")
// }else if(peran == "Tabib"){
//   console.log("selamat datang di Dunia Proxytia, " + nama)
//   console.log("hallo " + peran + nama + ", kamu akan membantu temanmu yang terluka")
// }else if(peran == "Zero"){
//   console.log("selamat datang di Dunia Proxytia, " + nama)
//   console.log("hallo " + peran + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
// }else{
//   console.log("hayo lo")
// }
