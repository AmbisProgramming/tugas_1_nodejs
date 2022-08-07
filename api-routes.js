const express = require('express') ;
const router = express.Router();

router.get('/', (req,res) => {

    res.json({
        Nama : "Richard Muhammad" ,
        TanggalLahir : "14 Januari 1994",
        JenisKelamin : "Laki - Laki",
        Hobi : "Membaca Buku"
    })

}) ;

router.put('/', (req,res)=> {
    res.send('Request update masuk')
});

router.post('/', (req,res)=> {
    res.send('Request create masuk')
});

router.delete('/', (req,res)=> {
    res.send('Request delete masuk')
});

module.exports = router ;