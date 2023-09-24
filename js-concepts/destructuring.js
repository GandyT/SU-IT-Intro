const values = ["First Value", "Second Value"]
// converts each value in the list into a distinct variable
const [firstValue, secondValue] = values;

console.log(firstValue) // "First Value"
console.log(secondValue) // "Second Value"

// can destructure objects as well
const object = { 
    name: "Randy", 
    age: 16 
}

// converts each property into a distinct variable
const { name, age } = object
console.log(name) // "Randy"
console.log(age) // 16