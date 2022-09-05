let express = require("express");
let router = express.Router();
//Ejecutamos una extencion de express donde enviara como enrutar al archivo server.js
router.get("/person", (req, res) => {
  res.send("has solicitado el distado de personas");
});

module.exports = router;
