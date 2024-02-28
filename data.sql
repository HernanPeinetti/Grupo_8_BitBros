-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2024 a las 21:22:19
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
-- Base de datos: `bicicleteria_db`
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
  `created_at` timestamp,
  `updated_at` timestamp,
  `name` varchar(255) NOT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp,
  `name` varchar(255) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id_category`, `created_at`, `updated_at`, `name`, `deleted_at`) VALUES
(1, '2024-02-27', '2024-02-27', 'bicicletas', NULL),
(2, '2024-02-27', '2024-02-27', 'indumentarias', NULL),
(3, '2024-02-27', '2024-02-27', 'accesorios', NULL),
(4, '2024-02-27', '2024-02-27', 'repuestos', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

DROP TABLE IF EXISTS `colors`;
CREATE TABLE `colors` (
  `id_color` int(11) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp,
  `name` varchar(255) NOT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id_color`, `created_at`, `updated_at`, `name`, `deleted_at`) VALUES
(1, '2024-02-27', '2024-02-27', 'rojo', NULL),
(2, '2024-02-27', '2024-02-27', 'azul', NULL),
(3, '2024-02-27', '2024-02-27', 'verde', NULL),
(4, '2024-02-27', '2024-02-27', 'blanco', NULL),
(5, '2024-02-27', '2024-02-27', 'negro', NULL),
(6, '2024-02-27', '2024-02-27', 'gris', NULL),
(7, '2024-02-27', '2024-02-27', 'naranja', NULL),
(8, '2024-02-27', '2024-02-27', 'amarillo', NULL),
(9, '2024-02-27', '2024-02-27', 'celeste', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `stock` int(10) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `id_category` int(11) NOT NULL,
  `id_brand` int(11) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_colors`
--

DROP TABLE IF EXISTS `products_colors`;
CREATE TABLE `products_colors` (
  `id_product_color` int(11) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp,
  `id_product` int(11) DEFAULT NULL,
  `id_color` int(11) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp,
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
(1, '2024-02-27', '2024-02-27', 'Milton Ezequiel Coria', 'default-user.svg', '2003-03-26', 'miltoncoria03@gmail.com', '$2a$10$pdq7oA6cNpxhNWJNmPF3e.kVlFdYls7LTtWohxQ613Z0oUjQi3Yny', 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_types`
--

DROP TABLE IF EXISTS `users_types`;
CREATE TABLE `users_types` (
  `id_user_type` int(11) NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp,
  `name` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_types`
--

INSERT INTO `users_types` (`id_user_type`, `created_at`, `updated_at`, `name`, `key`, `deleted_at`) VALUES
(1, '2024-02-27', '2024-02-27', 'client', NULL, NULL);

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
  MODIFY `id_brand` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products_colors`
--
ALTER TABLE `products_colors`
  MODIFY `id_product_color` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users_types`
--
ALTER TABLE `users_types`
  MODIFY `id_user_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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