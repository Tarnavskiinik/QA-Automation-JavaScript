const users = [
  { name: "Piter", email: "piter@example.com", age: 30 },
  { name: "Lois", email: "lois@example.com", age: 28 },
  { name: "Stewie", email: "stewie@example.com", age: 1 }
];

for(let {name,email,age} of users){
    console.log(`name: ${name}, email: ${email}, age: ${age}`)
}