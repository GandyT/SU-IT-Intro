/* nodejs server does not have fetch. Must be installed as a library */
const fetch = require("node-fetch")

const getUrl = "http://localhost:8000/api/getdata"
const postUrl = "http://localhost:8000/api/updatedata"

/* REFERENCE FUNCTION. do not run this, just look at it. */
const run = async () => {
    const data = await fetch(getUrl)
    const response = await data.json()

    console.log(response)

    await fetch(
        postUrl, 
        { 
            method: "POST", 
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify({ value: "New and updated value"})
        }
    )

    const newData = await fetch(getUrl)
    const newResponse = await newData.json()

    console.log(newResponse)
}

const updateData = async () => {
    try {
        const getData = await fetch(getUrl);
        const initialResponse = await getData.json();
        console.log("Initial Data:", initialResponse);

        const newValue = "New and updated value";
        await fetch(postUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ value: newValue }),
        });

        const updatedData = await fetch(getUrl);
        const updatedResponse = await updatedData.json();
        console.log("Updated Data:", updatedResponse);
    } catch (error) {
        console.error("Error:", error);
    }
}

updateData();
