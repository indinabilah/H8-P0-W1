//Breaking Sentence (yet Again) and Count Each Length
//012 3 45678910111213 14 1516 17 1819 20 21222324
var word4 = 'wow JavaScript is so cool'
var exampleFirstWord4 = word4.substring(0, 3)
var secondWord4 = word4.substring(4, 14)
var thirdWord4 = word4.substring(15, 17)
var fourthWord4 = word4.substring(18, 20)
var fifthWord4 = word4.substring(21, 26)

var firstWordLength = exampleFirstWord4.length
var secondWordLength = secondWord4.length
var thirdWordLength = thirdWord4.length
var fourthWordLength = fourthWord4.length
var fifthWordLength = fifthWord4.length

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength)
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength)
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength)
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength)
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength)
