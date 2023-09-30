/* nodejs server does not have fetch. Must be installed as a library */
const fetch = require("node-fetch")

const getUrl = "http://localhost:8000/api/getdata"
const postUrl = "http://localhost:8000/api/updatedata"

/* REFERENCE FUNCTION. do not run this, just look at it. */
const run = async () => {
    /* FETCHES THE DATA */
    const data = await fetch(getUrl)
    const response = await data.json()

    console.log(response) // LOGS THE RESPONSE
    
    // CREATE A POST REQUEST updating the data
    await fetch(
        postUrl, 
        { 
            method: "POST", 
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify({ value: "New and updated value"})
        }
    )
    
    // create a get request to see the updated data
    const newData = await fetch(getUrl)
    const newResponse = await newData.json()
    
    // log the updated data into the console
    console.log(newResponse)
}

const updateData = async () => {
    /* FETCH DATA FROM SERVER + PRINT IT OUT */
    const data = await fetch(getUrl)
    const json = await data.json()
    console.log(json)
    
    /* UPDATE DATA IN SERVER WITH WHATEVER VALUE YOU WANT */
    const update =  {
        method: "POST", 
        headers: { "Content-Type": "application/json"}, 
        body: JSON.stringify({ value: "This is my new and final data! I love JS!"})
    }

    await fetch(postUrl, update)
    
    /* FETCH DATA AGAIN AND PRINT IT OUT */
    const newData = await fetch(getUrl)
    const newJSON = await newData.json()
    console.log(newJSON)
}

updateData()
