import { nanoid } from "nanoid";
import Url from "../models/url.js"

export const newshortUrl = async function handleGenerateNewShortUrl(req,res){
    const body = req.body
    if(!body.url) return res.status(400).json({error:"URL is required"})
    const shortId = nanoid(8)
    await Url.create({
        shortId: shortId,
        redirectUrl:body.url,
        visitedHistory: [],
    })

    return res.json({id: shortId})
}

export const getAnalytics = async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await Url.findOne({shortId})
    return res.json({
        totalClicks : result.visitHistory.length,
        analytics: result.visitHistory
     })
}

