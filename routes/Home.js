const hometoken = require('../middleware/auth');

const router = require('express').Router();
router.get('/',hometoken , (req,res)=>{
    res.status(200).json({
        message: "Access granted",
        user: {
            id : req.user.id,
            email : req.user.email
        }
    })
})

module.exports = router;