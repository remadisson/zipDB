import express from "express";

export const zipRoute = express.Router();

zipRoute.get('/', (req, res) => {
    res.send({
        status: 200,
        message: "You arrived in the zipCode section!"
    })
});