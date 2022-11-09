
//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

let openOrSenior = (seniors) => {
  seniors->Belt.Array.map(senior => {
    let age = senior[0]
    let handicap = senior[1]
    handicap > 7 && age >= 55 ? "Senior" : "Open"

  })
}
