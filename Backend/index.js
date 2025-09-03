import express from 'express'
import dotenv from "dotenv"
import Dbconnect from './Db.js';
import { userRoutes } from './Routes/user.routes.js';
import { noteRoutes } from './Routes/note.routes.js';
import cors from "cors"

dotenv.config()

const PORT = process.env.PORT || 7000;
const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173", // frontend ka URL
    methods: ["GET", "POST", "PUT", "DELETE"], // allowed methods
    credentials: true // agar cookies / auth bhejna ho
  }));

userRoutes(app)
noteRoutes(app)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`)
})

Dbconnect()