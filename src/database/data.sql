-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-02-2024 a las 20:49:55
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `data`
--
CREATE DATABASE IF NOT EXISTS `data` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `data`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id_brand` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `name` varchar(255) NOT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id_brand`, `created_at`, `updated_at`, `name`, `deleted_at`) VALUES
(1, '2024-02-28 19:01:40', '2024-02-28 19:01:40', 'Overtech', NULL),
(2, '2024-02-28 19:03:39', '2024-02-28 19:03:39', 'Olmo', NULL),
(3, '2024-02-28 19:34:12', '2024-02-28 19:34:12', 'KTM', NULL),
(4, '2024-02-28 19:36:03', '2024-02-28 19:36:03', 'Top Mega', NULL),
(5, '2024-02-28 19:39:08', '2024-02-28 19:39:08', 'Venzo', NULL),
(6, '2024-02-28 19:40:52', '2024-02-28 19:40:52', 'Sin marca', NULL),
(7, '2024-02-28 19:42:20', '2024-02-28 19:42:20', 'Bulit', NULL),
(8, '2024-02-28 19:45:08', '2024-02-28 19:45:08', 'Ever Safe', NULL),
(9, '2024-02-28 19:46:34', '2024-02-28 19:46:34', 'Shimano', NULL),
(10, '2024-02-28 19:48:26', '2024-02-28 19:48:26', 'KMC', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `name` varchar(255) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id_category`, `created_at`, `updated_at`, `name`, `deleted_at`) VALUES
(1, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'bicicletas', NULL),
(2, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'indumentaria', NULL),
(3, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'accesorios', NULL),
(4, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'repuestos', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

DROP TABLE IF EXISTS `colors`;
CREATE TABLE `colors` (
  `id_color` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `name` varchar(255) NOT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id_color`, `created_at`, `updated_at`, `name`, `deleted_at`) VALUES
(1, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'rojo', NULL),
(2, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'azul', NULL),
(3, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'verde', NULL),
(4, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'blanco', NULL),
(5, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'negro', NULL),
(6, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'gris', NULL),
(7, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'naranja', NULL),
(8, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'amarillo', NULL),
(9, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'celeste', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `stock` int(10) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `id_category` int(11) NOT NULL,
  `id_brand` int(11) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id_product`, `created_at`, `updated_at`, `name`, `image`, `price`, `stock`, `description`, `id_category`, `id_brand`, `deleted_at`) VALUES
(1, '2024-02-28 19:01:40', '2024-02-28 19:01:40', 'Bicicleta Mtb Overtech Q6 R28', 'product_1709146900130_img.png', 300000, 19, 'Con un diseño resistente y funcional, la Bicicleta MTB Overtech Q6 cuenta con un pie de apoyo que facilita el estacionamiento y el mantenimiento. Esta bicicleta es la elección perfecta para los amantes del mountain bike que buscan una máquina sólida y duradera para aventuras emocionantes en la naturaleza. Con la Overtech Q6, cada ruta se convierte en una experiencia inolvidable.', 1, 1, NULL),
(2, '2024-02-28 19:03:39', '2024-02-28 19:03:39', 'Mountain bike Olmo Wish 290 R18', 'product_1709147019115_img.png', 260001, 12, 'Las bicicletas Olmo se destacan por sus cuadros de aluminio hidroformado y de frente integrado. Son productos de carrera de alta gama, pensados para ciclistas con ganas de superarse y para todas las personas que disfrutan de un andar impecable.', 1, 2, NULL),
(3, '2024-02-28 19:29:41', '2024-02-28 19:29:41', 'Mountain bike Olmo Flash 290 R18', 'product_1709148581294_img.png', 311000, 10, 'Te presentamos la Bicicleta Olmo Flash 290, un modelo excepcional diseñado para ofrecer un rendimiento óptimo en cualquier terreno. Con el distintivo sello de calidad de la marca Olmo, esta bicicleta está diseñada para ciclistas que buscan aventuras emocionantes y un rendimiento confiable.', 1, 2, NULL),
(4, '2024-02-28 19:33:09', '2024-02-28 19:33:09', 'Olmo Amelie Plume Rapide R26', 'product_1709148789624_img.png', 331000, 12, 'La Bicicleta urbana Olmo Amelie Plume Rapide es perfecta para aquellos que buscan una opción cómoda y práctica para moverse por la ciudad. Con su cuadro de aluminio de 18 pulgadas y rodado26. Esta bicicleta es ligera y fácil de manejar - ideal para adultos que deseen un medio de transporte ágil y eficiente.', 1, 2, NULL),
(6, '2024-02-28 19:34:38', '2024-02-28 19:34:38', 'Mtb Modelo Ktm Myroon Ace Se3 - Carbono', 'product_1709148878660_img.png', 415000, 7, 'Con esta bicicleta, experimentarás la emoción de recorrer senderos con confianza, gracias a su combinación de tecnología de vanguardia y componentes de alta calidad. Preparada para aventuras épicas, nuestra bicicleta de montaña es la elección perfecta para ciclistas apasionados que buscan un rendimiento excepcional en cada viaje.', 1, 3, NULL),
(7, '2024-02-28 19:36:03', '2024-02-28 19:36:03', 'Top Mega Harrier R28', 'product_1709148963053_img.png', 911000, 6, 'Con detalles meticulosos y componentes de alta calidad, la bicicleta de ruta Harrier Aluminio es la elección perfecta para ciclistas apasionados que buscan una experiencia de conducción suave, cómoda y llena de estilo en cada kilómetro.', 1, 4, NULL),
(8, '2024-02-28 19:39:08', '2024-02-28 19:39:08', 'Venzo Phoenix Pro - 2x8v R28', 'product_1709149148375_img.png', 7410000, 5, 'La bicicleta Venzo Phoenix Pro es la elección ideal para ciclistas que buscan una máquina confiable y de alto rendimiento para conquistar cualquier tipo de terreno. Ya sea que estés compitiendo en carreras o disfrutando de paseos recreativos, esta bicicleta te llevará al siguiente nivel de rendimiento y satisfacción en cada kilómetro.', 1, 5, NULL),
(9, '2024-02-28 19:40:52', '2024-02-28 19:40:52', '300 Lumens Luz Delantera Blanca Bic', 'product_1709149252289_img.png', 6000, 39, 'Introducimos la Luz LED de la Bicicleta, una solución innovadora y esencial para los entusiastas del ciclismo que buscan una iluminación confiable y versátil. Diseñada para garantizar la seguridad y visibilidad durante tus paseos nocturnos en bicicleta', 3, 6, NULL),
(10, '2024-02-28 19:42:20', '2024-02-28 19:42:20', 'Mini Inflador Bicicleta Liviano', 'product_1709149340662_img.png', 7500, 12, 'El Mini Inflador Bicicleta Liviano Chico Pico Presta/auto 25 T es el compañero perfecto para tus aventuras en bicicleta. Con su diseño compacto y ligero, podrás llevarlo contigo a donde quiera que vayas.', 3, 7, NULL),
(11, '2024-02-28 19:43:23', '2024-02-28 19:43:23', 'Inflador De Pie Con Manometro Bulit Serie 600', 'product_1709149403078_img.png', 38000, 12, 'Gracias al sistema de inflado al subir y bajar, podrás inflar tus productos en la mitad del tiempo y con menor esfuerzo. Llevalo a donde vayas gracias a su diseño liviano y su tamaño compacto, podrás llevar tu inflador a donde quieras.', 3, NULL, NULL),
(12, '2024-02-28 19:43:59', '2024-02-28 19:43:59', 'Portabicicleta P/ Techo Universal Reforzado', 'product_1709149439251_img.png', 641000, 5, 'El Porta Bicicleta Universal, tu compañero perfecto para transportar tu bicicleta de manera segura y conveniente. Diseñado con características excepcionales, este porta bicicleta se adapta a una amplia variedad de bicicletas, desde mountain bikes hasta bicicletas de ruta, BMX y más.', 3, NULL, NULL),
(13, '2024-02-28 19:44:35', '2024-02-28 19:44:35', 'Soporte Para Bicicleta 45kg Techo Roldas Frenos Ganchos', 'product_1709149475506_img.png', 64000, 17, 'El Soporte Para Bicicleta 45kg Techo Roldas Frenos Ganchos es el accesorio perfecto para los amantes del ciclismo. Con capacidad para una bicicleta, este soporte de la reconocida marca Gadnic te brinda la seguridad y comodidad que necesitas.', 3, NULL, NULL),
(14, '2024-02-28 19:45:08', '2024-02-28 19:45:08', 'Inflador Bicicleta Aluminio', 'product_1709149508431_img.png', 14000, 18, 'El inflador de bicicleta de aluminio de la marca Ever Safe es la herramienta perfecta para mantener tus neumáticos siempre inflados.', 3, 8, NULL),
(15, '2024-02-28 19:45:37', '2024-02-28 19:45:37', 'Linterna Led Bicicleta 1000 Lumens Recargable', 'product_1709149537461_img.png', 64000, 5, 'Presentamos nuestra potente Linterna LED de 1000 Lumens, la compañera perfecta para iluminar tus aventuras con claridad y versatilidad. Con un diseño robusto y características innovadoras, esta linterna se adapta a tus necesidades en cualquier entorno.', 3, NULL, NULL),
(16, '2024-02-28 19:46:07', '2024-02-28 19:46:07', 'Manubrio 31.8 X 720mm Aluminio Mtb Sbk', 'product_1709149567661_img.png', 64000, 5, 'Introducimos el Manubrio SBK para MTB, un componente esencial diseñado para maximizar tu experiencia de ciclismo de montaña. Fabricado con precisión en aluminio y respaldado por la renombrada marca SBK, este manubrio ofrece durabilidad, rendimiento y estilo para satisfacer las demandas de los ciclistas más exigentes.', 4, NULL, NULL),
(17, '2024-02-28 19:46:34', '2024-02-28 19:46:34', 'Kit Frenos Shimano Deore Mt410 Disco Hidraulico Mtb- Celero', 'product_1709149594376_img.png', 174000, 21, 'Sumérgete en una experiencia de frenado superior con el KIT DE FRENO SHIMANO M410 para disco hidráulico. Diseñado para ofrecer una frenada potente y fiable en cualquier condición, este kit proporciona un rendimiento excepcional y características avanzadas para elevar tu experiencia de ciclismo.', 4, 9, NULL),
(18, '2024-02-28 19:47:11', '2024-02-28 19:47:11', 'Pedales Gadnic Para Bicicleta Universal', 'product_1709149631143_img.png', 24000, 19, 'El eje de 9/16 pulgadas de uso común se adapta perfectamente a las bicicletas híbridas, bicicletas de trekking, bicicletas plegables, bicicletas de carretera o cualquier bicicleta urbana.', 4, NULL, NULL),
(19, '2024-02-28 19:47:56', '2024-02-28 19:47:56', 'Plato Palanca Shimano Deore M4100 10v 36-26 175 Boost Celero', 'product_1709149676120_img.png', 84000, 9, 'Presentamos las Palancas Shimano Deore M4100 BOOST, un conjunto de bielas diseñadas para llevar tu experiencia de ciclismo de montaña al siguiente nivel. Con características avanzadas y un rendimiento excepcional, estas palancas están diseñadas para los ciclistas que buscan precisión, durabilidad y eficiencia en cada pedalada.', 4, NULL, NULL),
(20, '2024-02-28 19:48:26', '2024-02-28 19:48:26', 'Cadena Kmc X8 Silver & Gray 116l 8v 16v 24v Mtb Ruta', 'product_1709149706898_img.png', 14000, 5, 'La Cadena KMC X8 Silver / Gray es una opción versátil y duradera para tu bicicleta. Diseñada para ser compatible con 5/6/7/8, 16 y 24 velocidades, esta cadena de alta calidad de la marca KMC te ofrece una resistencia excepcional a la tracción.', 4, 10, NULL),
(21, '2024-02-28 19:49:17', '2024-02-28 19:49:17', 'Cubiertas Rodado 29 Bicicleta MTB Mitas Ocelot v85 29 x 2.35', 'product_1709149756691_img.png', 2000, 50, 'Con unas dimensiones de 29 x 2.35, este neumático proporciona una combinación ideal de agarre y velocidad para el ciclismo de montaña. Estas medidas específicas están diseñadas para optimizar el rendimiento en una variedad de terrenos.', 4, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_colors`
--

DROP TABLE IF EXISTS `products_colors`;
CREATE TABLE `products_colors` (
  `id_product_color` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `id_product` int(11) DEFAULT NULL,
  `id_color` int(11) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products_colors`
--

INSERT INTO `products_colors` (`id_product_color`, `created_at`, `updated_at`, `id_product`, `id_color`, `deleted_at`) VALUES
(1, '2024-02-28 19:01:40', '2024-02-28 19:01:40', 1, 5, NULL),
(2, '2024-02-28 19:03:39', '2024-02-28 19:03:39', 2, 7, NULL),
(3, '2024-02-28 19:29:41', '2024-02-28 19:29:41', 3, 5, NULL),
(4, '2024-02-28 19:29:41', '2024-02-28 19:29:41', 3, 7, NULL),
(5, '2024-02-28 19:33:09', '2024-02-28 19:33:09', 4, 7, NULL),
(6, '2024-02-28 19:33:09', '2024-02-28 19:33:09', 4, 8, NULL),
(7, '2024-02-28 19:33:09', '2024-02-28 19:33:09', 4, 5, NULL),
(8, '2024-02-28 19:34:38', '2024-02-28 19:34:38', 6, 1, NULL),
(9, '2024-02-28 19:34:38', '2024-02-28 19:34:38', 6, 5, NULL),
(10, '2024-02-28 19:36:03', '2024-02-28 19:36:03', 7, 5, NULL),
(11, '2024-02-28 19:36:03', '2024-02-28 19:36:03', 7, 1, NULL),
(12, '2024-02-28 19:39:08', '2024-02-28 19:39:08', 8, 4, NULL),
(13, '2024-02-28 19:39:08', '2024-02-28 19:39:08', 8, 5, NULL),
(14, '2024-02-28 19:40:52', '2024-02-28 19:40:52', 9, 4, NULL),
(15, '2024-02-28 19:42:20', '2024-02-28 19:42:20', 10, 5, NULL),
(16, '2024-02-28 19:43:23', '2024-02-28 19:43:23', 11, 9, NULL),
(17, '2024-02-28 19:43:23', '2024-02-28 19:43:23', 11, 5, NULL),
(18, '2024-02-28 19:43:59', '2024-02-28 19:43:59', 12, 5, NULL),
(19, '2024-02-28 19:44:35', '2024-02-28 19:44:35', 13, 5, NULL),
(20, '2024-02-28 19:45:08', '2024-02-28 19:45:08', 14, 1, NULL),
(21, '2024-02-28 19:45:37', '2024-02-28 19:45:37', 15, 5, NULL),
(22, '2024-02-28 19:46:07', '2024-02-28 19:46:07', 16, 6, NULL),
(23, '2024-02-28 19:46:07', '2024-02-28 19:46:07', 16, 5, NULL),
(24, '2024-02-28 19:46:34', '2024-02-28 19:46:34', 17, 5, NULL),
(25, '2024-02-28 19:47:11', '2024-02-28 19:47:11', 18, 5, NULL),
(26, '2024-02-28 19:47:11', '2024-02-28 19:47:11', 18, 8, NULL),
(27, '2024-02-28 19:47:56', '2024-02-28 19:47:56', 19, 5, NULL),
(28, '2024-02-28 19:47:56', '2024-02-28 19:47:56', 19, 6, NULL),
(29, '2024-02-28 19:48:26', '2024-02-28 19:48:26', 20, 5, NULL),
(30, '2024-02-28 19:49:17', '2024-02-28 19:49:17', 21, 5, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `name` varchar(255) NOT NULL,
  `profile_img` varchar(255) DEFAULT NULL,
  `birth` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_user_type` int(11) NOT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `created_at`, `updated_at`, `name`, `profile_img`, `birth`, `email`, `password`, `id_user_type`, `deleted_at`) VALUES
(1, '2024-02-28 18:57:29', '2024-02-28 18:57:29', 'Milton Ezequiel Coria', 'default-user.svg', '2003-03-26', 'miltoncoria03@gmail.com', '$2a$10$pdq7oA6cNpxhNWJNmPF3e.kVlFdYls7LTtWohxQ613Z0oUjQi3Yny', 2, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_types`
--

DROP TABLE IF EXISTS `users_types`;
CREATE TABLE `users_types` (
  `id_user_type` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `name` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_types`
--

INSERT INTO `users_types` (`id_user_type`, `created_at`, `updated_at`, `name`, `key`, `deleted_at`) VALUES
(1, '2024-02-28 18:57:30', '2024-02-28 18:57:30', 'client', NULL, NULL),
(2, '2024-02-28 18:57:30', '2024-02-28 18:57:30', 'admin', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id_brand`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id_color`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_brand` (`id_brand`);

--
-- Indices de la tabla `products_colors`
--
ALTER TABLE `products_colors`
  ADD PRIMARY KEY (`id_product_color`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_color` (`id_color`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_user_type` (`id_user_type`);

--
-- Indices de la tabla `users_types`
--
ALTER TABLE `users_types`
  ADD PRIMARY KEY (`id_user_type`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id_brand` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id_color` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `products_colors`
--
ALTER TABLE `products_colors`
  MODIFY `id_product_color` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users_types`
--
ALTER TABLE `users_types`
  MODIFY `id_user_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id_brand`);

--
-- Filtros para la tabla `products_colors`
--
ALTER TABLE `products_colors`
  ADD CONSTRAINT `products_colors_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`),
  ADD CONSTRAINT `products_colors_ibfk_2` FOREIGN KEY (`id_color`) REFERENCES `colors` (`id_color`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_user_type`) REFERENCES `users_types` (`id_user_type`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
