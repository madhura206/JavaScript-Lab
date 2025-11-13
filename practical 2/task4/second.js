const generateGreeting = (name = "Guest", role = "Visitor", location = "Unknown") =>
  `Hello ${name}! Your role is ${role} and you are currently in ${location}.`;

console.log(generateGreeting("Madhura", "Student", "Mumbai"));
console.log(generateGreeting("Ravi", "Engineer"));
console.log(generateGreeting("Sara"));
console.log(generateGreeting());

