function reverseNumber(n) {
  const sign = n < 0 ? -1 : 1;      
  n = Math.abs(n);                  
  const reversed = parseInt(n.toString().split("").reverse().join(""), 10);
  return sign * reversed;
}

console.log(reverseNumber(123));   
console.log(reverseNumber(-456));  
console.log(reverseNumber(120));  
