const express = require('express')
var nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const router = express.Router()
const vuelosDAO = require('./vuelosDAO_SQL')



var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "tp.sitiosvip",
        pass: "PaSSword123"
    }
});

router.get('/:id_reserva', async (req, res) => {
    
try{
    const mail = await vuelosDAO.getreserva(req)
    const rtoDetalle = await vuelosDAO.detallesreserva(req)


    const info = await smtpTransport.sendMail({
    from: '"Aterrizar.com " <info@aterrizar.com>', // sender address
    to: `${mail[0].mail_pax}`, // list of receivers
    subject: "Detalles de la Reserva", // Subject line
    html: `<b> '${rtoDetalle[0].nombre_pax}' </b>` // html body
  })
    res.json(info)}
  catch (err){
      res.json(err)
  }
})


module.exports = router
