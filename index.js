import express from "express"
import dotenv from "dotenv"
dotenv.config()
const port =process.env.PORT || 5000
import connectDb from "./config/db.js" 
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import geminiResponse from "./gemini.js"
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "https://virtualassistant-backend-5892.onrender.com",
  credentials: true
}));
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


app.listen(port,()=>{
    connectDb()
    console.log("server started",port);

})
