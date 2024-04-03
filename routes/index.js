const router = require('express').Router();
const htmlRoute = require('./htmlRoute.js');
const notesRoute = require('./notesRoute.js');

router.use(htmlRoute);
router.use(notesRoute);

module.exports = router;