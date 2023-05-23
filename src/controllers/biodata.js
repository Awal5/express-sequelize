const Biodata = require("../models/biodata");

exports.getBiodata = async (req, res) => {
  try {
    const response = await Biodata.findAll();
    if (response.length <= 0) {
      return res.json({ message: "Biodata Kosong" });
    } else {
      res.status(200).json(response);
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getBiodataById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Biodata.findOne({ where: { id: id } });
    if (!response)
      return res.status(404).json({ message: "Biodata tidak ditemukan" });
    res.status(200).json(response);
  } catch (e) {
    res.json({ message: e.message });
  }
};

exports.createBiodata = async (req, res) => {
  const nama = req.body.nama;
  const tempatLahir = req.body.tempatLahir;
  const tanggalLahir = req.body.tanggalLahir;
  const alamat = req.body.alamat;

  try {
    if (!nama) return res.status(422).json({ message: "Name Required" });
    if (!tempatLahir)
      return res.status(422).json({ message: "Tempat Lahir Required" });
    if (!tanggalLahir)
      return res.status(422).json({ message: "Tanggal Lahir Required" });
    if (!alamat) return res.status(422).json({ message: "Alamat Required" });

    await Biodata.create({
      nama: nama,
      tempatLahir: tempatLahir,
      tanggalLahir: tanggalLahir,
      alamat: alamat,
    });
    res.status(201).json({ message: "Biodata Dibuat" });
  } catch (e) {
    res.json({ message: e.message });
  }
};

exports.updateBiodata = async (req, res) => {
  const { id } = req.params;
  try {
    await Biodata.update(req.body, { where: { id: id } });
    res.status(200).json({ message: "Biodata di Update" });
  } catch (e) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBiodata = async (req, res) => {
  const { id } = req.params;
  try {
    await Biodata.destroy({ where: { id: id } });
    res.status(200).json({ message: "Biodata dihapus" });
  } catch (e) {
    res.status(500).json({ error: error.message });
  }
};
