const { body } = require("express-validator");

const biodataValidator = [
  body("nama").notEmpty().withMessage("Nama harus diisi"),
  body("posisi").notEmpty().withMessage("Posisi harus diisi"),
  body("noKtp").notEmpty().withMessage("No KTP harus diisi"),
  body("tempatLahir").notEmpty().withMessage("Tempat lahir harus diisi"),
  body("tanggalLahir").notEmpty().withMessage("Tanggal lahir harus diisi"),
  body("jenisKelamin").notEmpty().withMessage("Jenis kelamin harus diisi"),
  body("agama").notEmpty().withMessage("Agama harus diisi"),
  body("golonganDarah").notEmpty().withMessage("Golongan darah harus diisi"),
  body("statusPerkawinan")
    .notEmpty()
    .withMessage("Status perkawinan harus diisi"),
  body("alamatKtp").notEmpty().withMessage("Alamat KTP harus diisi"),
  body("alamatTinggal").notEmpty().withMessage("Alamat tinggal harus diisi"),
  body("email").notEmpty().withMessage("Email harus diisi"),
  body("noTelpon").notEmpty().withMessage("No Telpon harus diisi"),
  body("orangTerdekat").notEmpty().withMessage("Orang terdekat harus diisi"),
  body("skill").notEmpty().withMessage("Skill harus diisi"),
  body("bersediaDitempatkan")
    .notEmpty()
    .withMessage("Bersedia ditempatkan harus diisi"),
  body("expectedSalary").notEmpty().withMessage("Expected salary harus diisi"),
  body("pendidikan").notEmpty().withMessage("Pendidikan harus diisi"),
  body("pelatihan").notEmpty().withMessage("Pelatihan harus diisi"),
  body("pekerjaan").notEmpty().withMessage("Pekerjaan harus diisi"),
];

module.exports = biodataValidator;
