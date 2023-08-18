import fs from "fs"
import dotenv from "dotenv"

if (fs.existsSync(".env.local")) dotenv.config({ path: ".env.local" })
else dotenv.config()

console.log(process.env)
