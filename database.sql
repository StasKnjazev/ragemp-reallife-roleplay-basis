-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 24. Aug 2020 um 00:06
-- Server-Version: 5.7.31
-- PHP-Version: 7.1.33-16+0~20200514.38+debian9~1.gbp1e5820

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `LakesideRage`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `bans`
--

CREATE TABLE `bans` (
  `ID` int(11) NOT NULL,
  `Username` text NOT NULL,
  `Admin` text NOT NULL,
  `SocialClub` text NOT NULL,
  `Reason` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `userclothing`
--

CREATE TABLE `userclothing` (
  `ID` int(11) NOT NULL,
  `Username` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `userdata`
--

CREATE TABLE `userdata` (
  `ID` int(11) NOT NULL,
  `Username` text NOT NULL,
  `Password` text NOT NULL,
  `SocialClub` text NOT NULL,
  `CharState` text NOT NULL,
  `AdminLevel` int(11) NOT NULL DEFAULT '0',
  `Armor` int(11) NOT NULL DEFAULT '0',
  `Health` int(11) NOT NULL DEFAULT '100',
  `Hunger` int(11) NOT NULL DEFAULT '100',
  `Thirst` int(11) NOT NULL DEFAULT '100',
  `HospitalTime` int(11) NOT NULL DEFAULT '0',
  `Playtime` int(11) NOT NULL DEFAULT '0',
  `Faction` int(11) NOT NULL DEFAULT '0',
  `FactionRank` int(11) NOT NULL DEFAULT '0',
  `SpawnX` int(11) NOT NULL,
  `SpawnY` int(11) NOT NULL,
  `SpawnZ` int(11) NOT NULL,
  `SpawnROT` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `userinventory`
--

CREATE TABLE `userinventory` (
  `ID` int(11) NOT NULL,
  `Username` text NOT NULL,
  `Money` int(11) NOT NULL,
  `Bankmoney` int(20) NOT NULL DEFAULT '0',
  `Jobmoney` int(11) NOT NULL DEFAULT '0',
  `Schokoladenriegel` int(11) NOT NULL DEFAULT '0',
  `Snickers` int(11) NOT NULL DEFAULT '0',
  `Sandwich` int(11) NOT NULL DEFAULT '0',
  `Wasser` int(11) NOT NULL DEFAULT '0',
  `Schokoladendrink` int(11) NOT NULL DEFAULT '0',
  `Trauben` int(11) NOT NULL DEFAULT '0',
  `Traubensaft` int(11) NOT NULL DEFAULT '0',
  `Benzinkanister` int(11) NOT NULL DEFAULT '0',
  `Verbandskasten` int(11) NOT NULL DEFAULT '0',
  `Reperaturkasten` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `uservehicles`
--

CREATE TABLE `uservehicles` (
  `ID` int(11) NOT NULL,
  `Owner` text NOT NULL,
  `VehName` text NOT NULL,
  `Fuel` int(100) NOT NULL DEFAULT '100',
  `Distance` int(11) NOT NULL DEFAULT '0',
  `PosX` int(11) NOT NULL,
  `PosY` int(11) NOT NULL,
  `PosZ` int(11) NOT NULL,
  `RotX` int(11) NOT NULL,
  `RotY` int(11) NOT NULL,
  `RotZ` int(11) NOT NULL,
  `Garage` int(11) NOT NULL DEFAULT '0',
  `ColorPrim` int(11) NOT NULL DEFAULT '0',
  `ColorSec` int(11) NOT NULL DEFAULT '0',
  `ColorNeon` int(11) NOT NULL DEFAULT '0',
  `Lights` varchar(11) NOT NULL DEFAULT '-1',
  `Wheels` varchar(11) NOT NULL DEFAULT '-1',
  `Spoiler` int(11) NOT NULL DEFAULT '-1',
  `Exhaust` int(11) NOT NULL DEFAULT '-1',
  `Engine` varchar(11) NOT NULL DEFAULT '-1',
  `Lowering` varchar(11) NOT NULL DEFAULT '-1',
  `Breaks` int(11) NOT NULL DEFAULT '-1',
  `Transmission` int(11) NOT NULL DEFAULT '-1',
  `Turbo` int(11) NOT NULL DEFAULT '-1',
  `Schokoladenriegel` int(11) NOT NULL DEFAULT '0',
  `Snickers` int(11) NOT NULL DEFAULT '0',
  `Sandwich` int(11) NOT NULL DEFAULT '0',
  `Wasser` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `bans`
--
ALTER TABLE `bans`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `userclothing`
--
ALTER TABLE `userclothing`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `userinventory`
--
ALTER TABLE `userinventory`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `uservehicles`
--
ALTER TABLE `uservehicles`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `bans`
--
ALTER TABLE `bans`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `userclothing`
--
ALTER TABLE `userclothing`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT für Tabelle `userdata`
--
ALTER TABLE `userdata`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT für Tabelle `userinventory`
--
ALTER TABLE `userinventory`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT für Tabelle `uservehicles`
--
ALTER TABLE `uservehicles`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
