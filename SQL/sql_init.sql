-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: mysql1.ugu.pl
-- Czas wygenerowania: 05 Mar 2018, 15:54
-- Wersja serwera: 5.5.30
-- Wersja PHP: 5.3.10-hosting1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Baza danych: `db692989`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla  `RESERVATIONS`
--

CREATE TABLE IF NOT EXISTS `RESERVATIONS` (
  `ID_RES` int(11) NOT NULL AUTO_INCREMENT,
  `ID_USER` int(11) NOT NULL,
  `ID_TABLE` int(11) NOT NULL,
  `DATE` date DEFAULT NULL,
  `HOUR_FROM` int(11) DEFAULT NULL,
  `HOUR_TO` int(11) DEFAULT NULL,
  `CHARGE` int(11) DEFAULT NULL,
  `CONFIRMED` decimal(1,0) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID_RES`),
  KEY `id_user_fk_idx` (`ID_USER`),
  KEY `id_table_fk_idx` (`ID_TABLE`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Zrzut danych tabeli `RESERVATIONS`
--

INSERT INTO `RESERVATIONS` (`ID_RES`, `ID_USER`, `ID_TABLE`, `DATE`, `HOUR_FROM`, `HOUR_TO`, `CHARGE`, `CONFIRMED`) VALUES
(1, 1, 1, '2017-10-10', 8, 10, 40, 0),
(2, 3, 2, '2017-10-10', 8, 10, 40, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla  `TABLES`
--

CREATE TABLE IF NOT EXISTS `TABLES` (
  `ID_TABLE` int(11) NOT NULL AUTO_INCREMENT,
  `NUM_OF_SEATS` int(11) NOT NULL,
  `ID_TYPE` int(11) NOT NULL,
  PRIMARY KEY (`ID_TABLE`),
  KEY `ID_TYPE` (`ID_TYPE`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Zrzut danych tabeli `TABLES`
--

INSERT INTO `TABLES` (`ID_TABLE`, `NUM_OF_SEATS`, `ID_TYPE`) VALUES
(1, 6, 1),
(2, 4, 1),
(3, 6, 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla  `TABLES_TYPE`
--

CREATE TABLE IF NOT EXISTS `TABLES_TYPE` (
  `ID_TYPE` int(11) NOT NULL AUTO_INCREMENT,
  `TYPE` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_TYPE`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Zrzut danych tabeli `TABLES_TYPE`
--

INSERT INTO `TABLES_TYPE` (`ID_TYPE`, `TYPE`) VALUES
(1, 'Snooker'),
(2, 'Pool'),
(3, 'Karambol');

-- --------------------------------------------------------

--
-- Struktura tabeli dla  `USERS`
--

CREATE TABLE IF NOT EXISTS `USERS` (
  `ID_USER` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  `SURNAME` varchar(45) NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_USER`),
  UNIQUE KEY `EMAIL` (`EMAIL`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Zrzut danych tabeli `USERS`
--

INSERT INTO `USERS` (`ID_USER`, `NAME`, `SURNAME`, `EMAIL`) VALUES
(1, 'Szymon', 'Fiedler', 'szymom311@tlen.pl'),
(2, 'Michał', 'Musiał', 'michal.musial@wp.pl'),
(3, 'Sara', 'Dorociak', 'sara.dorociak@wp.pl');

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `RESERVATIONS`
--
ALTER TABLE `RESERVATIONS`
  ADD CONSTRAINT `id_table_fk` FOREIGN KEY (`ID_TABLE`) REFERENCES `TABLES` (`ID_TABLE`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_user_fk` FOREIGN KEY (`ID_USER`) REFERENCES `USERS` (`ID_USER`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Ograniczenia dla tabeli `TABLES`
--
ALTER TABLE `TABLES`
  ADD CONSTRAINT `TABLES_ibfk_1` FOREIGN KEY (`ID_TYPE`) REFERENCES `TABLES_TYPE` (`ID_TYPE`) ON DELETE NO ACTION ON UPDATE NO ACTION;
