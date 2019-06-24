var mongoose = require('mongoose');
var Schema = mongoose.Schema;
console.log('masok model')
var productSchema = new Schema({


    noInduk: {
        type: String,
        required: true
    },
    tahunProduksi: {
        type: String,
        required: true
    },
    jenis: {
        type: String,
        required: true
    },
    lot: {
        type: String,
        required: true
    },
    produsen: {
        type: String,
        required: true
    },
    alamatProdusen: {
        type: String,
        required: true
    },
    alamatTujuan: {
        type: String,
        required: true
    },

    tujuan: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    tanggalProduksi: {
        type: String,
        required: true
    },
    tanggalExp: {
        type: String,
        required: true
    },
    instansi: {
        type: String,
        required: true
    }

});

let Product = mongoose.model('Products', productSchema)


module.exports = Product