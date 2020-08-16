const express = require('express')
const ClubList = require('../models/club-list')
const router = express.Router();


// Route For Adding The Clubs --> Specifically To CC Members
router.post('/addclub', async (req, res) => {
    try {
        // Adding Status Based on User's Preference ID

        // End (Temp Changes)
        const {name} = req.body
        var alternationadd ;
        if (name != null){
            alternationadd = new ClubList({name})
            await alternationadd.save();
            res.send(alternationadd)
        }else {
            res.send(`The Name Cannot be Blank`)
        }
    } catch (e) {
        console.log(e);
        res.send(e);
    }
})

module.exports = router;