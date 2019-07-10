const Model = require('../models/gudang')
const bcrypt = require('bcrypt');
const jwt = require('../helper/jwt'),
    whiteSpace = require('../helper/whiteSpace')


const axios = require('axios')

class Controller {

    static edit(req, res) {
        // let validasi = jwt.verify(req.headers.token)
        // console.log(req.body);

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
        console.log('ini ninini')
        var obj = {
            penyedia: req.body.penyedia,
            perusahaan: req.body.perusahaan,
            kelompok: req.body.kelompok,
            volume: req.body.volume,
            tanggalTanam: req.body.tanggalTanam,
            tanggalPanen: req.body.tanggalPanen,
            lokasiPenanaman: req.body.lokasiPenanaman,
            suratJalan: req.body.suratJalan,
            kelayakan: req.body.kelayakan,
            kadarAir: req.body.kadarAir,
            gradeBenih: req.body.gradeBenih,
            labelSertifikasi: req.body.labelSertifikasi
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