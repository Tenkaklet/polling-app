const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const mongoose = require('mongoose');
const Vote = require('../models/Vote');

var pusher = new Pusher({
    appId: '466268',
    key: 'fa2dbab3881a2a3637b9',
    secret: '13027e4ee1a9a232d8bc',
    cluster: 'eu',
    encrypted: true
});

router.get('/', (req, res) => {
    Vote.find().then(votes => {
        res.json({success: true, votes: votes});
    });
});

router.post('/', (req, res) => {

    const newVote = {
        os: req.body.os,
        points: 1
    };

    new Vote(newVote).save().then(vote => {
        pusher.trigger('os-poll', 'os-vote', {
            points: parseInt(vote.points),
            os: vote.os
        });
    });


    return res.json({
        success: true,
        message: 'Thank you for voting'
    });
});


module.exports = router;