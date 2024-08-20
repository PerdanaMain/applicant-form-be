-- DropForeignKey
ALTER TABLE `pekerjaan` DROP FOREIGN KEY `Pekerjaan_biodataId_fkey`;

-- DropForeignKey
ALTER TABLE `pelatihan` DROP FOREIGN KEY `Pelatihan_biodataId_fkey`;

-- DropForeignKey
ALTER TABLE `pendidikan` DROP FOREIGN KEY `Pendidikan_biodataId_fkey`;

-- AddForeignKey
ALTER TABLE `Pendidikan` ADD CONSTRAINT `Pendidikan_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`biodataId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pelatihan` ADD CONSTRAINT `Pelatihan_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`biodataId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pekerjaan` ADD CONSTRAINT `Pekerjaan_biodataId_fkey` FOREIGN KEY (`biodataId`) REFERENCES `Biodata`(`biodataId`) ON DELETE CASCADE ON UPDATE CASCADE;
