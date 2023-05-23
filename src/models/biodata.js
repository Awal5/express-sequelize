const { Sequelize } = require("sequelize");
const db = require("../config/database");

const DataTypes = Sequelize;

const Biodata = db.define(
  "biodata",
  {
    nama: { type: DataTypes.STRING, allowNull: false },
    tempatLahir: { type: DataTypes.STRING, allowNull: false },
    tanggalLahir: { type: DataTypes.DATEONLY, allowNull: false },
    alamat: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Biodata;

try {
  db.sync()
    .then(() => {
      console.log("Table Created");
    })
    .catch((e) => {
      console.log("Create Table Error: ", e);
    });
} catch (e) {
  console.log("Error", e);
}
