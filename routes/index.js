let express = require('express');
let router = express.Router();
// Temporary sample data for frontend testing only
let Spotlist = [
  {
    location: 'Library',
    noiseLevel: 'Low',
    crowdLevel: 'Medium',
powerOutlets: 'Lots'
  },
  {
    location: 'Student Centre',
    noiseLevel: 'Medium',
    crowdLevel: 'High',
powerOutlets: 'None'
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', Spotlist: Spotlist });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', Spotlist: Spotlist });
});
/* GET About page. */
router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'About us', Spotlist: Spotlist });
});
/* GET Products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products', Spotlist: Spotlist });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', Spotlist: Spotlist });
});
/* GET Contact us page. */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact us', Spotlist: Spotlist });
});

module.exports = router;
