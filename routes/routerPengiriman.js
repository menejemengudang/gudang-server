const router = require('express').Router(),
    pengirimanController = require('../controller/pengirimanController')

router.get('/all', pengirimanController.all)
router.get('/edit/:id', pengirimanController.getedit)
router.post('/edit/:id', pengirimanController.edit)
router.post('/add', pengirimanController.add)
router.delete('/remove/:id', pengirimanController.remove)








module.exports = router