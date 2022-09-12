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
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Message Board', messages, formatDate })
})

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message' })
})

router.post('/new', (req, res, next) => {
  messages.unshift({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  })

  res.redirect('/')
})
module.exports = router
