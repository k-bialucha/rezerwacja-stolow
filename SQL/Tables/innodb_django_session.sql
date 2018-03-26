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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-20 21:20:56