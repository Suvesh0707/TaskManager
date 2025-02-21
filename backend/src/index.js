import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import xss from 'xss'
import cookieParser from 'cookie-parser'
dotenv.config({})

const app = express()

app.use(cors())
app.use(helmet())
app.use(xss())
app.use(express.json())
app.use(cookieParser())


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})