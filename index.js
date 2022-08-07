const expres = require('express') ;
const app = expres() ;
const port = 8080;
const apiRouter = require('./api-routes') ;

app.get("/" , (req,res) => {
    res.send('Selamat Datang Di Data Center Siswa Indonesia')
})

app.use("/DataSiswa", apiRouter);



app.listen( port, () => {
    console.log(`Server berjalan di port ${port}`)
})