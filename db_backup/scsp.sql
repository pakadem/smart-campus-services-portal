-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2025 at 02:35 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scsp`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminstaff`
--

CREATE TABLE `adminstaff` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `permission` int(11) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `adminstaff`
--

INSERT INTO `adminstaff` (`id`, `username`, `name`, `surname`, `password`, `permission`, `course`, `module`) VALUES
(1, 'mnisi', 'Jane', 'Doe', 'password123', 2, 'CompSci', 'Software'),
(2, 'mnisi', 'Jane', 'Doe', 'password123', 2, 'CompSci', 'Software');

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `announcement`
--

INSERT INTO `announcement` (`id`, `title`, `message`, `created_time`) VALUES
(26, 'WiFi Connectivity Issue', 'Students in Block B are experiencing slow or no internet connectivity since this morning.', '2025-05-16 06:30:00'),
(27, 'Broken Projector in Lecture Hall 3', 'The projector in Lecture Hall 3 is not turning on. Reported by multiple students.', '2025-05-15 12:15:00'),
(28, 'Library System Downtime', 'The digital library system is currently down. IT is investigating the issue.', '2025-05-14 08:45:00'),
(29, 'Air Conditioning Not Working', 'The air conditioning in Computer Lab 2 is not functioning properly.', '2025-05-13 10:05:00'),
(30, 'Access Card Failure at Main Entrance', 'Several students are unable to access the main gate using their student cards.', '2025-05-12 07:20:00'),
(31, 'Exam Portal Login Errors', 'Some students are facing errors when trying to log in to the exam portal.', '2025-05-11 05:50:00'),
(32, 'Power Outage in Residence A', 'There has been a power outage reported in the female residence block A.', '2025-05-10 18:30:00'),
(33, 'Overflowing Dustbins', 'The dustbins near the Engineering building haven’t been cleared for three days.', '2025-05-09 09:10:00'),
(34, 'Water Leakage in Admin Block', 'A pipe has burst near the admin offices causing a water leak.', '2025-05-08 13:00:00'),
(35, 'Moodle Assignment Submission Glitch', 'Students are unable to upload assignments on Moodle for the “IT Fundamentals” module.', '2025-05-07 14:25:00');

-- --------------------------------------------------------

--
-- Table structure for table `lecturer`
--

CREATE TABLE `lecturer` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `permission` int(11) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `lecturer`
--

INSERT INTO `lecturer` (`id`, `username`, `name`, `surname`, `password`, `permission`, `course`, `module`) VALUES
(1, 'mnisi', 'Jane', 'Doe', 'password123', 1, 'CompSci', 'Software'),
(2, 'mnisi', 'Jane', 'Doe', 'password123', 2, 'CompSci', 'Software'),
(13, 'jdoe', 'John', 'Doe', 'password123', 1, 'Computer Science', 'Data Structures'),
(14, 'asmith', 'Alice', 'Smith', 'alice2025', 2, 'Information Systems', 'Database Management'),
(15, 'mbrown', 'Michael', 'Brown', 'mikepass', 1, 'Engineering', 'Thermodynamics'),
(16, 'lwilliams', 'Linda', 'Williams', 'linda_pw', 2, 'Business Administration', 'Marketing Principles'),
(17, 'rjohnson', 'Robert', 'Johnson', 'rob2025', 1, 'Mathematics', 'Calculus I');

-- --------------------------------------------------------

--
-- Table structure for table `maintanance`
--

CREATE TABLE `maintanance` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `reporter` varchar(255) DEFAULT NULL,
  `campus` varchar(255) DEFAULT NULL,
  `building` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `status` varchar(55) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `created_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `maintanance`
--

INSERT INTO `maintanance` (`id`, `title`, `reporter`, `campus`, `building`, `room`, `status`, `message`, `created_time`) VALUES
(16, 'Broken Desk', '221457896@tut4life.ac.za', 'Soshanguve South', 'Library', 'G12', 'Pending', 'Desk in the reading room is broken and unstable.', '2025-05-03 08:15:30'),
(17, 'Water Leak', '221984527@tut4life.ac.za', 'Soshanguve North', 'LG138', 'B14', 'In Progress', 'Leak in the ceiling causing floor to be wet near entrance.', '2025-05-05 06:44:12'),
(18, 'Power Outage', '221763289@tut4life.ac.za', 'Polokwane', 'L65', 'A05', 'Resolved', 'No power in lab room, cannot use computers.', '2025-05-06 11:22:41'),
(19, 'Blocked Sink', '221394728@tut4life.ac.za', 'Emalahleni', 'LG120', 'C10', 'Pending', 'Water not draining in kitchen sink near study room.', '2025-05-07 07:30:00'),
(20, 'WiFi Down', '221283649@tut4life.ac.za', 'Pretoria Campus', '10', 'D20', 'In Progress', 'No internet access in residence block.', '2025-05-08 14:45:50'),
(21, 'AC Not Working', '221184723@tut4life.ac.za', 'Arcadia', '12', 'Lecture Hall 3', 'Resolved', 'Lecture hall is too hot due to faulty air conditioning.', '2025-05-10 09:11:11'),
(22, 'Window Jammed', '221912387@tut4life.ac.za', 'Art', '15', 'Studio A2', 'Pending', 'The window is stuck and can’t open for ventilation.', '2025-05-11 12:05:23'),
(23, 'Door Lock Broken', '221876432@tut4life.ac.za', 'Polokwane', '20', 'C03', 'In Progress', 'The lock of classroom C03 doesn’t secure properly.', '2025-05-13 10:59:01'),
(24, 'No Lights', '221387645@tut4life.ac.za', 'Emalahleni', '8', 'F10', 'Pending', 'Entire corridor lights are not functioning.', '2025-05-14 05:47:19'),
(25, 'Toilet Leaking', '221659832@tut4life.ac.za', 'Pretoria Campus', 'Library', 'Bathroom 1', 'Resolved', 'Leak under the toilet causing puddles on the floor.', '2025-05-15 15:25:45'),
(26, 'Flickering Projector', '221348729@tut4life.ac.za', 'Soshanguve North', 'LG138', 'A01', 'Pending', 'Projector keeps flickering during lessons.', '2025-05-16 08:10:10'),
(27, 'Broken Chair', '221778293@tut4life.ac.za', 'Art', 'L65', 'Studio B1', 'In Progress', 'Chair leg is damaged and unsafe to sit on.', '2025-05-18 11:35:27'),
(28, 'Shattered Window', '221547326@tut4life.ac.za', 'Arcadia', '15', 'Lecture Hall 2', 'Resolved', 'Window shattered during heavy wind storm.', '2025-05-19 07:58:39'),
(29, 'Clogged Drain', '221635748@tut4life.ac.za', 'Soshanguve South', 'LG120', 'Kitchen', 'Pending', 'Drain in kitchenette is blocked, water backs up.', '2025-05-20 13:20:44'),
(30, 'Lift Not Working', '221918374@tut4life.ac.za', 'Pretoria Campus', '10', 'Lift Lobby', 'In Progress', 'Elevator in admin block is stuck on 2nd floor.', '2025-05-21 06:49:59');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `permission` int(11) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `username`, `name`, `surname`, `password`, `permission`, `course`, `module`) VALUES
(73, '221145001@tut4life.a', 'Thabo', 'Mokoena', 'pass1234', 1, 'Computer Science', 'Data Structures'),
(74, '221145002@tut4life.a', 'Lerato', 'Mahlangu', 'myPass22', 1, 'Information Technology', 'Networking'),
(75, '221145003@tut4life.a', 'Kabelo', 'Dlamini', 'abc12345', 1, 'Electrical Engineering', 'Control Systems'),
(76, '221145004@tut4life.a', 'Sibongile', 'Nkosi', 'nkosi321', 1, 'Mechanical Engineering', 'Thermodynamics'),
(77, '221145005@tut4life.a', 'Anele', 'Zulu', 'anepass1', 1, 'Civil Engineering', 'Structural Design'),
(78, '221145006@tut4life.a', 'Tshepo', 'Ngwenya', 'tshe321', 1, 'Computer Science', 'Operating Systems'),
(79, '221145007@tut4life.a', 'Boitumelo', 'Ramaphosa', 'btm4567', 1, 'Information Technology', 'Web Development'),
(80, '221145008@tut4life.a', 'Musa', 'Khumalo', 'musapass', 1, 'Software Engineering', 'Object Oriented Design'),
(81, '221145009@tut4life.a', 'Refilwe', 'Mabena', 'ref123', 1, 'Computer Systems', 'Digital Logic'),
(82, '221145010@tut4life.a', 'Jabulani', 'Mhlongo', 'jabu321', 1, 'Computer Science', 'Algorithms'),
(83, '221145011@tut4life.a', 'Zanele', 'Mashaba', 'zanpass', 1, 'Information Systems', 'Database Design'),
(84, '221145012@tut4life.a', 'Karabo', 'Maluleka', 'karabo99', 1, 'Mechanical Engineering', 'Fluid Mechanics'),
(85, '221145013@tut4life.a', 'Sipho', 'Mokoena', 'sip12345', 1, 'Computer Science', 'Software Engineering'),
(86, '221145014@tut4life.a', 'Bontle', 'Mahlatsi', 'btlmh1', 1, 'IT Management', 'Systems Analysis'),
(87, '221145015@tut4life.a', 'Lebogang', 'Peters', 'lebo222', 1, 'Civil Engineering', 'Surveying'),
(88, '221145016@tut4life.a', 'Neo', 'Mabasa', 'neomabs', 1, 'Computer Engineering', 'Microprocessors'),
(89, '221145017@tut4life.a', 'Nkateko', 'Sithole', 'ntkpass', 1, 'Computer Science', 'Artificial Intelligence'),
(90, '221145018@tut4life.a', 'Gugu', 'Shongwe', 'gugu333', 1, 'Information Technology', 'Cloud Computing'),
(91, '221145019@tut4life.a', 'Katlego', 'Molefe', 'ktl123', 1, 'Network Engineering', 'Routing & Switching'),
(92, '221145020@tut4life.a', 'Nomsa', 'Mbatha', 'nomsapw', 1, 'Software Engineering', 'Design Patterns'),
(93, '221145021@tut4life.a', 'Linda', 'Zwane', 'lindaz1', 1, 'Multimedia', 'Animation Basics'),
(94, '221145022@tut4life.a', 'Samkelisiwe', 'Ndlovu', 'sammie12', 1, 'IT Security', 'Ethical Hacking'),
(95, '221145023@tut4life.a', 'Siyabonga', 'Mnguni', 'syapass', 1, 'Computer Science', 'Machine Learning'),
(96, '221145024@tut4life.a', 'Precious', 'Malema', 'preci0us', 1, 'Computer Engineering', 'Embedded Systems'),
(97, '221145025@tut4life.a', 'Vusi', 'Baloyi', 'vusib7', 1, 'Electrical Engineering', 'Power Systems'),
(98, '221145026@tut4life.a', 'Dineo', 'Modise', 'dmod456', 1, 'Software Development', 'Mobile Applications'),
(99, '221145027@tut4life.a', 'Nthabiseng', 'Molekwa', 'ntabby', 1, 'Information Systems', 'Business Intelligence'),
(100, '221145028@tut4life.a', 'Sizwe', 'Mthembu', 'sizwepw', 1, 'Computer Networks', 'Network Security'),
(101, '221145029@tut4life.a', 'Tebogo', 'Ramaila', 'tebpass', 1, 'Data Science', 'Big Data Analytics'),
(102, '221145030@tut4life.a', 'Palesa', 'Khoza', 'pale123', 1, 'Software Engineering', 'Agile Development');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminstaff`
--
ALTER TABLE `adminstaff`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lecturer`
--
ALTER TABLE `lecturer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maintanance`
--
ALTER TABLE `maintanance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminstaff`
--
ALTER TABLE `adminstaff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `lecturer`
--
ALTER TABLE `lecturer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `maintanance`
--
ALTER TABLE `maintanance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
