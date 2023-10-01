-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `cs_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cs_email` VARCHAR(191) NOT NULL,
    `cs_mobile` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Customer_cs_email_key`(`cs_email`),
    PRIMARY KEY (`cs_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
