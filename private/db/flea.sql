-- --------------------------------------------------------
-- 主机:                           10.1.72.154
-- 服务器版本:                        5.1.72-log - MySQL Community Server (GPL)
-- 服务器操作系统:                      unknown-linux-gnu
-- HeidiSQL 版本:                  8.3.0.4795
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 flea 的数据库结构
CREATE DATABASE IF NOT EXISTS `flea` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `flea`;


-- 导出  表 flea.action 结构
CREATE TABLE IF NOT EXISTS `action` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '动作id',
  `name` varchar(64) DEFAULT NULL COMMENT '动作名称',
  `desc` varchar(256) DEFAULT NULL COMMENT '动作描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='动作';

-- 数据导出被取消选择。


-- 导出  表 flea.activity 结构
CREATE TABLE IF NOT EXISTS `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '活动id',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `action_id` int(11) DEFAULT NULL COMMENT '动作id',
  `desc` varchar(256) DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='活动';

-- 数据导出被取消选择。


-- 导出  表 flea.auction 结构
CREATE TABLE IF NOT EXISTS `auction` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '竞价id',
  `entity_id` int(11) DEFAULT NULL COMMENT '商品id',
  `price` double DEFAULT NULL COMMENT '竞价价格',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `anonymous` bit(1) DEFAULT NULL COMMENT '是否匿名：1-匿名，0-实名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='竞价';

-- 数据导出被取消选择。


-- 导出  表 flea.avatar 结构
CREATE TABLE IF NOT EXISTS `avatar` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '头像id',
  `url` varchar(256) NOT NULL COMMENT '头像url',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='头像';

-- 数据导出被取消选择。


-- 导出  表 flea.catalog 结构
CREATE TABLE IF NOT EXISTS `catalog` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '类别id',
  `name` varchar(64) DEFAULT NULL COMMENT '类别名称',
  `pid` int(11) DEFAULT NULL COMMENT '父类别id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品类目';

-- 数据导出被取消选择。


-- 导出  表 flea.comment 结构
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '评论id',
  `pid` int(11) NOT NULL COMMENT '父评论id',
  `content` varchar(1024) NOT NULL COMMENT '评论内容',
  `entity_id` int(11) NOT NULL COMMENT '商品id',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `anonymous` bit(1) NOT NULL COMMENT '是否匿名：1-匿名，0-实名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品评论';

-- 数据导出被取消选择。


-- 导出  表 flea.entity 结构
CREATE TABLE IF NOT EXISTS `entity` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `name` varchar(256) DEFAULT NULL COMMENT '商品名称',
  `catalog_id` int(11) DEFAULT NULL COMMENT '商品类别id',
  `desc` varchar(1024) DEFAULT NULL COMMENT '描述',
  `quality` varchar(1024) DEFAULT NULL COMMENT '成色：全新，9.5成，9成，8成',
  `price` double DEFAULT NULL COMMENT '价格',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `anonymous` bit(1) DEFAULT NULL COMMENT '是否匿名：1-匿名，0-实名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品条目';

-- 数据导出被取消选择。


-- 导出  表 flea.favorite 结构
CREATE TABLE IF NOT EXISTS `favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '收藏id',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '修改时间',
  `valid` bit(1) NOT NULL COMMENT '是否有效：1-有效，0-无效',
  `entity_id` int(11) NOT NULL COMMENT '商品id',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `entity_id_user_id` (`entity_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='收藏';

-- 数据导出被取消选择。


-- 导出  表 flea.image 结构
CREATE TABLE IF NOT EXISTS `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图片id',
  `url` varchar(256) NOT NULL COMMENT '图片url',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `entity_id` int(11) DEFAULT NULL COMMENT '商品id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='图片';

-- 数据导出被取消选择。


-- 导出  表 flea.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(64) NOT NULL COMMENT '用户名称',
  `alias` varchar(64) DEFAULT NULL COMMENT '用户别名，如中文名',
  `mobile` varchar(64) DEFAULT NULL COMMENT '手机号',
  `email` varchar(64) DEFAULT NULL COMMENT '邮箱',
  `avatar_id` int(11) DEFAULT NULL COMMENT '头像id',
  `anonymous` bit(1) DEFAULT NULL COMMENT '当前是否匿名：1-匿名， 0-实名',
  `login_at` datetime DEFAULT NULL COMMENT '最后登录时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户';

-- 数据导出被取消选择。
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
