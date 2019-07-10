var mongoose = require('mongoose');
var Schema = mongoose.Schema;
console.log('masok model gudang')
var gudangSchema = new Schema({


    penyedia: {
        type: String,
        required: true
    },
    perusahaan: {
        type: String,
        required: true
    },
    kelompok: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    tanggalTanam: {
        type: String,
        required: true
    },
    tanggalPanen: {
        type: String,
        required: true
    },
    lokasiPenanaman: {
        type: String,
        required: true
    },
    suratJalan: {
        type: String,
        required: true
    },
    kelayakan: {
        type: String,
        required: true
    },
    kadarAir: {
        type: String,
        required: true
    },
    gradeBenih: {
        type: String,
        required: true
    },
    labelSertifikasi: {
        type: String,
        required: true
    },


});

let Gudang = mongoose.model('Gudangs', gudangSchema)


module.exports = Gudang