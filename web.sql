/*
SQLyog Ultimate v11.13 (64 bit)
MySQL - 5.5.46 : Database - web
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`web` /*!40100 DEFAULT CHARACTER SET gb2312 */;

USE `web`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `name` varchar(100) DEFAULT NULL COMMENT '管理员名称',
  `password` varchar(100) DEFAULT NULL COMMENT '管理员密码',
  `type` int(11) DEFAULT NULL COMMENT '类型【1：超级管理员；2：普通管理员】',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=gb2312;

/*Data for the table `admin` */

insert  into `admin`(`id`,`name`,`password`,`type`) values (1,'admin','admin',1);

/*Table structure for table `assess` */

DROP TABLE IF EXISTS `assess`;

CREATE TABLE `assess` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '评价人id',
  `content` varchar(1000) DEFAULT NULL COMMENT '评价内容',
  `req_id` int(11) DEFAULT NULL COMMENT '对应订单id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=gb2312;

/*Data for the table `assess` */

insert  into `assess`(`id`,`user_id`,`content`,`req_id`) values (6,10,'运输速度很快，物品没有损伤，物流人员态度非常好！',22);

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `req_id` varchar(100) DEFAULT NULL COMMENT '订单需求表中的id',
  `user_id` varchar(100) DEFAULT NULL COMMENT '用户表中的id',
  `time` varchar(100) DEFAULT NULL COMMENT '创建时间',
  `receiveName` varchar(100) DEFAULT NULL COMMENT '创建人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=gb2312;

/*Data for the table `orders` */

insert  into `orders`(`id`,`req_id`,`user_id`,`time`,`receiveName`) values (8,'21','9','Mon Mar 27 2017 22:22:49 GMT+0800 (中国标准时间)','ceshi'),(9,'23','9','Mon Mar 27 2017 22:22:59 GMT+0800 (中国标准时间)','ceshi'),(10,'22','9','Tue Mar 28 2017 11:30:50 GMT+0800 (中国标准时间)','ceshi');

/*Table structure for table `requirest` */

DROP TABLE IF EXISTS `requirest`;

CREATE TABLE `requirest` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL COMMENT '标题',
  `content` varchar(3000) DEFAULT NULL COMMENT '内容',
  `user` int(11) DEFAULT NULL COMMENT '对应user表中的id',
  `time` varchar(100) DEFAULT NULL COMMENT '创建时间',
  `status` int(11) DEFAULT NULL COMMENT '订单状态（1：未运输；2：已受理；3：运输中；4：交易成功）',
  `userName` varchar(100) DEFAULT NULL COMMENT '创建者名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=gb2312;

/*Data for the table `requirest` */

insert  into `requirest`(`id`,`title`,`content`,`user`,`time`,`status`,`userName`) values (21,'玻璃瓶','该订单需要在3天之内送到客户手中，中途禁止碰撞，常温运输',11,'Mon Mar 27 2017 21:03:00 GMT+0800 (中国标准时间)',4,'joking'),(22,'帆布鞋','该鞋子需要在1天之类送到客户手中，只能采用航空运输，物品重量1kg，物品大小1000*1000，物品禁止挤压，防止变形。',10,'Mon Mar 27 2017 21:11:16 GMT+0800 (中国标准时间)',4,'joking'),(23,'高压锅','该物品重量3kg，最长运输时间2天，该物品禁止挤压，该物品为空运物品，非空运公司拒绝接受该订单，若有损坏，物流公司按原价赔偿。',11,'Mon Mar 27 2017 21:15:22 GMT+0800 (中国标准时间)',4,'joking'),(24,'生蚝','物品类型是海鲜，重量2Kg，运输方式：陆运，运输过程中需要用海水浸泡住，还要不停的加入氧气，使用生态冰温保活法即将温度控至在生态临界温度到结冰点的温度范围(生态冰温)使鱼贝类保持冬眠状态而不死亡进行运输。',11,'Mon Mar 27 2017 21:21:27 GMT+0800 (中国标准时间)',1,'kid'),(25,'太阳镜','首先把每副眼镜装普通PE环保袋,然后12支装白内盒(分两层,上下各6支) ,最后装箱即可.里面的关键是:平放在白内盒内,内盒装箱要不留太大缝隙.确保在运输中不会移动翻滚.外箱要打包好即可,有条件的话最好在外箱内套一大的塑料袋,可防水.',11,'Mon Mar 27 2017 21:25:38 GMT+0800 (中国标准时间)',1,'kid');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL COMMENT 'd登录名',
  `password` varchar(50) DEFAULT NULL COMMENT '密码',
  `type` int(1) DEFAULT NULL COMMENT '用户类型:1：企业用户；2：物流公司用户；',
  `userName` varchar(100) DEFAULT NULL COMMENT '用户姓名',
  `sex` int(10) DEFAULT NULL COMMENT '用户性别:1:男；2：女',
  `phone` varchar(100) DEFAULT NULL COMMENT '电话号码',
  `mail` varchar(100) DEFAULT NULL COMMENT '电子邮箱',
  `company` varchar(100) DEFAULT NULL COMMENT '公司名称',
  `address` varchar(100) DEFAULT NULL COMMENT '地址',
  `idCard` varchar(100) DEFAULT NULL COMMENT '身份证',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=gb2312;

/*Data for the table `user` */

insert  into `user`(`id`,`name`,`password`,`type`,`userName`,`sex`,`phone`,`mail`,`company`,`address`,`idCard`) values (9,'ceshi','123456',2,'邓文',2,'13330956643','dengwenwen95@163.com','勤智数码','成都高新区天府软件园','511233199502019090'),(10,'joking','password',1,'张文',1,'13309098909','2098789@qq.com','骆驼服饰旗舰店','广东广州','42216619900525096897'),(11,'kid','password',1,'刘青',1,'15609891345','246709823@qq.com','每日副食品经营部','成都','12209919920909561390'),(12,'fff','ff',2,'ff',2,'ff','ff','ff','f','f');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
