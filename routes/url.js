import express from "express";
import { getAnalytics, newshortUrl } from "../controllers/url.js";

const router = express.Router();


router.post("/", newshortUrl);
router.get("/analytics/:shortId", getAnalytics);


