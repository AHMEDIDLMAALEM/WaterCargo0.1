-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `BC_public_key` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `role` ENUM('USER', 'ADMIN', 'DRIVER') NOT NULL DEFAULT 'USER',
    `dateOfBirth` DATETIME(3) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `status` ENUM('ONLINE', 'ACTIVE', 'OFFLINE') NOT NULL DEFAULT 'ACTIVE',

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_BC_public_key_key`(`BC_public_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Language` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` ENUM('ENGLISH', 'FRENCH', 'ARABIC', 'AMAZIGH_TACHELHIT', 'AMAZIGH_TAMAZIGHT', 'AMAZIGH_TARIFIT', 'ARABIC_SAHARAUI') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserLanguage` (
    `userId` VARCHAR(191) NOT NULL,
    `languageId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `languageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserLanguage` ADD CONSTRAINT `UserLanguage_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserLanguage` ADD CONSTRAINT `UserLanguage_languageId_fkey` FOREIGN KEY (`languageId`) REFERENCES `Language`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
