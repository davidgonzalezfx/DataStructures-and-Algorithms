function factorial(num) {
  if (num == 0) {
    return 1
  }
  return (num * factorial(num-1))
}
let inpt = parseInt(prompt("Type number greater than 0"))
if (inpt < 0) {
  confirm("Your number is smaller than 0")
}
else {
  console.log(factorial(inpt));
}