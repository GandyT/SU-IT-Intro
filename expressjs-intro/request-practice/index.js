const express = require('express')
const app = express()

const port = 8000

const data = {
    property: {
        value: "this is the value of the property of an object (an object is like a python dictionary)"
    }
}

// middleware
app.use(express.json())

app.get("/api/getdata", (request, response) => {
    response.send(data)
})

app.post("/api/updatedata", (request, response) => {
    if (!request.body.value) {
        return response.send({ success: false })
    }
    
    data.property.value = request.body.value

    response.send({ success: true })
})

app.listen(port, () => { console.log(`App is listening on port ${port}`)})