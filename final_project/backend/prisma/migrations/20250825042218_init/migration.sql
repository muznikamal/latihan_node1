/*
  Warnings:

  - You are about to drop the `datasiswa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `datasiswa`;

-- CreateTable
CREATE TABLE `databarang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_barang` VARCHAR(191) NOT NULL,
    `stok` INTEGER NOT NULL,
    `harga` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
