import express from "express"
import newOne from "./routes/url.js"
import connect from "./connect.js"
import Url from "./models/url.js"
const app = express()
const PORT = 8001

app.use(express.json())
app.use("/url",newOne)

app.get('/:shortId',async (req,res) =>{
    const shortId = req.params.shortId
    const entry = await Url.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory: {
            timestamp : Date.now()
        },
    }})

    res.redirect(entry.redirectUrl)
})

connect()


app.listen(PORT,()=> console.log(`Server started at PORT = ${PORT}`))

