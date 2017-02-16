const express = require('express');
const router = express.Router();

router.post('/addBlock', (req, res) => {
    console.log(req.body);
});
router.post('/addUseName',(req,res) => {
    console.log(req.body);
})

module.exports = router;