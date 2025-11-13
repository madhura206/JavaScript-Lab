function safeSquareRoot(num) {
  try {
    if (typeof num !== "number") {
      throw new Error("Input must be a number");
    }
    if (num < 0) {
      throw new Error("Cannot find square root of a negative number");
    }

    return Math.sqrt(num);
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

console.log(safeSquareRoot(25));   
console.log(safeSquareRoot(-9));  
console.log(safeSquareRoot("abc")); 
