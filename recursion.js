function factorial(num) {
  if (num == 0) {
    return 1
  }
  return (num * factorial(num-1))
}
let inpt = parseInt(prompt("Type number greater than 0"))

console.log(factorial(inpt));