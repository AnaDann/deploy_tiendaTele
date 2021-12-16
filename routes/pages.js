var express = require('express');
var router = express.Router();

//Get page model
var Page = require('../models/page');

/*
*  GET /
*/
/*
*  GET /
*/
/*router.get('/',function(req,res){
  
    Page.findOne({slug: 'inicio'}, function (err, page) {
        if (err)
            console.log(err);
 
            res.render('index', {
                title: page.title,
                content: page.content
            });        
      });
});
muchooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo ojo0000000000000000000000000000000
*/    
router.get('/', function (req, res) {
    
    Page.findOne({slug: 'home'}, function (err, page) {
        if (err)
            console.log(err);

        res.render('index', {
            title: page.title,
            content: page.content
        });
    });
    
});

/*
 * GET a page
 */
router.get('/:slug', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({slug: slug}, function (err, page) {
        if (err)
            console.log(err);
        
        if (!page) {
            res.redirect('/');
        } else {
            res.render('index', {
                title: page.title,
                content: page.content
            });
        }
    });

    
});


// Exports
module.exports = router;
