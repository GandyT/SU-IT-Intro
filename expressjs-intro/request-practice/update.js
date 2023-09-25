/* nodejs server does not have fetch. Must be installed as a library */
const fetch = require('node-fetch')

const getUrl = 'http://localhost:8000/api/getdata'
const postUrl = 'http://localhost:8000/api/updatedata'

/* REFERENCE FUNCTION. do not run this, just look at it. */
const run = async () => {
  const data = await fetch(getUrl)
  const response = await data.json()

  console.log(response)

  await fetch(postUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: 'New and updated value' }),
  })

  const newData = await fetch(getUrl)
  const newResponse = await newData.json()

  console.log(newResponse)
}

const updateData = async () => {
  const data = await fetch(getUrl)
  const json = await data.json()
  console.log(json.property.value)

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value: 'Hello World' }),
  }

  await fetch(postUrl, options)

  const newData = await fetch(getUrl)
  const newJson = await newData.json()
  console.log(newJson.property.value)

  /* FETCH DATA FROM SERVER + PRINT IT OUT */
  /* UPDATE DATA IN SERVER WITH WHATEVER VALUE YOU WANT */
  /* FETCH DATA AGAIN AND PRINT IT OUT */
}

updateData()
