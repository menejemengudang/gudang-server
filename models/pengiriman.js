var mongoose = require('mongoose');
var Schema = mongoose.Schema;
console.log('masok model')
var pengirimanSchema = new Schema({


    noInduk: {
        type: String,
        required: true
    },
    tahunProduksi: {
        type: String,
        required: true
    },
    varietas: {
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
    tujuan: {
        type: String,
        required: true
    },
    provinsi: {
        type: String,
        required: true
    },
    kabupaten: {
        type: String,
        required: true
    },
    kecamatan: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    nomorSertifikat: {
        type: String,
        required: true
    },
    tanggalSertifikat: {
        type: String,
        required: true
    },
    tanggalKedaluarsa: {
        type: String,
        required: true
    },
    instansi: {
        type: String,
        required: true
    },
    tanggalPengiriman: {
        type: String,
        required: true
    },
    supir: {
        type: String,
        required: true
    },
    plat: {
        type: String,
        required: true
    }
});

let Pengiriman = mongoose.model('pengirimans', pengirimanSchema)


module.exports = Pengiriman