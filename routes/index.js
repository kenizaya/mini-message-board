var express = require('express')
const formatDate = require('date-fns/format')
var router = express.Router()

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages, formatDate })
})

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message' })
})
module.exports = router
