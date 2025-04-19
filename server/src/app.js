/* const express = require('express')
const bodyParser = require('body-parser') // to process json data easily
const cors = require('cors') // accessibility from any domain
const morgan = require('morgan') // logs */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: `Hi ${req.body.email}, You're registered !`,
    })
})

app.listen(process.env.PORT || 8081)
//console.log(process.env.PORT)