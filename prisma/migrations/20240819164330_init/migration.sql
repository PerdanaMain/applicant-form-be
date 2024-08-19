-- CreateTable
CREATE TABLE `Biodata` (
    `biodataId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `noKtp` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` DATETIME(3) NOT NULL,
    `jenisKelamin` VARCHAR(191) NOT NULL,
    `agama` VARCHAR(191) NOT NULL,
    `golonganDarah` VARCHAR(191) NOT NULL,
    `statusPerkawinan` VARCHAR(191) NOT NULL,
    `alamatKtp` VARCHAR(191) NOT NULL,
    `alamatTinggal` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `noTelpon` VARCHAR(191) NOT NULL,
    `skill` VARCHAR(191) NOT NULL,
    `bersediaDitempatkan` BOOLEAN NOT NULL,
    `expectedSalary` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Biodata_email_key`(`email`),
    PRIMARY KEY (`biodataId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pendidikan` (
    `pendidikanId` INTEGER NOT NULL AUTO_INCREMENT,
    `biodataId` INTEGER NOT NULL,
    `jenjang` VARCHAR(191) NOT NULL,
    `namaInstitusi` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `tahunLulus` VARCHAR(191) NOT NULL,
    `nilaiAkhir` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`pendidikanId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pelatihan` (
    `pelatihanId` INTEGER NOT NULL AUTO_INCREMENT,
    `biodataId` INTEGER NOT NULL,
    `namaPelatihan` VARCHAR(191) NOT NULL,
    `sertifikat` BOOLEAN NOT NULL,
    `tahun` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`pelatihanId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pekerjaan` (
    `pekerjaanId` INTEGER NOT NULL AUTO_INCREMENT,
    `biodataId` INTEGER NOT NULL,
    `namaPerusahaan` VARCHAR(191) NOT NULL,
    `posisi` VARCHAR(191) NOT NULL,
    `pendapatan` VARCHAR(191) NOT NULL,
    `tahun` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`pekerjaanId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pendidikan` ADD CONSTRAINT `Pendidikan_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`biodataId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pelatihan` ADD CONSTRAINT `Pelatihan_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`biodataId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pekerjaan` ADD CONSTRAINT `Pekerjaan_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`biodataId`) ON DELETE RESTRICT ON UPDATE CASCADE;
