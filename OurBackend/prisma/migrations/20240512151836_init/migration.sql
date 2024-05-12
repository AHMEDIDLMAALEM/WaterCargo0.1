-- CreateTable
CREATE TABLE `Vehicle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `plate` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `cargo` BOOLEAN NOT NULL,
    `trailer` BOOLEAN NOT NULL,
    `trailingCapacity` INTEGER NOT NULL,
    `status` ENUM('ONLINE', 'ACTIVE', 'OFFLINE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `driverId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CargoVolume` (
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `length` INTEGER NOT NULL,
    `vehicleId` INTEGER NOT NULL,

    UNIQUE INDEX `CargoVolume_vehicleId_key`(`vehicleId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CargoVolume` ADD CONSTRAINT `CargoVolume_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
