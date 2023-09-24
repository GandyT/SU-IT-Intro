function helloRegularFunction(name) {
	console.log(`Regular Function - ${name}`)
}

var helloArrowFunction = (name) => {
	console.log(`Arrow Function - ${name}`)
}

function runFunction(func) {
	func("SU IT")
}

runFunction(helloRegularFunction) // helloRegularFunction() - prints "Regular Function - SU IT"
runFunction((name) => { console.log(`Inline Arrow Function - ${name}`) }) // runs the arrow function - prints "Inline Arrow Function - SU IT"