﻿




CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 СерНомПаспорта INT NULL,
 Телефон INT NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ФормаРегКарт (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Сотрудник UUID NOT NULL,
 Комната UUID NOT NULL,
 Гость UUID NOT NULL,
 Карты UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧРегВхода (
 primaryKey UUID NOT NULL,
 Карты UUID NOT NULL,
 Сотрудник UUID NOT NULL,
 Гость UUID NOT NULL,
 ФормаРегВхода UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ФормаРегВхода (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Комната UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Карты (
 primaryKey UUID NOT NULL,
 КодКарты INT NULL,
 ТипКарты VARCHAR(13) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 КодДолжности INT NULL,
 Должность VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Гость (
 primaryKey UUID NOT NULL,
 Фамилия VARCHAR(255) NOT NULL,
 Имя VARCHAR(255) NOT NULL,
 Отчество VARCHAR(255) NULL,
 ДатаРождения TIMESTAMP(3) NOT NULL,
 СерНомПаспорта INT NOT NULL,
 Телефон INT NULL,
 Почта VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Комната (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 Этаж INT NULL,
 КолвоКроват INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Сотрудник ADD CONSTRAINT FKcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 on Сотрудник (Должности); 

 ALTER TABLE ФормаРегКарт ADD CONSTRAINT FK136efe64414180bb15389585d53c2ed904831f7d FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index136efe64414180bb15389585d53c2ed904831f7d on ФормаРегКарт (Сотрудник); 

 ALTER TABLE ФормаРегКарт ADD CONSTRAINT FKb02d5ebadb28661f17404a3d98989313875b6b7d FOREIGN KEY (Комната) REFERENCES Комната; 
CREATE INDEX Indexb02d5ebadb28661f17404a3d98989313875b6b7d on ФормаРегКарт (Комната); 

 ALTER TABLE ФормаРегКарт ADD CONSTRAINT FK35cd7b108f8f17b8890cf054126541b493af43e3 FOREIGN KEY (Гость) REFERENCES Гость; 
CREATE INDEX Index35cd7b108f8f17b8890cf054126541b493af43e3 on ФормаРегКарт (Гость); 

 ALTER TABLE ФормаРегКарт ADD CONSTRAINT FKf8d9efa32dc3fdbfb95893c7f3f95ef259259f12 FOREIGN KEY (Карты) REFERENCES Карты; 
CREATE INDEX Indexf8d9efa32dc3fdbfb95893c7f3f95ef259259f12 on ФормаРегКарт (Карты); 

 ALTER TABLE ТЧРегВхода ADD CONSTRAINT FK3f51131633bea5497ecf5cac66d4f309c2f8f7f7 FOREIGN KEY (Карты) REFERENCES Карты; 
CREATE INDEX Index3f51131633bea5497ecf5cac66d4f309c2f8f7f7 on ТЧРегВхода (Карты); 

 ALTER TABLE ТЧРегВхода ADD CONSTRAINT FK4bd3a8e1ca1d612514ac54c561db3144cc56da5e FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Index4bd3a8e1ca1d612514ac54c561db3144cc56da5e on ТЧРегВхода (Сотрудник); 

 ALTER TABLE ТЧРегВхода ADD CONSTRAINT FKc21fc25ed805fb593674002916e97c852b47fd9c FOREIGN KEY (Гость) REFERENCES Гость; 
CREATE INDEX Indexc21fc25ed805fb593674002916e97c852b47fd9c on ТЧРегВхода (Гость); 

 ALTER TABLE ТЧРегВхода ADD CONSTRAINT FK3d5d808fca479d2af43644b2135a119d83532eb7 FOREIGN KEY (ФормаРегВхода) REFERENCES ФормаРегВхода; 
CREATE INDEX Index3d5d808fca479d2af43644b2135a119d83532eb7 on ТЧРегВхода (ФормаРегВхода); 

 ALTER TABLE ФормаРегВхода ADD CONSTRAINT FKc8955cd814d58771ce96d9e4082de02d6ee34b27 FOREIGN KEY (Комната) REFERENCES Комната; 
CREATE INDEX Indexc8955cd814d58771ce96d9e4082de02d6ee34b27 on ФормаРегВхода (Комната); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

