-- MySQL dump 10.13  Distrib 5.7.39, for osx10.12 (x86_64)
--
-- Host: localhost    Database: scsp
-- ------------------------------------------------------
-- Server version	5.7.39

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
-- Table structure for table `adminstaff`
--

DROP TABLE IF EXISTS `adminstaff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adminstaff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `permission` int(11) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminstaff`
--

LOCK TABLES `adminstaff` WRITE;
/*!40000 ALTER TABLE `adminstaff` DISABLE KEYS */;
INSERT INTO `adminstaff` VALUES (1,'mnisi','Jane','Doe','password123',2,'CompSci','Software'),(2,'mnisi','Jane','Doe','password123',2,'CompSci','Software');
/*!40000 ALTER TABLE `adminstaff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `announcement`
--

DROP TABLE IF EXISTS `announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `announcement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `message` text,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcement`
--

LOCK TABLES `announcement` WRITE;
/*!40000 ALTER TABLE `announcement` DISABLE KEYS */;
INSERT INTO `announcement` VALUES (1,'Some title heree... ','The boy goes here the rest on the message','2025-05-05 21:37:32'),(3,'1212Some title heree... ','1212Some title heree... ','2025-05-06 12:01:26'),(4,'1212Some title heree... ','1212Some title heree... ','2025-05-06 12:01:29'),(5,'233333312Some title heree... ','233333312Some title heree... ','2025-05-06 12:01:34'),(6,'233333312Some title heree... ','233333312Some title heree... ','2025-05-06 12:01:39'),(7,'Yep another one Some title heree... ','Yep another one Some title heree... ','2025-05-06 12:04:49'),(8,'Yep another one Some title heree... ','Yep another one Some title heree... ','2025-05-06 12:04:51'),(9,'new announcement','new announcement','2025-05-15 23:45:16'),(10,'The boy goes here the rest on the message','The boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the message.\n\nThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the messageThe boy goes here the rest on the message','2025-05-16 00:04:46'),(11,'Lorem ipsum','Lorem ipsum','2025-05-16 00:24:27'),(12,'Lorem ipsum','                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet scelerisque dui. Ut vitae nibh sit amet quam volutpat elementum in id augue. Cras ultrices sed augue id cursus. Sed felis ipsum, interdum et neque quis, fermentum imperdiet leo. Cras vel dolor dolor. Morbi vitae lacus tincidunt, pulvinar dui vel, condimentum dui. Duis tempor ligula at nulla pellentesque, vitae placerat felis ullamcorper. Pellentesque at hendrerit dui.\r\n\r\nPraesent ornare auctor metus, eget placerat quam egestas sit amet. Vestibulum ut est a neque hendrerit fringilla. Pellentesque non dignissim lacus. Nulla facilisi. Nulla vitae quam purus. Nam vestibulum risus mi, non bibendum nunc placerat sed. Vivamus at elit et justo commodo venenatis. In hac habitasse platea dictumst. Integer urna nunc, malesuada quis lobortis at, tincidunt et mi. Cras bibendum ipsum vel varius auctor. Sed placerat eget lorem quis eleifend. Cras ac augue sed neque feugiat accumsan quis eu sem. Nulla facilisi. Nullam vulputate velit ex, nec congue diam accumsan ac.\r\n\r\nQuisque consectetur placerat lacus vitae sodales. Maecenas pharetra ullamcorper faucibus. Nulla imperdiet in sapien eget tristique. Cras elementum nunc ligula, a placerat leo luctus a. Proin maximus leo vitae ligula eleifend malesuada. Aliquam ex augue, tincidunt et finibus a, faucibus a nunc. Nam hendrerit feugiat neque nec pellentesque. Duis molestie urna sit amet sapien interdum cursus.\r\n\r\nMaecenas euismod in tortor a dignissim. Ut augue sem, varius vitae euismod eget, rutrum quis nisi. Morbi bibendum ante non diam sagittis, pellentesque dictum dolor pharetra. Fusce rutrum, massa non imperdiet faucibus, sem ligula vehicula ligula, ac sodales erat turpis ut augue. Sed at fermentum felis, ac mattis neque. Nam non urna luctus, tincidunt mi a, mollis risus. Sed tempor odio eu magna aliquet, vitae vulputate arcu maximus. Fusce risus metus, luctus nec dolor vitae, feugiat pharetra nisi. Etiam consectetur bibendum libero. Etiam sed justo ac erat malesuada elementum et in felis. Fusce volutpat, nibh et egestas consequat, sem mauris tempus ante, egestas ultricies mi eros vitae tellus. Aenean vehicula laoreet dolor vel scelerisque. Nullam sed ante vitae ipsum commodo elementum.\r\n\r\nProin nec fermentum risus, ac aliquam felis. Vivamus elementum euismod semper. Ut ex tortor, viverra ut congue id, interdum sit amet purus. Donec mollis eleifend dolor, vitae tincidunt justo semper eget. Curabitur blandit nulla ut lorem egestas, mollis porta arcu tincidunt. Morbi non nibh ex. Aliquam erat volutpat. Suspendisse luctus sagittis eleifend. Phasellus sem metus, tempor et velit et, rhoncus malesuada lorem. Pellentesque rhoncus arcu sit amet porta fermentum. Cras dapibus nibh id lorem gravida commodo id sit amet dolor. Pellentesque eu leo ex. Ut vel sagittis mauris. Aenean lorem diam, mollis quis quam sit amet, suscipit molestie velit. Sed elementum ex vel lacinia sollicitudin.','2025-05-16 00:25:58'),(13,'Proin nec fermentum risus, ac aliqu','                                                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet scelerisque dui. Ut vitae nibh sit amet quam volutpat elementum in id augue. Cras ultrices sed augue id cursus. Sed felis ipsum, interdum et neque quis, fermentum imperdiet leo. Cras vel dolor dolor. Morbi vitae lacus tincidunt, pulvinar dui vel, condimentum dui. Duis tempor ligula at nulla pellentesque, vitae placerat felis ullamcorper. Pellentesque at hendrerit dui.\r\n\r\nPraesent ornare auctor metus, eget placerat quam egestas sit amet. Vestibulum ut est a neque hendrerit fringilla. Pellentesque non dignissim lacus. Nulla facilisi. Nulla vitae quam purus. Nam vestibulum risus mi, non bibendum nunc placerat sed. Vivamus at elit et justo commodo venenatis. In hac habitasse platea dictumst. Integer urna nunc, malesuada quis lobortis at, tincidunt et mi. Cras bibendum ipsum vel varius auctor. Sed placerat eget lorem quis eleifend. Cras ac augue sed neque feugiat accumsan quis eu sem. Nulla facilisi. Nullam vulputate velit ex, nec congue diam accumsan ac.\r\n\r\nQuisque consectetur placerat lacus vitae sodales. Maecenas pharetra ullamcorper faucibus. Nulla imperdiet in sapien eget tristique. Cras elementum nunc ligula, a placerat leo luctus a. Proin maximus leo vitae ligula eleifend malesuada. Aliquam ex augue, tincidunt et finibus a, faucibus a nunc. Nam hendrerit feugiat neque nec pellentesque. Duis molestie urna sit amet sapien interdum cursus.\r\n\r\nMaecenas euismod in tortor a dignissim. Ut augue sem, varius vitae euismod eget, rutrum quis nisi. Morbi bibendum ante non diam sagittis, pellentesque dictum dolor pharetra. Fusce rutrum, massa non imperdiet faucibus, sem ligula vehicula ligula, ac sodales erat turpis ut augue. Sed at fermentum felis, ac mattis neque. Nam non urna luctus, tincidunt mi a, mollis risus. Sed tempor odio eu magna aliquet, vitae vulputate arcu maximus. Fusce risus metus, luctus nec dolor vitae, feugiat pharetra nisi. Etiam consectetur bibendum libero. Etiam sed justo ac erat malesuada elementum et in felis. Fusce volutpat, nibh et egestas consequat, sem mauris tempus ante, egestas ultricies mi eros vitae tellus. Aenean vehicula laoreet dolor vel scelerisque. Nullam sed ante vitae ipsum commodo elementum.\r\n\r\nProin nec fermentum risus, ac aliquam felis. Vivamus elementum euismod semper. Ut ex tortor, viverra ut congue id, interdum sit amet purus. Donec mollis eleifend dolor, vitae tincidunt justo semper eget. Curabitur blandit nulla ut lorem egestas, mollis porta arcu tincidunt. Morbi non nibh ex. Aliquam erat volutpat. Suspendisse luctus sagittis eleifend. Phasellus sem metus, tempor et velit et, rhoncus malesuada lorem. Pellentesque rhoncus arcu sit amet porta fermentum. Cras dapibus nibh id lorem gravida commodo id sit amet dolor. Pellentesque eu leo ex. Ut vel sagittis mauris. Aenean lorem diam, mollis quis quam sit amet, suscipit molestie velit. Sed elementum ex vel lacinia sollicitudin.','2025-05-16 00:26:10'),(14,'Vivamus elementum euismod semper. Ut ex tortor, viverra ut congue id, interdum sit amet purus. Donec mollis eleifend dolor, vitae tincidunt justo semper eget. ','                                                                                                                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet scelerisque dui. Ut vitae nibh sit amet quam volutpat elementum in id augue. Cras ultrices sed augue id cursus. Sed felis ipsum, interdum et neque quis, fermentum imperdiet leo. Cras vel dolor dolor. Morbi vitae lacus tincidunt, pulvinar dui vel, condimentum dui. Duis tempor ligula at nulla pellentesque, vitae placerat felis ullamcorper. Pellentesque at hendrerit dui.\r\n\r\nPraesent ornare auctor metus, eget placerat quam egestas sit amet. Vestibulum ut est a neque hendrerit fringilla. Pellentesque non dignissim lacus. Nulla facilisi. Nulla vitae quam purus. Nam vestibulum risus mi, non bibendum nunc placerat sed. Vivamus at elit et justo commodo venenatis. In hac habitasse platea dictumst. Integer urna nunc, malesuada quis lobortis at, tincidunt et mi. Cras bibendum ipsum vel varius auctor. Sed placerat eget lorem quis eleifend. Cras ac augue sed neque feugiat accumsan quis eu sem. Nulla facilisi. Nullam vulputate velit ex, nec congue diam accumsan ac.\r\n\r\nQuisque consectetur placerat lacus vitae sodales. Maecenas pharetra ullamcorper faucibus. Nulla imperdiet in sapien eget tristique. Cras elementum nunc ligula, a placerat leo luctus a. Proin maximus leo vitae ligula eleifend malesuada. Aliquam ex augue, tincidunt et finibus a, faucibus a nunc. Nam hendrerit feugiat neque nec pellentesque. Duis molestie urna sit amet sapien interdum cursus.\r\n\r\nMaecenas euismod in tortor a dignissim. Ut augue sem, varius vitae euismod eget, rutrum quis nisi. Morbi bibendum ante non diam sagittis, pellentesque dictum dolor pharetra. Fusce rutrum, massa non imperdiet faucibus, sem ligula vehicula ligula, ac sodales erat turpis ut augue. Sed at fermentum felis, ac mattis neque. Nam non urna luctus, tincidunt mi a, mollis risus. Sed tempor odio eu magna aliquet, vitae vulputate arcu maximus. Fusce risus metus, luctus nec dolor vitae, feugiat pharetra nisi. Etiam consectetur bibendum libero. Etiam sed justo ac erat malesuada elementum et in felis. Fusce volutpat, nibh et egestas consequat, sem mauris tempus ante, egestas ultricies mi eros vitae tellus. Aenean vehicula laoreet dolor vel scelerisque. Nullam sed ante vitae ipsum commodo elementum.\r\n\r\nProin nec fermentum risus, ac aliquam felis. Vivamus elementum euismod semper. Ut ex tortor, viverra ut congue id, interdum sit amet purus. Donec mollis eleifend dolor, vitae tincidunt justo semper eget. Curabitur blandit nulla ut lorem egestas, mollis porta arcu tincidunt. Morbi non nibh ex. Aliquam erat volutpat. Suspendisse luctus sagittis eleifend. Phasellus sem metus, tempor et velit et, rhoncus malesuada lorem. Pellentesque rhoncus arcu sit amet porta fermentum. Cras dapibus nibh id lorem gravida commodo id sit amet dolor. Pellentesque eu leo ex. Ut vel sagittis mauris. Aenean lorem diam, mollis quis quam sit amet, suscipit molestie velit. Sed elementum ex vel lacinia sollicitudin.','2025-05-16 00:26:41'),(15,' Donec mollis eleifend dolor, vitae tincidunt justo semper eget. Curabitur blandit nulla ut lorem egestas, mollis porta arcu tincidunt. Morbi non nibh ex. Aliquam erat volutpat. ','                                                                                                                                                                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet scelerisque dui. Ut vitae nibh sit amet quam volutpat elementum in id augue. Cras ultrices sed augue id cursus. Sed felis ipsum, interdum et neque quis, fermentum imperdiet leo. Cras vel dolor dolor. Morbi vitae lacus tincidunt, pulvinar dui vel, condimentum dui. Duis tempor ligula at nulla pellentesque, vitae placerat felis ullamcorper. Pellentesque at hendrerit dui.\r\n\r\nPraesent ornare auctor metus, eget placerat quam egestas sit amet. Vestibulum ut est a neque hendrerit fringilla. Pellentesque non dignissim lacus. Nulla facilisi. Nulla vitae quam purus. Nam vestibulum risus mi, non bibendum nunc placerat sed. Vivamus at elit et justo commodo venenatis. In hac habitasse platea dictumst. Integer urna nunc, malesuada quis lobortis at, tincidunt et mi. Cras bibendum ipsum vel varius auctor. Sed placerat eget lorem quis eleifend. Cras ac augue sed neque feugiat accumsan quis eu sem. Nulla facilisi. Nullam vulputate velit ex, nec congue diam accumsan ac.\r\n\r\nQuisque consectetur placerat lacus vitae sodales. Maecenas pharetra ullamcorper faucibus. Nulla imperdiet in sapien eget tristique. Cras elementum nunc ligula, a placerat leo luctus a. Proin maximus leo vitae ligula eleifend malesuada. Aliquam ex augue, tincidunt et finibus a, faucibus a nunc. Nam hendrerit feugiat neque nec pellentesque. Duis molestie urna sit amet sapien interdum cursus.\r\n\r\nMaecenas euismod in tortor a dignissim. Ut augue sem, varius vitae euismod eget, rutrum quis nisi. Morbi bibendum ante non diam sagittis, pellentesque dictum dolor pharetra. Fusce rutrum, massa non imperdiet faucibus, sem ligula vehicula ligula, ac sodales erat turpis ut augue. Sed at fermentum felis, ac mattis neque. Nam non urna luctus, tincidunt mi a, mollis risus. Sed tempor odio eu magna aliquet, vitae vulputate arcu maximus. Fusce risus metus, luctus nec dolor vitae, feugiat pharetra nisi. Etiam consectetur bibendum libero. Etiam sed justo ac erat malesuada elementum et in felis. Fusce volutpat, nibh et egestas consequat, sem mauris tempus ante, egestas ultricies mi eros vitae tellus. Aenean vehicula laoreet dolor vel scelerisque. Nullam sed ante vitae ipsum commodo elementum.\r\n\r\nProin nec fermentum risus, ac aliquam felis. Vivamus elementum euismod semper. Ut ex tortor, viverra ut congue id, interdum sit amet purus. Donec mollis eleifend dolor, vitae tincidunt justo semper eget. Curabitur blandit nulla ut lorem egestas, mollis porta arcu tincidunt. Morbi non nibh ex. Aliquam erat volutpat. Suspendisse luctus sagittis eleifend. Phasellus sem metus, tempor et velit et, rhoncus malesuada lorem. Pellentesque rhoncus arcu sit amet porta fermentum. Cras dapibus nibh id lorem gravida commodo id sit amet dolor. Pellentesque eu leo ex. Ut vel sagittis mauris. Aenean lorem diam, mollis quis quam sit amet, suscipit molestie velit. Sed elementum ex vel lacinia sollicitudin.','2025-05-16 00:27:06');
/*!40000 ALTER TABLE `announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lecturer`
--

DROP TABLE IF EXISTS `lecturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lecturer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `permission` int(11) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lecturer`
--

LOCK TABLES `lecturer` WRITE;
/*!40000 ALTER TABLE `lecturer` DISABLE KEYS */;
INSERT INTO `lecturer` VALUES (1,'mnisi','Jane','Doe','password123',1,'CompSci','Software'),(2,'mnisi','Jane','Doe','password123',2,'CompSci','Software');
/*!40000 ALTER TABLE `lecturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maintanance`
--

DROP TABLE IF EXISTS `maintanance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `maintanance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `reporter` varchar(255) DEFAULT NULL,
  `campus` varchar(255) DEFAULT NULL,
  `building` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `status` varchar(55) DEFAULT NULL,
  `message` text,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maintanance`
--

LOCK TABLES `maintanance` WRITE;
/*!40000 ALTER TABLE `maintanance` DISABLE KEYS */;
INSERT INTO `maintanance` VALUES (2,'QQQAnother Some title here',NULL,'Sosh','10','L23','submitted','														NO, the projector is missing, we cant watch movviess\r\n                                                    ','2025-05-16 01:04:28'),(4,'janedoe UPDATE','Mnisi','Sosh','12','L3','submitted','Yeahhh, the projector is missing, we cant watch movviess','2025-05-06 21:38:58'),(5,'janedoe UPDATE','Mnisi','Sosh','10','L33','in-progress','Yeahhh, the projector is missing, we cant watch movviess','2025-05-06 13:06:43'),(6,'sdsadsa',NULL,'asdasd','asdasd','asdsdasdas','submitted','asdsd','2025-05-16 00:47:42'),(7,'sdsadsa',NULL,'asdasd','asdasd','asdsdasdas','submitted','asdsd','2025-05-16 00:48:25'),(8,'sdsadsa',NULL,'asdasd','asdasd','asdsdasdas','submitted','asdsd','2025-05-16 00:49:03');
/*!40000 ALTER TABLE `maintanance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `permission` int(11) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'pakmal','Malusi','Pakade','password',1,'CompSci','Software'),(2,'sbuda','++++SBU++++','Leoke','newpassword',1,'CompSci','Software'),(3,'pakmal2','Malusi2','Pakade2','password22',1,'CompSci','Software'),(4,'pakmal2','Malusi2','Pakade222','password22',1,'CompSci','Software'),(5,'req.body.username','Malusi2','Pakade2','password22',1,'CompSci','Software'),(6,'johndoe','Malusi2','Pakade2','password22',1,'CompSci','Software'),(7,'johndoe','John','Doe','password123',1,'CompSci','Software'),(8,'newnew','newnew','DowDow','password123',1,'CompSci','Software'),(12,'janedoe UPDATE 15May','','','',1,'',''),(13,'janedoe','Jane','Doe','password123',1,'CompSci','Software'),(15,'janedoe','Jane','Doe','password123',1,'CompSci','Software'),(16,'janedoe','Jane','Doe','password123',1,'CompSci','Software'),(17,'mnisi','Jane','Doe','password123',1,'CompSci','Software'),(19,'mnisi','Jane','Doe','password123',1,'CompSci','Software'),(20,'janedoe','Jane','Doe','password123',1,'CompSci','Software'),(22,'janedoe','Jane','Doe','password123',1,'CompSci','software'),(23,'janedoe','Jane','Doe','password123',1,'CompSci','software'),(24,'janedoe','Jane','Doe','password123',1,'CompSci','software'),(25,'janedoe','Jane','Doe','password123',1,'CompSci','software'),(26,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(30,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-16 16:20:25
