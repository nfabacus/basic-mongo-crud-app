// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID});
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID});
const router = vertex.router();

const Profile = require('../models/Profile');

/*  This is a sample API route. */
router.get('/profile',(req, res) => {
  // /profile?position=wr
  let filters = req.query; // comes in json format
  if(filters.age !=null){
    filters = {
      ...filters,
      age: {$gt: filters.age}
    }
  }

  Profile.find(filters) // general query like this is slower than like find by id like below.
    .then(profiles => {
      res.json({
        confirmation: 'success',
        data: profiles
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      })
    });
});

router.get('/profile/update', (req, res) => { // should use .put instead of get here.  But, this is just to show in browser.
  const query = req.query; // require: id, key=value
  const profileId = query.id;
  delete query['id'];

  Profile.findByIdAndUpdate(profileId, query, { new: true }) //{ new: true } will return the data after the update, not the original one.
    .then(profile => {
      res.json({
        confirmation: 'success',
        data: profile
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      });
    });
});

router.get('/profile/remove', (req, res) => {
  const query = req.query;
  Profile.findByIdAndRemove(query.id)
    .then(data => {
      res.json({
        confirmation: 'success',
        data: 'Profile ' + query.id + ' successfully removed.'
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      })
    })
});

router.get('/profile/:id', (req, res) => {
  const id = req.params.id;

  Profile.findById(id)
    .then(profile => {
      res.json({
        confirmation: 'success',
        data: profile
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: 'Profile ' + id + ' not found.'
      })
    });
});

router.post('/profile', (req, res) => {
  Profile.create(req.body)
    .then(profile => {
      res.json({
        confirmation: 'success',
        data: profile
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      })
    })
  // res.json({
  //   confirmation: 'success',
  //   data: req.body
  // });
});

module.exports = router;
