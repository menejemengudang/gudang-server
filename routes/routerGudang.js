const router = require('express').Router(),
    gudangController = require('../controller/gudangController')

router.get('/all', gudangController.all)
router.get('/edit/:id', gudangController.getedit)
router.post('/edit/:id', gudangController.edit)
router.post('/add', gudangController.add)
router.delete('/remove/:id', gudangController.remove)








module.exports = router