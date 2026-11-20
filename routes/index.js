let express = require('express');
let router = express.Router();
// Temporary sample data for frontend testing only
let Spotlist = [
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

router.get('/spots/add', function (req, res) {
  res.render('new-spot', { title: 'Report a Study Spot' });
});

router.post('/spots', function (req, res) {
  const { location, noiseLevel, crowdLevel, powerOutlets } = req.body;

  if (typeof location !== 'string' || location.trim() === '') {
    return res.status(400).send('Please enter a building and a specific spot.');
  }

  const levels = ['Low', 'Medium', 'High'];
  const outletOptions = ['None', 'Some', 'Lots'];

  if (!levels.includes(noiseLevel) ||
      !levels.includes(crowdLevel) ||
      !outletOptions.includes(powerOutlets)) {
    return res.status(400).send('Please select valid options for noise, crowd, and outlets.');
  }

  const lifetimeMs = 60 * 60 * 1000;

  const spot = {
    location: location.trim(),
    noiseLevel,
    crowdLevel,
    powerOutlets,
    expiresAt: Date.now() + lifetimeMs
  };

  Spotlist.push(spot);

  // Remove this exact report after 10 seconds.
  setTimeout(function () {
    const index = Spotlist.indexOf(spot);

    if (index !== -1) {
      Spotlist.splice(index, 1);
    }
  }, lifetimeMs);

    res.redirect(303, '/home');
});

module.exports = router;
