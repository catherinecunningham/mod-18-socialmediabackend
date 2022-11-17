const express = require('express')
const app = express()
const routes = require('./routes')
const db = require('./config/connection.js')
const PORT = process.env.PORT || 3001