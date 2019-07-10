const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'gudang';

const express = require('express'),
    app = express(),
    routerUser = require('./routes/routerUser'),
    routerProduct = require('./routes/routerProduct'),
    routerGudang = require('./routes/routerGudang'),
    routerPengiriman = require('./routes/routerPengiriman'),
    port = 3000,
    cors = require('cors'),
    mongoose = require('mongoose');
mongoose.set('findAndUpdate', false)
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true
})
// mongoose.connect('mongodb+srv://afitra:afitra@lamaran-anzh1.mongodb.net/test?retryWrites=true', {
//     useNewUrlParser: true
// })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extends: false
}))
app.use('/user', routerUser)
app.use('/product', routerGudang)
app.use('/pengiriman', routerPengiriman)


module.exports = app

app.listen(port, function () {
    console.log(`live on port ${port} ######*******`);
    console.log(`connect data base on ${dbName}  ######*******`);
})