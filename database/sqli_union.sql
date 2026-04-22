
DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `category` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `products` WRITE;

INSERT INTO `products` VALUES
('fruits','Banana','A banana is a long, curved fruit with a yellow peel and soft, sweet flesh inside. It grows in clusters on tropical plants and is rich in potassium, fiber, and vitamins. Bananas are commonly eaten raw, added to desserts, or used in smoothies'),
('fruits','Apple','An apple is a round fruit with a smooth skin that can be red, green, or yellow, and a crisp, juicy flesh. It grows on apple trees and is rich in fiber and vitamin C. Apples are commonly eaten fresh, cooked in desserts, or made into juice'),
('vegetables','Carrot','Carrot - a root vegetable, usually orange in color, known for its sweet flavor and high vitamin A content. Commonly eaten raw, cooked, or in juices, it supports eye health and overall nutrition'),
('vegetables','Tomato','Tomato - a juicy, red fruit often treated as a vegetable, rich in vitamins C and K, commonly used in salads, sauces, and cooking for its fresh, tangy flavor'),
('vegetables','Potato','Potato - a starchy tuber, versatile in cooking, commonly boiled, baked, or fried, and a good source of carbohydrates, vitamin C, and potassium'),
('grains','Rice','Rice - a staple grain, usually white or brown, versatile in cooking, used in dishes worldwide, and a good source of carbohydrates and energy.'),
('grains','Oats','Oats - a whole grain known for its nutty flavor and high fiber content, commonly eaten as oatmeal, in granola, or baked goods, supporting heart health and digestion'),
('legumes','Beans','Beans - protein-rich legumes, versatile in cooking, commonly used in soups, stews, salads, and side dishes, providing fiber, vitamins, and plant-based protein');

UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `users` WRITE;

INSERT INTO `users` VALUES
('admin','MySuperPowerPassword321');

UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

