-- CreateTable
CREATE TABLE `User` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `roleId` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `refreshToken` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `roleId` INTEGER NOT NULL AUTO_INCREMENT,
    `roleName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`roleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Biodata` (
    `biodataId` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `posisi` VARCHAR(191) NOT NULL,
    `noKtp` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` VARCHAR(191) NOT NULL,
    `jenisKelamin` VARCHAR(191) NOT NULL,
    `agama` VARCHAR(191) NOT NULL,
    `golonganDarah` VARCHAR(191) NOT NULL,
    `statusPerkawinan` VARCHAR(191) NOT NULL,
    `alamatKtp` VARCHAR(191) NOT NULL,
    `alamatTinggal` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `noTelpon` VARCHAR(191) NOT NULL,
    `orangTerdekat` VARCHAR(191) NOT NULL,
    `skill` VARCHAR(191) NOT NULL,
    `bersediaDitempatkan` BOOLEAN NOT NULL,
    `expectedSalary` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Biodata_userId_key`(`userId`),
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
    `nilaiAkhir` INTEGER NOT NULL,
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
    `pendapatan` INTEGER NOT NULL,
    `tahun` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`pekerjaanId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`roleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Biodata` ADD CONSTRAINT `Biodata_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pendidikan` ADD CONSTRAINT `Pendidikan_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`biodataId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pelatihan` ADD CONSTRAINT `Pelatihan_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`biodataId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pekerjaan` ADD CONSTRAINT `Pekerjaan_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`biodataId`) ON DELETE RESTRICT ON UPDATE CASCADE;
