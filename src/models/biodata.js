const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create = async (userId, data) => {
  return prisma.biodata.create({
    data: {
      userId,
      nama: data.nama,
      posisi: data.posisi,
      noKtp: data.noKtp,
      tempatLahir: data.tempatLahir,
      tanggalLahir: data.tanggalLahir,
      jenisKelamin: data.jenisKelamin,
      agama: data.agama,
      golonganDarah: data.golonganDarah,
      statusPerkawinan: data.statusPerkawinan,
      alamatKtp: data.alamatKtp,
      alamatTinggal: data.alamatTinggal,
      email: data.email,
      noTelpon: data.noTelpon,
      orangTerdekat: data.orangTerdekat,
      skill: data.skill,
      bersediaDitempatkan: data.bersediaDitempatkan,
      expectedSalary: data.expectedSalary,
      Pelatihan: {
        createMany: {
          data: data.pelatihan.map((item) => ({
            namaPelatihan: item.namaPelatihan,
            sertifikat: item.sertifikat,
            tahun: item.tahun,
          })),
        },
      },
      Pendidikan: {
        createMany: {
          data: data.pendidikan.map((item) => ({
            jenjang: item.jenjang,
            namaInstitusi: item.namaInstitusi,
            jurusan: item.jurusan,
            tahunLulus: item.tahunLulus,
            nilaiAkhir: item.nilaiAkhir,
          })),
        },
      },
      Pekerjaan: {
        createMany: {
          data: data.pekerjaan.map((item) => ({
            namaPerusahaan: item.namaPerusahaan,
            posisi: item.posisi,
            pendapatan: item.pendapatan,
            tahun: item.tahun,
          })),
        },
      },
    },
  });
};

const update = (biodataId, data) => {
  return prisma.biodata.update({
    where: {
      biodataId,
    },
    data: {
      nama: data.nama,
      posisi: data.posisi,
      noKtp: data.noKtp,
      tempatLahir: data.tempatLahir,
      tanggalLahir: data.tanggalLahir,
      jenisKelamin: data.jenisKelamin,
      agama: data.agama,
      golonganDarah: data.golonganDarah,
      statusPerkawinan: data.statusPerkawinan,
      alamatKtp: data.alamatKtp,
      alamatTinggal: data.alamatTinggal,
      email: data.email,
      noTelpon: data.noTelpon,
      orangTerdekat: data.orangTerdekat,
      skill: data.skill,
      bersediaDitempatkan: data.bersediaDitempatkan,
      expectedSalary: data.expectedSalary,
      Pelatihan: {
        deleteMany: {
          biodataId,
        },
        createMany: {
          data: data.pelatihan.map((item) => ({
            namaPelatihan: item.namaPelatihan,
            sertifikat: item.sertifikat,
            tahun: item.tahun,
          })),
        },
      },
      Pendidikan: {
        deleteMany: {
          biodataId,
        },
        createMany: {
          data: data.pendidikan.map((item) => ({
            jenjang: item.jenjang,
            namaInstitusi: item.namaInstitusi,
            jurusan: item.jurusan,
            tahunLulus: item.tahunLulus,
            nilaiAkhir: item.nilaiAkhir,
          })),
        },
      },
      Pekerjaan: {
        deleteMany: {
          biodataId,
        },
        createMany: {
          data: data.pekerjaan.map((item) => ({
            namaPerusahaan: item.namaPerusahaan,
            posisi: item.posisi,
            pendapatan: item.pendapatan,
            tahun: item.tahun,
          })),
        },
      },
    },
    include: {
      Pelatihan: true,
      Pendidikan: true,
      Pekerjaan: true,
    },
  });
};

const destroy = (biodataId) => {
  return prisma.biodata.delete({
    where: {
      biodataId,
    },
  });
};

const getBiodataByUserId = async (userId) => {
  return prisma.biodata.findMany({
    where: {
      userId,
    },
    include: {
      Pelatihan: true,
      Pendidikan: true,
      Pekerjaan: true,
    },
  });
};

const getAllBiodata = () => {
  return prisma.biodata.findMany({
    include: {
      Pelatihan: true,
      Pendidikan: true,
      Pekerjaan: true,
    },
  });
};

module.exports = {
  create,
  getBiodataByUserId,
  getAllBiodata,
  update,
  destroy,
};
