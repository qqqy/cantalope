const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

app.use(express.json())

// TEST ENDPOINTS //
app.get('/api/test' , (req, res) => res.sendStatus(200))
app.get('/api/dbtest', (req, res) => {
  let db = req.app.get('db')
  db.dbtest().then(reply => res.status(200).send(reply[0]))
})


massive(CONNECTION_STRING).then((connection) => {
  app.set('db' , connection)
  console.log('DB connection established')
})


app.listen(SERVER_PORT, () => {
  console.log('Server listening on port ', SERVER_PORT)
})