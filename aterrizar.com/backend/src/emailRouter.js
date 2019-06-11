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




router.get('/:reserva', async (req, res) => {
    
    try{
        let detallereserva
        const dreser = await vuelosDAO.getreserva(req)
        console.log(dreser)

        const rtoDetalle = await vuelosDAO.detallesreserva(req)
        detallereserva.json(rtoDetalle)
    
        console.log(detallereserva)

    const info = await smtpTransport.sendMail({
    from: '"Aterrizar.com " <info@aterrizar.com>', // sender address
    to: `'${dreser}'`, // list of receivers
    subject: "Detalles de la Reserva", // Subject line
    html: `<b> Detalle de reserva </b> '${detallereserva}'` // html body
  })
    res.json(info)}
  catch (err){
      res.json(err)
  }
console.log("Message sent: %s", res.messageId);
})


module.exports = router
