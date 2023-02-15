const express = require('express');
const router = express.Router();
var path = require('path');




router.get('/about', (req, res, next) => {
  authenticated = req.cookies.authenticated;
  // res.render('canvas');
  res.render('about');

});
router.get('/contact', (req, res, next) => {
  authenticated = req.cookies.authenticated;
  // res.render('canvas');
  res.render('contact');

});
router.get('/Blog1', (req, res, next) => {
  authenticated = req.cookies.authenticated;
  // res.render('canvas');
  res.render('Blog1');

});
router.get('/Blog2', (req, res, next) => {
  authenticated = req.cookies.authenticated;
  // res.render('canvas');
  res.render('Blog2');

});
router.get('/Blog3', (req, res, next) => {
  authenticated = req.cookies.authenticated;
  // res.render('canvas');
  res.render('Blog3');

});

router.get('/*', (req, res, next) => {
  authenticated = req.cookies.authenticated;
  // res.render('canvas');
  res.render('index');

});


module.exports = router;
