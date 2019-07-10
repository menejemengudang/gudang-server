const Model = require('../models/pengiriman')
const bcrypt = require('bcrypt');
const jwt = require('../helper/jwt'),
    whiteSpace = require('../helper/whiteSpace')


const axios = require('axios')

class Controller {

    static edit(req, res) {
        // let validasi = jwt.verify(req.headers.token)
        // console.log(req.body);
        console.log('ini lo editnya');

        Model.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
                new: true
            })
            .then(data => {
                res.status(200).json(data)
                console.log(data);

            })

            .catch(function (err) {
                res.status(500).json({
                    messege: err.message
                })
            })

    }


    static getedit(req, res) {


        Model.find({
            _id: req.params.id
        })

            .then(function (data) {

                console.log(data)
                res.status(200).json(data)
            })
            .catch(function (err) {
                res.status(500).json({
                    messege: 'not fond'
                })
            })
    }
    static add(req, res) {
        var obj = {
            noInduk: req.body.noInduk,
            tahunProduksi: req.body.tahunProduksi,
            varietas: req.body.varietas,
            lot: req.body.lot,
            produsen: req.body.produsen,
            tujuan: req.body.tujuan,
            provinsi: req.body.provinsi,
            kabupaten: req.body.kabupaten,
            kecamatan: req.body.kecamatan,
            volume: req.body.volume,
            nomorSertifikat: req.body.nomorSertifikat,
            tanggalSertifikat: req.body.tanggalSertifikat,
            tanggalKedaluarsa: req.body.tanggalKedaluarsa,
            instansi: req.body.instansi,
            tanggalPengiriman: req.body.tanggalPengiriman,
            supir: req.body.supir,
            plat: req.body.plat

        }
        console.log(obj);
        Model.create(obj)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                // console.log('masok eror ni')
                res.status(500).json({
                    messege: err.message
                })
            })
    }
    static all(req, res) {
        Model.find({})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    messege: err.message
                })
            })
    }
    static remove(req, res) {

        // console.log('masok delete', req.params.id);

        Model.findByIdAndDelete(req.params.id)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({
                    messege: err.message
                })
            })
    }

}

module.exports = Controller