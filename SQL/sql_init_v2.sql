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
-- Table structure for table `Price_list_hour`
--

DROP TABLE IF EXISTS `Price_list_hour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Price_list_hour` (
  `week` int(11) DEFAULT NULL,
  `weekend` int(11) DEFAULT NULL,
  `week_aft` int(11) DEFAULT NULL,
  `Id_club` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Id_club`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Price_list_hour`
--

LOCK TABLES `Price_list_hour` WRITE;
/*!40000 ALTER TABLE `Price_list_hour` DISABLE KEYS */;
INSERT INTO `Price_list_hour` VALUES (14,35,29,1);
/*!40000 ALTER TABLE `Price_list_hour` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Temporary view structure for view `Rez`
--

DROP TABLE IF EXISTS `Rez`;
/*!50001 DROP VIEW IF EXISTS `Rez`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `Rez` AS SELECT 
 1 AS `Id_table`,
 1 AS `Date`,
 1 AS `Hour_From`,
 1 AS `Hour_To`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `TABLES`
--

DROP TABLE IF EXISTS `TABLES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TABLES` (
  `ID_TABLE` int(11) NOT NULL AUTO_INCREMENT,
  `NUM_OF_SEATS` int(11) NOT NULL,
  `ID_TYPE` int(11) NOT NULL,
  PRIMARY KEY (`ID_TABLE`),
  KEY `ID_TYPE` (`ID_TYPE`),
  CONSTRAINT `TABLES_ibfk_1` FOREIGN KEY (`ID_TYPE`) REFERENCES `TABLES_TYPE` (`ID_TYPE`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TABLES`
--

LOCK TABLES `TABLES` WRITE;
/*!40000 ALTER TABLE `TABLES` DISABLE KEYS */;
INSERT INTO `TABLES` VALUES (1,6,1),(2,4,1),(3,6,2);
/*!40000 ALTER TABLE `TABLES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TABLES_TYPE`
--

DROP TABLE IF EXISTS `TABLES_TYPE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TABLES_TYPE` (
  `ID_TYPE` int(11) NOT NULL AUTO_INCREMENT,
  `TYPE` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_TYPE`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TABLES_TYPE`
--

LOCK TABLES `TABLES_TYPE` WRITE;
/*!40000 ALTER TABLE `TABLES_TYPE` DISABLE KEYS */;
INSERT INTO `TABLES_TYPE` VALUES (1,'Snooker'),(2,'Pool'),(3,'Karambol');
/*!40000 ALTER TABLE `TABLES_TYPE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USERS`
--

DROP TABLE IF EXISTS `USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USERS` (
  `ID_USER` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  `SURNAME` varchar(45) NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_USER`),
  UNIQUE KEY `EMAIL` (`EMAIL`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USERS`
--

LOCK TABLES `USERS` WRITE;
/*!40000 ALTER TABLE `USERS` DISABLE KEYS */;
INSERT INTO `USERS` VALUES (1,'Szymon','Fiedler','szymom311@tlen.pl'),(2,'Michał','Musiał','michal.musial@wp.pl'),(3,'Sara','Dorociak','sara.dorociak@wp.pl');
/*!40000 ALTER TABLE `USERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add user',2,'add_user'),(5,'Can change user',2,'change_user'),(6,'Can delete user',2,'delete_user'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add permission',4,'add_permission'),(11,'Can change permission',4,'change_permission'),(12,'Can delete permission',4,'delete_permission'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add reservation elements',7,'add_reservationelements'),(20,'Can change reservation elements',7,'change_reservationelements'),(21,'Can delete reservation elements',7,'delete_reservationelements'),(22,'Can add reservation',7,'add_reservation'),(23,'Can change reservation',7,'change_reservation'),(24,'Can delete reservation',7,'delete_reservation');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$100000$DGgPuF3Fqiwo$YMrlDEF6RkgTaJqQt3VWZfG2dIjdOmMiDMWA+AJ/bzY=','2018-03-19 08:52:37.230654',1,'admin','','','admin@admin.pl',1,1,'2018-03-11 20:56:37.258553'),(2,'pbkdf2_sha256$100000$hNUnkhLZO5cE$DPYBjA3LtiWcNq20Vd0JpCeyoNEBbtiiCDfnn60fbcM=','2018-03-13 22:24:46.000000',1,'bialuchak','Kamil','Bialucha','210347@student.pwr.edu.pl',0,1,'2018-03-13 22:23:30.000000');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2018-03-13 22:23:30.981666','2','bialuchak',1,'[{\"added\": {}}]',2,1),(2,'2018-03-13 22:24:54.755788','2','bialuchak',2,'[{\"changed\": {\"fields\": [\"first_name\", \"last_name\", \"email\", \"is_superuser\", \"last_login\"]}}]',2,1),(3,'2018-03-18 23:12:02.709572','16','ReservationList object (16)',1,'[{\"added\": {}}]',10,1),(4,'2018-03-18 23:12:30.375636','16','ReservationList object (16)',3,'',10,1),(5,'2018-03-18 23:14:53.900421','8','ReservationList object (8)',2,'[{\"changed\": {\"fields\": [\"HOUR_FROM\"]}}]',10,1),(6,'2018-03-18 23:15:28.227013','8','ReservationList object (8)',2,'[{\"changed\": {\"fields\": [\"HOUR_TO\", \"CHARGE\"]}}]',10,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(4,'auth','permission'),(2,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session'),(7,'testsite','reservation'),(10,'testsite','reservationlist'),(8,'testsite','reservationpricehour'),(9,'testsite','rezview'),(11,'testsite','tables');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2018-03-11 20:46:28.487871'),(2,'auth','0001_initial','2018-03-11 20:46:29.791304'),(3,'admin','0001_initial','2018-03-11 20:46:30.116190'),(4,'admin','0002_logentry_remove_auto_add','2018-03-11 20:46:30.186577'),(5,'contenttypes','0002_remove_content_type_name','2018-03-11 20:46:30.400330'),(6,'auth','0002_alter_permission_name_max_length','2018-03-11 20:46:30.519363'),(7,'auth','0003_alter_user_email_max_length','2018-03-11 20:46:30.646433'),(8,'auth','0004_alter_user_username_opts','2018-03-11 20:46:30.717131'),(9,'auth','0005_alter_user_last_login_null','2018-03-11 20:46:30.831919'),(10,'auth','0006_require_contenttypes_0002','2018-03-11 20:46:30.894187'),(11,'auth','0007_alter_validators_add_error_messages','2018-03-11 20:46:30.963704'),(12,'auth','0008_alter_user_username_max_length','2018-03-11 20:46:31.202837'),(13,'auth','0009_alter_user_last_name_max_length','2018-03-11 20:46:31.327907'),(14,'sessions','0001_initial','2018-03-11 20:46:31.491140'),(15,'testsite','0001_initial','2018-03-15 21:00:04.300488'),(16,'testsite','0002_auto_20180315_2121','2018-03-15 21:22:04.629696');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('1xw1nq76fq57cgaob2l95r8hf2u2h3fk','NTAzMjA4ODUxZjc5MDUwZTJjMTlmNTY1MjI0OWY5NTcxM2M0NGFlMDp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9pZCI6IjEiLCJfYXV0aF91c2VyX2hhc2giOiIzYjliZjAxMDVlZGI0NzcxOTg5OGRmMjczOWJkNTMwNWYyOTNlYzFmIn0=','2018-03-26 20:41:06.368313'),('1y3ajog1e05z5235t5osuosha5cn1yfi','MzhjM2I1MzNlMWZkZWQ1MzlkNzI0Zjc1OTA0YTJiMDcwNjU0MDgwZDp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9oYXNoIjoiM2I5YmYwMTA1ZWRiNDc3MTk4OThkZjI3MzliZDUzMDVmMjkzZWMxZiIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2018-03-27 21:37:13.555606'),('g8dykisj2agspmld0sob2x0z7jo5llwx','NTAzMjA4ODUxZjc5MDUwZTJjMTlmNTY1MjI0OWY5NTcxM2M0NGFlMDp7Il9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiX2F1dGhfdXNlcl9pZCI6IjEiLCJfYXV0aF91c2VyX2hhc2giOiIzYjliZjAxMDVlZGI0NzcxOTg5OGRmMjczOWJkNTMwNWYyOTNlYzFmIn0=','2018-04-01 13:39:53.098728'),('koo62ufj0r9wsjtlirtngfmw9dyg2j45','YmVkOGJjMjY1YzYzZWY5MTRmZmQ5ZDJjMzYyZmM1MzNiYWU4ZGIwZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiM2I5YmYwMTA1ZWRiNDc3MTk4OThkZjI3MzliZDUzMDVmMjkzZWMxZiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2018-04-02 08:10:26.044293'),('ku5834u82dnz40exbkzm2pdy7fvzndo3','YjhjODgxMDUwNWYxMGMwODMyYWE3Nzk3NTI5NTc1ZWYwZTFjZDM3ODp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIzYjliZjAxMDVlZGI0NzcxOTg5OGRmMjczOWJkNTMwNWYyOTNlYzFmIn0=','2018-03-27 22:13:14.387887'),('ns41x8zsecxjitud1b87vucffcx22v9z','YmVkOGJjMjY1YzYzZWY5MTRmZmQ5ZDJjMzYyZmM1MzNiYWU4ZGIwZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiM2I5YmYwMTA1ZWRiNDc3MTk4OThkZjI3MzliZDUzMDVmMjkzZWMxZiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2018-04-02 08:52:37.281616'),('o0ouro4dmfqzr3w9s0m1uzithe9euwcx','YjhjODgxMDUwNWYxMGMwODMyYWE3Nzk3NTI5NTc1ZWYwZTFjZDM3ODp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIzYjliZjAxMDVlZGI0NzcxOTg5OGRmMjczOWJkNTMwNWYyOTNlYzFmIn0=','2018-04-01 21:57:20.176184'),('uzay27q5ityztws2443ru92okhj299nr','YmVkOGJjMjY1YzYzZWY5MTRmZmQ5ZDJjMzYyZmM1MzNiYWU4ZGIwZDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9oYXNoIjoiM2I5YmYwMTA1ZWRiNDc3MTk4OThkZjI3MzliZDUzMDVmMjkzZWMxZiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIn0=','2018-04-02 07:12:52.475311');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sobota`
--

DROP TABLE IF EXISTS `sobota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sobota` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `task_dest` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sobota`
--

LOCK TABLES `sobota` WRITE;
/*!40000 ALTER TABLE `sobota` DISABLE KEYS */;
INSERT INTO `sobota` VALUES (1,'dd','2018-03-17 14:20:27','cc'),(2,'dd','2018-03-17 14:25:48','cc'),(3,'dd','2018-03-17 14:25:52','cc'),(4,'qw','2018-03-17 14:26:12','qwe');
/*!40000 ALTER TABLE `sobota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testsite_reservation`
--

DROP TABLE IF EXISTS `testsite_reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `testsite_reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reservations` varchar(200) NOT NULL,
  `done` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testsite_reservation`
--

LOCK TABLES `testsite_reservation` WRITE;
/*!40000 ALTER TABLE `testsite_reservation` DISABLE KEYS */;
INSERT INTO `testsite_reservation` VALUES (1,'First reserve',0),(2,'Test rezerwacji',0),(3,'test',0),(6,'Test (K)',0),(10,'test',0);
/*!40000 ALTER TABLE `testsite_reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'innodb'
--

--
-- Dumping routines for database 'innodb'
--
/*!50003 DROP PROCEDURE IF EXISTS `this_week_res` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`webroot`@`%` PROCEDURE `this_week_res`()
select * from Rez where yearweek(Rez.date) = yearweek(curdate()) ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `Rez`
--

/*!50001 DROP VIEW IF EXISTS `Rez`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`webroot`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `Rez` AS select `RESERVATIONS`.`ID_TABLE` AS `Id_table`,`RESERVATIONS`.`DATE` AS `Date`,`RESERVATIONS`.`HOUR_FROM` AS `Hour_From`,`RESERVATIONS`.`HOUR_TO` AS `Hour_To` from `RESERVATIONS` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-20 21:24:51
