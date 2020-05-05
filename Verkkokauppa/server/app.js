require("dotenv/config");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const crypto = require("crypto");
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

con.connect(function(err) {
  if (err) {
    console.log("Error:" + err.stack);
    process.exit(1);
  }
});

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Responding to root route");

  res.send("Hello from root");
});

app.get("/kategoria/:kategoria", (req, res) => {
  console.log("Haetaan kaikki astianpesukoneet " + req.params.kategoria);

  const kategoria = req.params.kategoria;
  const query = "SELECT * FROM tuote WHERE TUOTERYHMÄ = ?";

  con.query(query, [kategoria], (err, rows, fields) => {
    console.log("Kaikki astianpesukoneet haettu onnistuneesti");
    console.log(process.env.DB_HOST);
    res.json(rows);
  });
});

// Haetaan laitekoodit hakuvalikkoon
app.get("/laite_create", (req, res) => {
  con.query("SELECT TUOTENIMIKEID FROM tuote", (err, rows, fields) => {
    if (err) {
      console.log("TUOTENIMIKEID HAKU EI ONNISTUNUT" + err);
      res.sendStatus(500);
      return;
    }
    console.log("TUOTENIIMIKEID haettu onnistuneesti");
    res.json(rows);
  });
});


app.get("/hash/:string", (req, res) => {

  const secret = req.params.string;
  const hash = crypto
    .createHmac("sha256", secret)
    .update("I love cupcakes")
    .digest("hex");
  console.log(hash);
  res.json(hash);
});

app.get("/laitteet", (req, res) => {
  con.query("SELECT * FROM tuote", (err, rows, fields) => {
    if(err) {
      console.log("Ei tullu laitteet: " + err);
    }
    console.log("Kaitpa ne tuli");
    res.json(rows);
  });
});

app.listen(8081, () => {
  console.log("Server is up and listening on 8081...");
});

// Tässä käsitellään Testi.vuesta tuleva osoite ja lisätään sen erään jääkaapin osoitteen tilalle
app.post("/laite_create", (req, res) => {
  console.log("");
  console.log("www-osoite joka saatiin Testi.vuesta oli: " + req.body.osoite);

  // Lisätään Testi.vuesta tullut osoite muuttujaan
  const osoite = req.body.osoite;
  // Ensimmäisen jääkaapin TUOTENIMIKEID, voit tarkastella sen osoitteen muuttumista osoitteessa https://localhost:8081/laitteet (eka laite)
  const laiteid = req.body.laiteid;

  const myyntihinta = req.body.myyntihinta;

  // Päivitetään jääkaapin osoitetta
  const query = "UPDATE tuote SET WWW_OSOITE = (?), MYYNTIHINTA = (?) WHERE TUOTENIMIKEID = (?)";

  con.query(query, [osoite, myyntihinta, laiteid], (err, rows, fields) => {
    if (err) {
      console.log("Ei onnistunu www-osoitteen päivitys: " + err);
      res.sendStatus(500);
      return;
    }
    console.log("Onnistui lisäys.");
    res.json(rows);
  });
});
