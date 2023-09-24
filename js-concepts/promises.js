// this function resolves a promise after 2000ms with a javascript object containing some data.
function promiseTest() {
    return new Promise((resolve, reject) => {
        console.log("Waiting 2000ms to resolve the promise")
        setTimeout(() => { resolve({ data: "Data I want to return" })}, 2000)
    });
}

/* 
promiseTest()
    .then(object => {
        console.log(object)
        console.log("Promise has been resolved!")
    })
*/

async function asyncFunction() {
    const object = await promiseTest()
    console.log(object)
    console.log("Promise has been resolved.")
}

asyncFunction()