const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('V1 Time: ', Date.now())
    next()
})

router.get('/rides', (req, res) => {
    res.send('v1/rides');
});

module.exports = router
