let person = {
    name: "Randy",
    age: 16
}

console.log(person.name) // -> "Randy"
console.log(person["name"]) // -> "Randy"

person.name = "David"

console.log(person.name) // -> "David"