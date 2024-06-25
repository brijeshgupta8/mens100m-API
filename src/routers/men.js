
const express= require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

// POST request to add a new mens ranking
router.post('/mens', async (req, res) => {
    try {
        const mensRanking = new MensRanking(req.body);
        console.log(req.body);
        await mensRanking.save();
        res.status(201).send(mensRanking);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/mens', async (req, res) => {
    try {
        const mensRankings = await MensRanking.find().sort({ rankings: 1 });
        res.send(mensRankings);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET request to fetch data of an individual mens ranking by ID
router.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const mensRanking = await MensRanking.findById(_id);
        res.send(mensRanking);
    } catch (error) {
        res.status(400).send(error);
    }
});

// PATCH request to update a mens ranking by ID
router.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const mensRanking = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(mensRanking);
    } catch (error) {
        res.status(500).send(error);
    }
});

// DELETE request to delete a mens ranking by ID
router.delete('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const mensRanking = await MensRanking.findByIdAndDelete(_id);
        res.send(mensRanking);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;