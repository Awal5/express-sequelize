const express = require("express");
const cors = require("cors");
const db = require("./src/config/database");
const biodataRoute = require("./src/routes/biodata");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
db.authenticate()
  .then(() => {
    console.log("Database Connection Success");
  })
  .catch((e) => {
    console.log("Database Connection Error: ", e);
  });

app.use(biodataRoute);
app.listen(3000, () => {
  console.log("Koneksi Sukses");
});
