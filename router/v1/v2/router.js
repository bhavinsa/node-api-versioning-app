const express = require('express');
const router2 = express.Router();

// middleware that is specific to this router
router2.use(function timeLog(req, res, next) {
    console.log('V2 Time: ', Date.now())
    next()
})

router2.get('/rides', (req, res) => {
    res.send('v2/rides');
});

module.exports = router2