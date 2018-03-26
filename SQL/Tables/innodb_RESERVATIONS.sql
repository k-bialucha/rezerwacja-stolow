-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: bilardapp.c6daxmywxacx.us-east-1.rds.amazonaws.com    Database: innodb
-- ------------------------------------------------------
-- Server version	5.6.37-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `RESERVATIONS`
--

DROP TABLE IF EXISTS `RESERVATIONS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RESERVATIONS` (
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
  KEY `id_table_fk_idx` (`ID_TABLE`),
  CONSTRAINT `id_table_fk` FOREIGN KEY (`ID_TABLE`) REFERENCES `TABLES` (`ID_TABLE`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `id_user_fk` FOREIGN KEY (`ID_USER`) REFERENCES `USERS` (`ID_USER`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RESERVATIONS`
--

LOCK TABLES `RESERVATIONS` WRITE;
/*!40000 ALTER TABLE `RESERVATIONS` DISABLE KEYS */;
INSERT INTO `RESERVATIONS` VALUES (1,1,1,'2017-10-10',8,10,40,0),(2,3,2,'2017-10-10',8,10,40,1),(4,1,1,'2018-03-12',14,15,14,0),(5,2,1,'2018-03-12',16,18,58,0),(6,2,2,'2018-03-17',16,18,70,0),(7,3,2,'2018-03-17',16,18,70,0),(8,1,2,'2018-03-17',18,19,35,0);
/*!40000 ALTER TABLE `RESERVATIONS` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`webroot`@`%`*/ /*!50003 TRIGGER charge_insert BEFORE INSERT ON innodb.RESERVATIONS
  FOR EACH ROW BEGIN
  IF dayofweek(NEW.DATE)=2 OR dayofweek(NEW.DATE)=3 OR dayofweek(NEW.DATE)=4
  THEN IF NEW.HOUR_FROM<16 THEN
    SET NEW.charge = (select week from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    ELSE SET NEW.charge = (select week_aft from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    END IF;
  ELSEIF dayofweek(NEW.DATE)=5 OR dayofweek(NEW.DATE)=6
  THEN IF NEW.HOUR_FROM<16 THEN
    SET NEW.charge = (select week from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    ELSE SET NEW.charge = (select weekend from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    END IF;
  ELSEIF dayofweek(NEW.DATE)=7 OR dayofweek(NEW.DATE)=1
	THEN SET NEW.charge = (select weekend from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    END IF;
  END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`webroot`@`%`*/ /*!50003 TRIGGER charge_update BEFORE UPDATE ON innodb.RESERVATIONS
  FOR EACH ROW BEGIN
  IF dayofweek(NEW.DATE)=2 OR dayofweek(NEW.DATE)=3 OR dayofweek(NEW.DATE)=4
  THEN IF NEW.HOUR_FROM<16 THEN
    SET NEW.charge = (select week from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    ELSE SET NEW.charge = (select week_aft from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    END IF;
  ELSEIF dayofweek(NEW.DATE)=5 OR dayofweek(NEW.DATE)=6
  THEN IF NEW.HOUR_FROM<16 THEN
    SET NEW.charge = (select week from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    ELSE SET NEW.charge = (select weekend from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    END IF;
  ELSEIF dayofweek(NEW.DATE)=7 OR dayofweek(NEW.DATE)=1
	THEN SET NEW.charge = (select weekend from innodb.Price_list_hour where innodb.Price_list_hour.id_club=1)*(NEW.HOUR_TO-NEW.HOUR_FROM);
    END IF;
  END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-20 21:20:24
