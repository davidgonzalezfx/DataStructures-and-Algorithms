function revString(str) {
  if(!str.length){
    return str;
  }
  return revString(str.substr(1)) + str.charAt(0)

}
console.log(revString("ALGORITHMS ARE LOVE"));