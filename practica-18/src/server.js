let express = require("express");
let app = express();
let personsRoute = require("./routes/person"); //Ahora para tener un archivo server mas limpio se establece la ruta del archivo person el cual contendra una direccion a la cual se dirigira al iniciar el server

app.set("view engine", "ejs");
app.use(personsRoute); // Con este ejecutamos el enrutador
app.use("/assets", express.static(__dirname + "/public"));
var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("escuchando en el puerto 3000");
});
