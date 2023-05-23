const express = require("express");
const {
  getBiodata,
  getBiodataById,
  createBiodata,
  updateBiodata,
  deleteBiodata,
} = require("../controllers/biodata");

const router = express.Router();

router.get("/", getBiodata);
router.get("/:id", getBiodataById);
router.post("/create", createBiodata);
router.patch("/:id/update", updateBiodata);
router.delete("/:id/delete", deleteBiodata);

module.exports = router;
