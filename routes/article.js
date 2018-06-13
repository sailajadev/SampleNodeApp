const express = require('express')
const router = express.Router();

router.put('/createArticle', function(err, res){
	res.send({"message": "successfully routed to create article"})
})

router.get('/listArticles', function(err, res){
	res.send({"message": "successfully routed to list articles"})
})

router.post('/rateArticle', function(err, res){
	res.send({"message": "successfully routed to rate an article"})
})

module.exports = router;
