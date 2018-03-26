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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-20 21:20:32
