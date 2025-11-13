const isPrime = (num) => {
  try {
    if (typeof num !== "number" || isNaN(num)) {
      throw new Error("Input must be a valid number");
    }
    if (num < 2) {
      return false; 
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.log("Error:", error.message);
    return false;
  }
};

console.log(isPrime(7));    
console.log(isPrime(10));  
console.log(isPrime(-5));   
console.log(isPrime("abc")); 
