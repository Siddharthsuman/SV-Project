var PLAY=3;
var END1=2;
var END2=13;
var END3=14;
var STORY=1;
var BEGIN=0
var ARDO=4;
var NECRO=5;
var DRAGON=6;
var DRAGON2=6.1;
var NECRO2=5.2;
var ARDO2=4.2;
var BOSSF1=7;
var BOSSF2=8;
var BOSSF3=9;
var WIN1=10;
var WIN2=11;
var WIN3=12;
var gameState=BEGIN;
var Next1,Next2,Next3;
var Next1Img,Next2Img,Next3Img;
var Otscore=0;
var score=0;
var C1,C2,C3,C1Img,C2Img,C3Img;
var Abbigail,AbbigailRun;
var Ground;
var ABST,ARST,LUST;
var ABSTImg,ARSTImg,LUSTImg;
var Lucan,LucanRun;
var Thalleous,ThalleousRun;
var start1,start2,start3,start4,start5,start6,start7,start8,start9,start10,start11,start12,start13,start14,start15,start16,start17,start18,start19,start20,start21;
var start1Img,start2Img,start3Img,start4Img,start5Img,start6Img,start7Img,start8Img,start9Img,start10Img,start11Img,start12Img,start13Img,start14Img,start15Img,start16Img,start17Img,start18Img,start19Img,start20Img,start21Img;
var SToB,StobImg,StartB,StartBImg;
var Start,StartImg
var BackB,BackBImg;
var AbbigailJ,ThalleousJ,LucanJ;
var ABBackground1,ABBackground2,ABBackground3,ABBackground4;
var ABBackground1Img,ABBackground2Img,ABBackground3Img,ABBackground4Img;
var NEBackground1,NEBackground2,NEBackground3,NEBackground4,NEBackground5,NEBackground6;
var NEBackground1Img,NEBackground2Img,NEBackground3Img,NEBackground4Img,NEBackground5Img,NEBackground6Img;
var ARBackground1,ARBackground2,ARBackground3,ARBackground4,ARBackground5,ARBackground6;
var ARBackground1,ARBackground2,ARBackground3Img,ARBackground4Img,ARBackground5Img,ARBackground6Img;
var Grim,GrimAnim,GrimGroup;
var Zombie,ZombieGroup,ZombieAnim;
var Jalkar,JalkarAnim,JalkarGroup;
var WitherHead,WitherHeadGroup,WitherHeadImg;
var Voltaris1,Voltaris1Group,Voltaris1Anim;
var Voltaris2,Voltaris2Group,Voltaris2Anim;
var ThalleousSR,LucanSR,Arrow,Bow,SwordT,SwordL;
var BowImg,SwordTImg,SwordLImg,ArrowGroup,ArrowImg;
var Ground2,Ground3,ARBackground5,ARBackground5Img;
var Mysound;
var DEgg,DEggImg,Enderman,EndermanImg;
var FT1score=0;
var Health1=100,Health2=100,Health3=100;
var TeleportS1,AttackS=0;
var Result1,Result1Img,Result2,Result2Img,Result3,Result3Img;
var Creeper,CreeperAnim,CreeperGroup;
var Necromancer,NecromancerImg;
var ZombieS,LucanSTA;
var ThalleousSTA,TalkS=0;
var TYGround;
var Tygren,TygrenS,Rock,TygrenTalk,TygrenW;
var Show,ShowImg;
var EQ,EQAnim,DirtTex;
var Fight,FightAnim;
var ThalleousPower;
var TAT,TYT,Talk1,Talk2,Talk3,Talk4,Talk5;
var TygrenA,ThalleousDie;
var Gameover,GameOverImg1,GameOverImg2,GameOverImg3;
var Restart1,Restart2,Restart3,RestartImg;
var ABGuide,ARGuide,NEGuide;
var ABG1,ABG2,ABG3,ARG1,ARG2,ARG3,ARG4,NEG1,NEG2,NEG3;
var EnergyBall,EnergyBallAnim,EnergyBallGroup;
var TBCS,CreeperS,JumpS;
var ABSound1;
function preload(){
  start1Img=loadImage("Story/S1.jpg")
  start2Img=loadImage("Story/S2.jpg")
  start3Img=loadImage("Story/S3.jpg")
  start4Img=loadImage("Story/S4.jpg")
  start5Img=loadImage("Story/S5.jpg")
  start6Img=loadImage("Story/S6.jpg")
  start7Img=loadImage("Story/S7.jpg")
  start8Img=loadImage("Story/S8.jpg")
  start9Img=loadImage("Story/S9.jpg")
  start10Img=loadImage("Story/S10.jpg")
  start11Img=loadImage("Story/S11.jpg")
  start12Img=loadImage("Story/S12.jpg")
  start13Img=loadImage("Story/S13.png")
  start14Img=loadImage("Story/S14.png")
  start15Img=loadImage("Story/S15.png")
  start16Img=loadImage("Story/S16.png")
  start17Img=loadImage("Story/S17.jpg")
  start18Img=loadImage("Story/S18.jpg")
  start19Img=loadImage("Story/S19.jpg")
  start20Img=loadImage("Story/S20.jpg")
  start21Img=loadImage("Story/S21.jpg")

  StobImg=loadImage("Buttons/StoryB.jpg");
  StartImg=loadImage("Story/Start.jpg");
  StartBImg=loadImage("Buttons/StartB.jpg")
  BackBImg=loadImage("Buttons/backbutton.png")


  C1Img=loadImage("Choose/Aaj.jpg")
  C2Img=loadImage("Choose/Ard.png")
  C3Img=loadImage("Choose/Lnn.png")

  AbbigailRun=loadAnimation("AAE/AB1.png","AAE/AB2.png","AAE/AB3.png","AAE/AB4.png","AAE/AB5.png","AAE/AB6.png","AAE/AB7.png","AAE/AB8.png","AAE/AB9.png");
  LucanRun=loadAnimation("LAN/L1.png","LAN/L2.png","LAN/L3.png","LAN/L4.png","LAN/L5.png","LAN/L6.png","LAN/L7.png","LAN/L8.png","LAN/L9.png","LAN/L10.png")
  ThalleousRun=loadAnimation("Thalleous/T1.png","Thalleous/T2.png","Thalleous/T3.png","Thalleous/T4.png","Thalleous/T5.png","Thalleous/T6.png","Thalleous/T7.png","Thalleous/T8.png","Thalleous/T9.png","Thalleous/T10.png","Thalleous/T11.png")

ABBackground1Img=loadImage("ABBACK/AB1.png")
ABBackground2Img=loadImage("ABBACK/AB2.png")
ABBackground3Img=loadImage("ABBACK/AB3.png")
ABBackground4Img=loadImage("ABBACK/AB4.png")

NEBackground1Img=loadImage("NEBACK/NE1.png")
NEBackground2Img=loadImage("NEBACK/NE2.png")
NEBackground3Img=loadImage("NEBACK/NE3.png")
NEBackground4Img=loadImage("NEBACK/NE4.png")
NEBackground5Img=loadImage("NEBACK/NE5.png")
NEBackground6Img=loadImage("NEBACK/NE6.png")

ARBackground1Img=loadImage("ARBACK/Forest.png");
ARBackground2Img=loadImage("ARBACK/SnowP.png");
ARBackground3Img=loadImage("ARBACK/Fight.png");
ARBackground4Img=loadImage("ARBACK/Forest2.png");
ARBackground5Img=loadImage("ARBACK/End.png")

ABSTImg=loadImage("OST/ABBISE.png");
LUSTImg=loadImage("OST/LUCANSE.png");
ARSTImg=loadImage("OST/ARSE.png");
   
Next1Img=loadImage("Buttons/Next.png");
Next2Img=loadImage("Buttons/Next2.png");
Next3Img=loadImage("Buttons/Next3.png");
  
GrimAnim=loadAnimation("Enemy/Grim.png","Enemy/Grim2.png","Enemy/Grim3.png","Enemy/Grim4.png")
JalkarAnim=loadAnimation("AAE/JA1.png","AAE/JA2.png","AAE/JA3.png","AAE/JA4.png","AAE/JA5.png")

AbbigailJ=loadImage("JUMP/Abbigail.png");
LucanJ=loadImage("JUMP/Lucan.png");
ThalleousJ=loadImage("JUMP/Thalleous.png")

ZombieAnim=loadAnimation("Zombies/Z1.png","Zombies/Z2.png","Zombies/Z3.png","Zombies/Z4.png","Zombies/Z5.png","Zombies/Z6.png","Zombies/Z7.png","Zombies/Z8.png","Zombies/Z9.png");      
WitherHeadImg=loadImage("Enemy/Skeleton.jpg");      

Voltaris1Anim=loadAnimation("Voltaris/V1.png","Voltaris/V2.png","Voltaris/V3.png","Voltaris/V4.png","Voltaris/V5.png","Voltaris/V6.png","Voltaris/V7.png","Voltaris/V8.png","Voltaris/V9.png");
Voltaris2Anim=loadAnimation("Voltaris/VS1.png","Voltaris/VS2.png","Voltaris/VS3.png","Voltaris/VS4.png");

ArrowImg=loadImage("Weapons/Arrow.png");
BowImg=loadImage("Weapons/Bow.png");

ThalleousSR=loadAnimation("Thalleous/TS1.png","Thalleous/TS2.png","Thalleous/TS3.png","Thalleous/TS4.png","Thalleous/TS5.png","Thalleous/TS6.png","Thalleous/TS7.png","Thalleous/TS8.png","Thalleous/TS9.png","Thalleous/TS10.png")
LucanSR=loadAnimation("LAN/LS1.png","LAN/LS2.png","LAN/LS3.png","LAN/LS4.png","LAN/LS5.png","LAN/LS6.png","LAN/LS7.png","LAN/LS8.png","LAN/LS9.png","LAN/LS10.png")

SwordTImg=loadImage("Thalleous/Sword.png");
SwordLImg=loadImage("LAN/Sword.png")
BowImg=loadImage("Weapons/Bow.png");

Mysound=loadSound("Loop/MySound.mp3");

DEggImg=loadImage("AAE/Degg.png");
EndermanImg=loadImage("AAE/Enderman.png");

TeleportS1=loadSound("Sound/EndermanT.mp3");       

Result1Img=loadImage("Result/ABRE.png");
Result2Img=loadImage("Result/LURE.png");
Result3Img=loadImage("Result/ARRE.png");

CreeperAnim=loadAnimation("Creeper/C1.png","Creeper/C2.png","Creeper/C3.png","Creeper/C4.png","Creeper/C5.png","Creeper/C6.png","Creeper/C7.png","Creeper/C8.png","Creeper/C9.png")

NecromancerImg=loadImage("LAN/N1.png");

ZombieS=loadSound("Sound/Zombie.mp3")

LucanSTA=loadImage("LAN/LSE.png");
ThalleousSTA=loadImage("Thalleous/EndT.png");

ShowImg=loadImage("Choose/SOW.png")

EQAnim=loadAnimation("AREND/ETA1.png","AREND/ETA2.png","AREND/ETA3.png")

TygrenS=loadAnimation("AREND/TEX.png");
TygrenTalk=loadAnimation("AREND/TY2.png");
TygrenW=loadAnimation("AREND/TYS.png")

DirtTex=loadImage("AREND/DT.png")

FightAnim=loadAnimation("AREND/TVTF1.png","AREND/TVTF2.png","AREND/TVTF3.png","AREND/TVTF4.png","AREND/TVTF5.png","AREND/TVTF6.png","AREND/TVTF7.png","AREND/TVTF8.png","AREND/TVTF9.png","AREND/TVTF10.png","AREND/TVTF11.png","AREND/TVTF12.png","AREND/TVTF13.png","AREND/TVTF14.png","AREND/TVTF15.png","AREND/TVTF16.png","AREND/TVTF17.png","AREND/TVTF18.png","AREND/TVTF19.png","AREND/TVTF20.png")

Talk1=loadImage("TALK/TK1.png");
Talk2=loadImage("TALK/TK2.png");
Talk3=loadImage("TALK/TA1.png");
Talk4=loadImage("TALK/TA2.png");
Talk5=loadImage("TALK/TK3.png");

ThalleousPower=loadAnimation("AREND/EA1.png","AREND/EA2.png");
TygrenA=loadAnimation("AREND/VPS1.png","AREND/VPS2.png","AREND/VPS3.png","AREND/VPS4.png","AREND/VPS5.png","AREND/VPS6.png")
ThalleousDie=loadAnimation("AREND/THD1.png","AREND/THD2.png","AREND/THD3.png","AREND/THD4.png")


RestartImg=loadImage("Background/Restart.png");

GameOverImg1=loadImage("GAMEOVER/ABGO2.png");
GameOverImg2=loadImage("GAMEOVER/ARGO2.png");
GameOverImg3=loadImage("GAMEOVER/NEGO2.png");

ABG1=loadImage("GUIDE/ABG1.png");
ABG2=loadImage("GUIDE/ABG2.png");
ABG3=loadImage("GUIDE/ABG3.png");

ARG1=loadImage("GUIDE/ARG1.png");
ARG2=loadImage("GUIDE/ARG2.png");
ARG3=loadImage("GUIDE/ARG3.png");
ARG4=loadImage("GUIDE/ARG4.png");

NEG1=loadImage("GUIDE/NEG1.png");
NEG2=loadImage("GUIDE/NEG2.png");
NEG3=loadImage("GUIDE/NEG3.png");

EnergyBallAnim=loadAnimation("AREND/TEB1.png","AREND/TEB2.png","AREND/TEB3.png","AREND/TEB4.png","AREND/TEB5.png","AREND/TEB6.png","AREND/TEB7.png","AREND/TEB8.png","AREND/TEB9.png","AREND/TEB10.png","AREND/TEB11.png")
TBCS=loadSound("Sound/TEB.mp3");

CreeperS=loadSound("Sound/CreeperS.mp3");

JumpS=loadSound("Sound/Jump.mp3");

ABSound1=loadSound("ABSOUND/ARS1.mp3");

}


function setup() {
  createCanvas(1350,670);
  


Stob=createSprite(1230,450,1,1);
Stob.addImage(StobImg);
Stob.scale=0.15;
Stob.visible=true 

StartB=createSprite(1230,550,1,1);
StartB.addImage(StartBImg);
StartB.scale=0.35


start1=createSprite(670,350,1,1);
start1.addImage(start1Img);
start1.scale=1;
start1.visible=false;

start2=createSprite(670,320,1,1);
start2.addImage(start2Img);
start2.scale=1;
start2.visible=false;

start3=createSprite(670,350,1,1);
start3.addImage(start3Img);
start3.scale=1;
start3.visible=false;

start4=createSprite(670,350,1,1);
start4.addImage(start4Img);
start4.scale=1;
start4.visible=false;

start5=createSprite(670,350,1,1);
start5.addImage(start5Img);
start5.scale=1;
start5.visible=false;

start6=createSprite(670,350,1,1);
start6.addImage(start6Img);
start6.scale=1;
start6.visible=false;

start7=createSprite(670,350,1,1);
start7.addImage(start7Img);
start7.scale=1;
start7.visible=false;

start8=createSprite(670,350,1,1);
start8.addImage(start8Img);
start8.scale=1;
start8.visible=false;

start9=createSprite(670,350,1,1);
start9.addImage(start9Img);
start9.scale=1;
start9.visible=false;

start10=createSprite(670,350,1,1);
start10.addImage(start10Img);
start10.scale=1;
start10.visible=false;

start11=createSprite(670,330,1,1);
start11.addImage(start11Img);
start11.scale=0.95;
start11.visible=false;

start12=createSprite(670,350,1,1);
start12.addImage(start12Img);
start12.scale=1;
start12.visible=false;

start13=createSprite(670,350,1,1);
start13.addImage(start13Img);
start13.scale=0.6;
start13.visible=false;

start14=createSprite(670,350,1,1);
start14.addImage(start14Img);
start14.scale=0.6;
start14.visible=false;

start15=createSprite(670,350,1,1);
start15.addImage(start15Img);
start15.scale=0.6;
start15.visible=false;

start16=createSprite(670,350,1,1);
start16.addImage(start16Img);
start16.scale=0.6;
start16.visible=false;

start17=createSprite(670,350,1,1);
start17.addImage(start17Img);
start17.scale=1;
start17.visible=false;

start18=createSprite(670,350,1,1);
start18.addImage(start18Img);
start18.scale=1;
start18.visible=false;

start19=createSprite(670,350,1,1);
start19.addImage(start19Img);
start19.scale=1;
start19.visible=false;

start20=createSprite(670,350,1,1);
start20.addImage(start20Img);
start20.scale=1;
start20.visible=false;

start21=createSprite(670,350,1,1);
start21.addImage(start21Img);
start21.scale=1;
start21.visible=false;

BackB=createSprite(1130,550,1,1);
BackB.addImage(BackBImg);
BackB.scale=0.15;
BackB.visible=false

C1=createSprite(200,290,1,1);
C1.addImage(C1Img);
C1.scale=0.4
C1.visible=false;

C2=createSprite(620,290,1,1);
C2.addImage(C2Img);
C2.scale=0.4;
C2.visible=false;

C3=createSprite(1050,290,1,1);
C3.addImage(C3Img);
C3.scale=0.4;
C3.visible=false;

Abbigail=createSprite(100,500,20,20);
Abbigail.addAnimation("ABRun",AbbigailRun);
Abbigail.scale=0.3;
Abbigail.visible=false;
Abbigail.addAnimation("AJ",AbbigailJ);

Lucan=createSprite(100,500,20,20);
Lucan.addAnimation("LUCRun",LucanRun);
Lucan.addAnimation("LJ",LucanJ);
Lucan.addAnimation("LSR",LucanSR);
Lucan.addImage("LSTA",LucanSTA);
Lucan.scale=0.3;
Lucan.visible=false;

Thalleous=createSprite(100,500,20,20);
Thalleous.addAnimation("ThalleousR",ThalleousRun);
Thalleous.addAnimation("TS",ThalleousSTA);
Thalleous.scale=0.4;
Thalleous.visible=false;
Thalleous.addAnimation("TJ",ThalleousJ);
Thalleous.addAnimation("TSR",ThalleousSR);
Thalleous.addAnimation("TEA",ThalleousPower);
Thalleous.addAnimation("TDIE",ThalleousDie);

Tygren=createSprite(1100,185,100,100);
Tygren.addAnimation("TAS",TygrenS);
Tygren.addAnimation("TTalk",TygrenTalk);
Tygren.addAnimation("TYS",TygrenW);
Tygren.addAnimation("TYA",TygrenA);
Tygren.scale=0.35;
Tygren.visible=false;


Rock=createSprite(1200,470,400,450);
Rock.addImage(DirtTex);
Rock.visible=false;


Ground=createSprite(670,655,1500,20);
Ground.visible=false;

Ground2=createSprite(670,700,1500,20);
Ground2.visible=false;

Ground3=createSprite(670,900,1500,20);
Ground3.visible=false;


  SwordT=createSprite(1440,600,10,10);
   SwordT.addImage(SwordTImg);
   SwordT.scale=3;

   SwordL=createSprite(1440,600,10,10);
   SwordL.addImage(SwordLImg);
   SwordL.scale=5;

   Bow=createSprite(1440,600,10,10);
   Bow.addImage(BowImg);
   Bow.scale=0.6;

//Other
DEgg=createSprite(1440,580,10,10)
DEgg.addImage(DEggImg);
DEgg.scale=0.44;


Fight=createSprite(600,540,100,100);
Fight.addAnimation("Fight",FightAnim);
Fight.scale=0.35
Fight.visible=false;


//Showpiece
Show=createSprite(700,100,10,10);
Show.addImage(ShowImg);
Show.scale=0.6;

//TYGREN MEET TO THALLEOUS
TAT=createSprite(250,100,100,100);
TAT.addImage(Talk3);
TAT.scale=0.6;
TAT.visible=false;


TYT=createSprite(1100,60,100,100);
TYT.addImage(Talk1);
TYT.scale=0.6;
TYT.visible=false;

//BOSSES
Enderman=createSprite(1000,500,10,10);
Enderman.addImage(EndermanImg);
Enderman.scale=0.5;
Enderman.visible=false;

Necromancer=createSprite(1100,510,10,10);
Necromancer.addImage(NecromancerImg);
Necromancer.scale=0.3;
Necromancer.visible=false;

//Effects
EQ=createSprite(600,600,10,01);
EQ.addAnimation("EQA",EQAnim);
EQ.visible=false


//RESTART AND GAMEOVER
Restart1=createSprite(600,300,1,1);
Restart1.addImage(RestartImg);
Restart1.visible=false;

Restart2=createSprite(600,300,1,1);
Restart2.addImage(RestartImg);
Restart2.visible=false;

Restart3=createSprite(1000,300,1,1);
Restart3.addImage(RestartImg);
Restart3.visible=false;

Gameover=createSprite(680,360,1,1)
Gameover.visible=false;

//GUIDE
ABGuide=createSprite(600,100,10,10);
ABGuide.addImage(ABG1);
ABGuide.scale=0.5;
ABGuide.visible=false;

ARGuide=createSprite(600,100,10,10);
ARGuide.addImage(ARG1);
ARGuide.scale=0.5;
ARGuide.visible=false;

NEGuide=createSprite(600,100,10,10);
NEGuide.addImage(NEG1);
NEGuide.scale=0.5;
NEGuide.visible=false;


// Result
Result1=createSprite(675,360,10,10);
Result1.addImage(Result1Img);
Result1.scale=0.99;
Result1.visible=false;

Result2=createSprite(675,360,10,10);
Result2.addImage(Result2Img);
Result2.scale=0.99;
Result2.visible=false;

Result3=createSprite(675,360,10,10);
Result3.addImage(Result3Img);
Result3.scale=0.989;
Result3.visible=false;

//ABBIGAIL BACKGROUND
ABBackground1=createSprite(695,335,2,2);
ABBackground1.addImage(ABBackground1Img);
ABBackground1.scale=1.2;
ABBackground1.visible=false;

ABBackground2=createSprite(675,335,2,2);
ABBackground2.addImage(ABBackground2Img);
ABBackground2.scale=1.2;
ABBackground2.visible=false;

ABBackground3=createSprite(675,335,2,2);
ABBackground3.addImage(ABBackground3Img);
ABBackground3.scale=1.2;
ABBackground3.visible=false;

ABBackground4=createSprite(675,335,2,2);
ABBackground4.addImage(ABBackground4Img);
ABBackground4.scale=1.2;
ABBackground4.visible=false;

//LUCAN BACKGROUND
NEBackground1=createSprite(675,335,2,2);
NEBackground1.addImage(NEBackground1Img);
NEBackground1.scale=1.2;
NEBackground1.visible=false;

NEBackground2=createSprite(675,335,2,2);
NEBackground2.addImage(NEBackground2Img);
NEBackground2.scale=1.2;
NEBackground2.visible=false;

NEBackground3=createSprite(675,335,2,2);
NEBackground3.addImage(NEBackground3Img);
NEBackground3.scale=1.2;
NEBackground3.visible=false;

NEBackground4=createSprite(675,335,2,2);
NEBackground4.addImage(NEBackground4Img);
NEBackground4.scale=1.2;
NEBackground4.visible=false;

NEBackground5=createSprite(675,335,2,2);
NEBackground5.addImage(NEBackground5Img);
NEBackground5.scale=1.2;
NEBackground5.visible=false;

NEBackground6=createSprite(675,335,2,2);
NEBackground6.addImage(NEBackground6Img);
NEBackground6.scale=1.2;
NEBackground6.visible=false;

//Ardoni Background

ARBackground1=createSprite(675,335,2,2);
ARBackground1.addImage(ARBackground1Img);
ARBackground1.scale=1.2;
ARBackground1.visible=false

ARBackground2=createSprite(675,335,2,2);
ARBackground2.addImage(ARBackground2Img);
ARBackground2.scale=1.2;
ARBackground2.visible=false

ARBackground3=createSprite(675,335,2,2);
ARBackground3.addImage(ARBackground3Img);
ARBackground3.scale=1.2;
ARBackground3.visible=false

ARBackground4=createSprite(675,335,2,2);
ARBackground4.addImage(ARBackground4Img);
ARBackground4.scale=1.2;
ARBackground4.visible=false;

ARBackground5=createSprite(675,335,2,2);
ARBackground5.addImage(ARBackground5Img);
ARBackground5.scale=1.2;
ARBackground5.visible=false;

ABST=createSprite(675,365,1,1);
ABST.addImage(ABSTImg);
ABST.scale=0.99;
ABST.visible=false;

LUST=createSprite(675,340,1,1);
LUST.addImage(LUSTImg);
LUST.scale=0.99;
LUST.visible=false;

ARST=createSprite(675,353,1,1);
ARST.addImage(ARSTImg);
ARST.scale=0.99;
ARST.visible=false;

Next1=createSprite(1000,500,1,1);
Next1.addImage(Next1Img);
Next1.scale=0.1;
Next1.visible=false;
  
Next2=createSprite(1100,500,1,1);
Next2.addImage(Next2Img);
Next2.scale=0.1;
Next2.visible=false;
  
Next3=createSprite(1200,500,1,1);
Next3.addImage(Next3Img);
Next3.scale=0.1;
Next3.visible=false;

GrimGroup = new Group();
JalkarGroup= new Group();
ZombieGroup= new Group();
WitherGroup= new Group();
Voltaris1Group= new Group();
Voltaris2Group= new Group();
ArrowGroup= new Group();
CreeperGroup=new Group();
EnergyBallGroup= new Group();

}

function draw() {
  background(StartImg);  
 textSize(30)
 
 

  console.log(gameState)
  start21.depth = start21.depth;
    BackB.depth =start21.depth + 1;
 if(mousePressedOver(Stob)){
gameState=STORY;
  }
 
  if(gameState===STORY){
    Show.visible=false;
    Otscore = Otscore + Math.round(getFrameRate()/60);
    if(Otscore>3){
      start1.visible=true;
      Stob.visible=false;
      StartB.visible=false;
      BackB.visible=true;
    }
   if(Otscore>30){
     start1.visible=false;
     start2.visible=true;
   }
   if(Otscore>180){
    start2.visible=false;
    start3.visible=true;
  }
  if(Otscore>290){
    start3.visible=false;
    start4.visible=true;
  }
  if(Otscore>450){
    start4.visible=false;
    start5.visible=true;
  }
  if(Otscore>640){
    start5.visible=false;
    start6.visible=true;
  }
  if(Otscore>810){
    start6.visible=false;
    start7.visible=true;
  }
  if(Otscore>960){
    start7.visible=false;
    start8.visible=true;
  }
  if(Otscore>1200){
    start8.visible=false;
    start9.visible=true;
  }
  if(Otscore>1440){
    start9.visible=false;
    start10.visible=true;
  }
  if(Otscore>1680){
    start10.visible=false;
    start11.visible=true;
  }
  if(Otscore>1930){
    start11.visible=false;
    start12.visible=true;
  }
  if(Otscore>2060){
    start12.visible=false;
    start13.visible=true;
  } 
  if(Otscore>2280){
    start13.visible=false;
    start14.visible=true;
  }
  if(Otscore>2500){
    start14.visible=false;
    start15.visible=true;
  }
  if(Otscore>2850){
    start15.visible=false;
    start16.visible=true;
  } 
  if(Otscore>3150){
    start16.visible=false;
    start17.visible=true;
  }
  if(Otscore>3300){
    start16.visible=false;
    start17.visible=true;
  }
  if(Otscore>3720){
    start17.visible=false;
    start18.visible=true;
  }
  if(Otscore>4000){
    start18.visible=false;
    start19.visible=true;
  }
  if(Otscore>4280){
    start19.visible=false;
    start20.visible=true;
    BackB.visible=true;
  }
  if(Otscore>4630){
    start20.visible=false;
    start21.visible=true;
    BackB.visible=true;
    
  }
  if(Otscore>4800){
    start21.visible=false;
  }
  if(mousePressedOver(BackB)){
    start1.visible=false;
    start21.visible=false;
    BackB.visible=false;
    StartB.visible=true;
    Stob.visible=true;
    Otscore=0
    gameState=BEGIN
  }
  }
if(gameState===BEGIN){
  start1.visible=false;
  start2.visible=false;
  start3.visible=false;
  start4.visible=false;
  start5.visible=false;
  start6.visible=false;
  start7.visible=false;
  start8.visible=false;
  start8.visible=false;
  start10.visible=false;
  start11.visible=false;
  start12.visible=false;
  start13.visible=false;
  start14.visible=false;
  start15.visible=false;
  start16.visible=false;
  start17.visible=false;
  start18.visible=false;
  start18.visible=false;
  start20.visible=false;
  start21.visible=false;
  Result1.visible=false;
  StartB.visible=true;
  Stob.visible=true;
  BackB.visible=false;
 Show.visible=true;
  if(mousePressedOver(StartB)){
    gameState=PLAY
  }
}
  if(gameState===PLAY){
    fill(247, 228, 61);
    textSize(35);
    Stob.visible=false;
    StartB.visible=false;
    text("Which type of group do you want to play ???",120,25)
   C1.visible=true;
   C2.visible=true;
   C3.visible=true;
   Show.visible=false;
   console.log('before if'+ gameState)
  
 
  }
  if(mousePressedOver(C1)&& gameState===PLAY){
   gameState=DRAGON2;
   ABST.visible=true;
    C1.visible=false;
    C2.visible=false;
    C3.visible=false;
  StartB.visible=false;
    Stob.visible=false;
    console.log('After if'+gameState)
    
      }
      if(mousePressedOver(C2)&& gameState===PLAY){
       gameState= ARDO2;
   ARST.visible=true;
   C1.visible=false;
        C2.visible=false;
        C3.visible=false;
        StartB.visible=false;
        Stob.visible=false;
        console.log('After if'+gameState);
        
          }
          
          if(mousePressedOver(C3)&& gameState===PLAY){
        gameState=NECRO2;
   LUST.visible=true;
         C1.visible=false;
        C2.visible=false;
        C3.visible=false;
        StartB.visible=false;
        Stob.visible=false;
       // console.log('After if'+gameState)
         }
         if(gameState===DRAGON2){
           ABST.visible=true;
           Next1.visible=true;
         }

         if(mousePressedOver(Next1)){
          gameState=DRAGON;
          console.log(gameState);
          Next2.visible=false;
            LUST.visible=false;
        }

        if(gameState===ARDO2){
          ARST.visible=true;
          Next2.visible=true;
        }
        if(mousePressedOver(Next2)){
         gameState=ARDO;
       }
       if(gameState===NECRO2){
        LUST.visible=true;
        Next3.visible=true;
          
      }
     if(mousePressedOver(Next3)){
       gameState=NECRO;
     }

if(gameState===DRAGON){
  Abbigail.visible=true;
  Ground.visible=true;
 ABGuide.visible=true;
 //ABSound1.loop=false;
 //ABSound1.play();        
  
 ABBackground1.depth = ABBackground1.depth;
 ABGuide.depth = ABBackground1.depth + 1;
  Gameover.visible=false;
  Restart1.visible=false;
  ABST.visible=false;
  text("Score: "+ score, 1150,30);    
 ABBackground1.depth = ABBackground1.depth;
  Abbigail.depth = ABBackground1.depth + 1;
  ABBackground1.depth = ABBackground1.depth;
  Ground.depth = ABBackground1.depth + 1;
  ABBackground1.velocityX=-2;
  ABBackground1.visible=true;
  if(score>100){
    ABGuide.visible=false;
  }
  GrimFun();
  JalkarFun();
  if(keyDown("p")|| keyDown("P")){
    ArrowFun();
  }
 
  if(score>450){
    Bow.velocityX=-5;
    ABBackground1.depth = ABBackground1.depth;
    Bow.depth = ABBackground1.depth + 1;
  }

if(score>1500&& ABSound1.isPlaying()){
ABSound1.stop();
}


if(score>450 && score<530){
  JalkarGroup.destroyEach();
  GrimGroup.destroyEach();
}

  
  if(Abbigail.isTouching(Bow)){
    Bow.visible=false;
  }
  if(ABBackground1.x<600){
   ABBackground1.x=ABBackground1.width/2;
   Next1.visible=false;
 }
 if(keyDown("space")&& Abbigail.y >= 300) {
  Abbigail.velocityY = -15;
  Abbigail.changeAnimation("AJ",AbbigailJ);
  Abbigail.scale=0.6;
  JumpS.play();
}
if(Abbigail.isTouching(Ground)){
  Abbigail.changeAnimation("ABRun",AbbigailRun)
   Abbigail.scale=0.3;
}
  Abbigail.velocityY = Abbigail.velocityY + 0.8
   Abbigail.visible=true;
   Ground.visible=true;
   score = score + Math.round(getFrameRate()/60);
  
if(ArrowGroup.isTouching(JalkarGroup)){
  JalkarGroup.destroyEach();
  ArrowGroup.destroyEach();
}

   if(score>560){
     ABGuide.visible=true;
     ABGuide.addImage(ABG2);
    ABBackground1.visible=false;
    ABBackground2.visible=true;
    ABBackground2.depth = ABBackground2.depth;
    Abbigail.depth = ABBackground2.depth + 1;
    ABBackground2.depth = ABBackground2.depth;
    ABGuide.depth = ABBackground2.depth + 1;
    ABBackground2.depth = ABBackground2.depth;
    Ground.depth = ABBackground2.depth + 1;
    ABBackground2.velocityX=-2;
   
    if(ABBackground2.x<600){
      ABBackground2.x=ABBackground2.width/2;
    }
  }

  if(score>620){
    ABGuide.visible=false;
  }
  if(score>960){
    ABBackground2.visible=false;
    ABBackground3.visible=true;
    ABBackground3.depth = ABBackground3.depth;
    Abbigail.depth = ABBackground3.depth + 1;
    ABBackground3.depth = ABBackground3.depth;
    Ground.depth = ABBackground3.depth + 1;
    ABBackground3.velocityX=-2;
   
    if(ABBackground3.x<600){
      ABBackground3.x=ABBackground3.width/2;
    }
  }
  if(score>1560){
    ABBackground3.visible=false;
    ABBackground4.visible=true;
    ABBackground4.depth = ABBackground4.depth;
    Abbigail.depth = ABBackground4.depth + 1;
    ABBackground4.depth = ABBackground4.depth;
    Ground.depth = ABBackground4.depth + 1;
    ABBackground4.velocityX=-2;
    ABBackground4.depth = ABBackground4.depth;
    DEgg.depth = ABBackground4.depth + 1;
    DEgg.x=1100;
    if(ABBackground4.x<600){
      ABBackground4.x=ABBackground4.width/2;
    }
  }
  if(score>1600){
    ABBackground3.visible=false;
    ABBackground4.visible=true;
    ABBackground4.depth = ABBackground4.depth;
    Abbigail.depth = ABBackground4.depth + 1;
    ABBackground4.depth = ABBackground4.depth;
    Ground.depth = ABBackground4.depth + 1;
    ABBackground4.depth = ABBackground4.depth;
    Enderman.depth = ABBackground4.depth + 1;
    ABBackground4.velocityX=-2;
    ABBackground4.depth = ABBackground4.depth;
    DEgg.depth = ABBackground4.depth + 1;
    DEgg.x=1100;
    if(ABBackground4.x<600){
      ABBackground4.x=ABBackground4.width/2;
    }
    gameState=BOSSF1;
  }

  if(GrimGroup.isTouching(Abbigail)|| JalkarGroup.isTouching(Abbigail)){
    gameState=END1;
  }
}



if(gameState===BOSSF1){
  if(mousePressedOver(Restart1)){
    Restart1Fun();
  }
  ABGuide.visible=true;
  ABGuide.addImage(ABG3);
  ABBackground4.depth = ABBackground4.depth;
  ABGuide.depth = ABBackground4.depth + 1;
  if(GrimGroup.isTouching(Abbigail)){
    gameState=END1;
  }

  Abbigail.velocityY = Abbigail.velocityY + 0.8
  if(keyDown("space")&& Abbigail.y >= 300) {
    Abbigail.velocityY = -15;
    JumpS.play();
  }
   text("Enderman Health : " + Health1 , 1000,30);
  Enderman.visible=true;
  ABBackground3.visible=false;
  ABBackground4.visible=true;
  ABBackground4.depth = ABBackground4.depth;
  Abbigail.depth = ABBackground4.depth + 1;
  ABBackground4.depth = ABBackground4.depth;
  Ground.depth = ABBackground4.depth + 1;
  ABBackground4.velocityX=-2;
  ABBackground4.depth = ABBackground4.depth;
  DEgg.depth = ABBackground4.depth + 1;
  DEgg.x=1100;
  if(ABBackground4.x<600){
    ABBackground4.x=ABBackground4.width/2;
  }
  FT1score = FT1score + Math.round(getFrameRate()/60);

if(FT1score%15===0){
  Enderman.y=Math.round(random(250,500));
TeleportS1.play();
  Enderman.x=Math.round(random(350,1000));
    
}

if(keyDown("p")|| keyDown("P")){
  ArrowFun();
}

if(ArrowGroup.isTouching(Enderman)){
  Health1-=10;
  ArrowGroup.destroyEach();
}

if(Health1<1 || Health1<0){
  gameState=WIN1;
  }
   }

if(gameState===WIN1){
  Enderman.visible=false;
  Abbigail.visible=false;
  ArrowGroup.visible=false;
  ABBackground4.visible=false;
  Ground.visible=false;
DEgg.visible=false;
Result1.visible=true;
BackB.visible=true;
ABBackground4.depth = ABBackground4.depth;
BackB.depth = ABBackground4.depth + 1;
if(mousePressedOver(BackB)){
  gameState=BEGIN;
}
}

if(gameState===END1){
  Abbigail.visible=false;
  GrimGroup.destroyEach();
  JalkarGroup.destroyEach();
  ArrowGroup.destroyEach();
  ARBackground1.visible=false;
  ARBackground2.visible=false;
  ARBackground3.visible=false;
  ARBackground4.visible=false;
  Ground.visible=false;
  Gameover.visible=true;
  Gameover.addImage(GameOverImg1);
  Restart1.visible=true;
  ABBackground1.visible=false;
  ABBackground2.visible=false;
  ABBackground3.visible=false;
  ABBackground4.visible=false;
  Gameover.depth = Gameover.depth;
  Restart1.depth = Gameover.depth + 1;
 Score=0;
 
 if(mousePressedOver(Restart1)){
   Restart1Fun();
 }
}

if(gameState===5){
  LUST.visible=false;
  text("Score: "+ score, 1150,30);
    NEBackground1.depth = NEBackground1.depth;
  Lucan.depth = NEBackground1.depth + 1;
  NEBackground1.depth = NEBackground1.depth;
  Ground.depth = NEBackground1.depth + 1;
  NEBackground1.velocityX=-2;
  NEBackground1.visible=true;
  Next3.visible=false;
  NEGuide.visible=true;
  NEBackground1.depth = NEBackground1.depth;
  NEGuide.depth = NEBackground1.depth + 1;
  if(score>450){
    SwordL.velocityX=-5;
    NEBackground1.depth = NEBackground1.depth;
  SwordL.depth = NEBackground1.depth + 1;
 
  }

   if(score>500 && score<550){
     CreeperGroup.destroyEach();
     ZombieGroup.destroyEach();
    WitherGroup.destroyEach();
   }

   if(score>100){
     NEGuide.visible=false;
   }
  if(Lucan.isTouching(SwordL)){
    SwordL.visible=false;
    Ground2.visible=true;
    Lucan.changeAnimation("LSR",LucanSR);
    Ground.y=800;
    Ground2.y=655;
    Lucan.scale=0.3;
    NEBackground1.depth = NEBackground1.depth;
    Ground2.depth = NEBackground1.depth + 1;
  }
  
if(Lucan.isTouching(Ground2)){
  Lucan.changeAnimation("LSR",LucanSR);
  Lucan.scale=0.3;
}
  if(NEBackground1.x<600){
   NEBackground1.x=NEBackground1.width/2;
 }
 ZombieFun();
 WitherFun();
 CreeperFun();
 score = score + Math.round(getFrameRate()/60);



 
 if(keyDown("space")&& Lucan.y >= 300) {
  Lucan.velocityY = -15;
  Lucan.changeAnimation("LJ",LucanJ);
  Lucan.scale=0.63;
  JumpS.play();
 }
if(Lucan.isTouching(Ground)){
  Lucan.changeAnimation("LUCRun",LucanRun);
  Lucan.scale=0.3
}

  Lucan.velocityY = Lucan.velocityY + 0.8
   Lucan.visible=true;
   Ground.visible=true;

   NEBackground2.depth = NEBackground2.depth;
   Ground2.depth = NEBackground2.depth + 1;

   if(score>540){
    NEGuide.visible=true;
    NEGuide.addImage(NEG2);
    NEBackground2.depth = NEBackground2.depth;
    NEGuide.depth = NEBackground2.depth + 1;
   }

   if(score<600){
     NEGuide.visible=false;
   }

   if(score>560){
      NEBackground1.visible=false;
     NEBackground2.visible=true;
     NEBackground2.depth = NEBackground2.depth;
     Lucan.depth = NEBackground2.depth + 1;
     NEBackground2.depth = NEBackground2.depth;
     Ground.depth = NEBackground2.depth + 1;
     NEBackground2.depth = NEBackground2.depth;
     Ground2.depth = NEBackground2.depth + 1;
     NEBackground2.depth = NEBackground2.depth;
     SwordL.depth = NEBackground2.depth + 1;
     NEBackground2.velocityX=-2;
    if(NEBackground2.x<600){
      NEBackground2.x=NEBackground2.width/2;
    }
   }

   if(score>940){
    NEBackground2.visible=false;
    NEBackground3.visible=true;
    NEBackground3.depth = NEBackground3.depth;
    Lucan.depth = NEBackground3.depth + 1;
    NEBackground3.depth = NEBackground3.depth;
    Ground2.depth = NEBackground3.depth + 1;
    NEBackground3.velocityX=-2;
   if(NEBackground3.x<600){
     NEBackground3.x=NEBackground3.width/2;
   }
  }
  if(score>1450){
    NEBackground3.visible=false;
    NEBackground4.visible=true;
    NEBackground4.depth = NEBackground4.depth;
    Lucan.depth = NEBackground4.depth + 1;
    NEBackground4.depth = NEBackground4.depth;
    Ground2.depth = NEBackground4.depth + 1;
    NEBackground4.velocityX=-2;
   if(NEBackground4.x<600){
     NEBackground4.x=NEBackground4.width/2;
   }
  }
  Gameover.visible=false;
  Restart2.visible=false;
  if(score>1900){
    NEBackground4.visible=false;
    NEBackground5.visible=true;
    NEBackground5.depth = NEBackground5.depth;
    Lucan.depth = NEBackground5.depth + 1;
    NEBackground5.depth = NEBackground5.depth;
    Ground2.depth = NEBackground5.depth + 1;
    NEBackground5.velocityX=-2;
   if(NEBackground5.x<600){
     NEBackground5.x=NEBackground5.width/2;
   }
  }
 if(keyDown("k")|| keyDown("K")){
   ZombieGroup.destroyEach();
 }

  if(score>2000){
    gameState=BOSSF2;
  }

if(WitherGroup.isTouching(Lucan)||CreeperGroup.isTouching(Lucan)||ZombieGroup.isTouching(Lucan)){
  gameState=END2;
}



}

    
  if(gameState===BOSSF2){
 NEGuide.visible=true;
 NEGuide.addImage(NEG3);
 NEBackground5.depth = NEBackground5.depth;
  NEGuide.depth = NEBackground5.depth + 1;
  
  if(CreeperGroup.isTouching(Lucan)||ZombieGroup.isTouching(Lucan)){
    gameState=END2;
  }
  NEBackground4.visible=false;
  NEBackground5.visible=true;
  Necromancer.visible=true;

  NEBackground5.depth = NEBackground5.depth;
  Lucan.depth = NEBackground5.depth + 1;
  NEBackground5.depth = NEBackground5.depth;
  Ground2.depth = NEBackground5.depth + 1;
 Lucan.velocityX=0;
 if(keyDown(RIGHT_ARROW)){
   Lucan.velocityX=4;
 }
 if(keyDown(LEFT_ARROW)){
  Lucan.velocityX=-4;
}
  Lucan.velocityY = Lucan.velocityY + 0.8;
  if(keyDown("space")&& Lucan.y >= 300) {
    Lucan.velocityY = -15;
    JumpS.play();
   }
   if(Lucan.x<0 || Lucan.x>1350){
     Lucan.x=100;
   
   }
  
  NEBackground5.depth = NEBackground5.depth;
  Ground.depth = NEBackground5.depth + 1;
  NEBackground5.velocityX=-2;
  NEBackground5.depth = NEBackground5.depth;
  Necromancer.depth = NEBackground5.depth + 1;
 if(NEBackground5.x<600){
   NEBackground5.x=NEBackground5.width/2;
 }
 text("Necromancer Health : " + Health2 , 1000,30);
  Lucan.changeAnimation("LSTA",LucanSTA);  
 AttackS = AttackS + Math.round(getFrameRate()/60);
NEBackground4.visible=false;
if(AttackS>30){
  ZombieFun();
CreeperFun();
Lucan.changeAnimation("LSR",LucanSR)
}
 
if(Lucan.isTouching(Necromancer)){
  Health2-=2;
}

if(Health2<1|| Health2<0){
  gameState=WIN2;

}
}
  

if(gameState===WIN2){
  Lucan.visible=false;
  Necromancer.visible=false;
  BackB.visible=true;
  Result2.depth = Result2.depth;

  Result2.visible=true;
  NEBackground5.visible=false;
  NEBackground1.visible=false;
  Ground.visible=false;
  ZombieGroup.destroyEach();
  CreeperGroup.destroyEach();
}


if(gameState===END2){
  score=0;
  Gameover.visible=true;
  Gameover.addImage(GameOverImg3)
    Restart2.visible=true;
Lucan.visible=false;
NEBackground1.visible=false;
NEBackground2.visible=false;
NEBackground3.visible=false;
NEBackground4.visible=false;
NEBackground5.visible=false;
Ground.visible=false;
Ground2.visible=false;
Gameover.depth = Gameover.depth;
  Restart2.depth = Gameover.depth + 1;
  ZombieGroup.destroyEach();
  CreeperGroup.destroyEach();
  WitherGroup.destroyEach();
  
if(mousePressedOver(Restart2)){
  Restart2Fun();
}

}
 
if(gameState===4){
  ARGuide.visible=true;
  ARBackground1.depth = ARBackground1.depth;
  ARGuide.depth = ARBackground1.depth + 1;
  
  text("Score: "+ score, 1150,30);
  ARST.visible=false;
  Next2.visible=false;
  ARBackground1.visible=true;
  ARBackground1.velocityX=-2;
 ARBackground1.depth = ARBackground1.depth;
  Thalleous.depth = ARBackground1.depth + 1;
  ARBackground1.depth = ARBackground1.depth;
  Ground.depth = ARBackground1.depth + 1;
  Voltaris1Fun();
  Voltaris2Fun();
  EnergyBallFun();


  if(score>100){
    ARGuide.visible=false;
  }

  if(score>450){
    SwordT.velocityX=-5;
    ARBackground1.depth = ARBackground1.depth;
    SwordT.depth = ARBackground1.depth + 1;
  }
 
  if(Thalleous.isTouching(SwordT)){
    SwordT.visible=false;
    console.log("before"+Ground2.visible)
    Ground2.visible=true;
    console.log("after"+Ground2.visible)
    Thalleous.changeAnimation("TSR",ThalleousSR);
    Ground.y=800;
    Ground2.y=655;
    Thalleous.scale=0.4;
   
    ARBackground1.depth = ARBackground1.depth;
  Ground2.depth = ARBackground1.depth + 1;
  }

  if(score>540){
    ARGuide.visible=true;
    ARGuide.addImage(ARG2);
    ARBackground2.depth = ARBackground2.depth;
    ARGuide.depth = ARBackground2.depth + 1;
    
  }

if(score<600){
  ARGuide.visible=false;
}

if(Thalleous.isTouching(Ground2)){
  Thalleous.changeAnimation("TSR",ThalleousSR);
  Thalleous.scale=0.4;
}
 if(Thalleous.isTouching(Ground)){
  Thalleous.changeAnimation("ThalleousR",ThalleousRun);
}

  score = score + Math.round(getFrameRate()/60);
  if(ARBackground1.x<600){
    ARBackground1.x=ARBackground1.width/2;
   
  }

  
  if(keyDown("space")&& Thalleous.y >= 300) {
    Thalleous.velocityY = -15;
    Thalleous.changeAnimation("TJ",ThalleousJ);
   JumpS.play();
  }
  if(Thalleous.isTouching(Ground)){
    Thalleous.changeAnimation("ThalleousR",ThalleousRun);
  }
  Thalleous.velocityY = Thalleous.velocityY + 0.8;
  Thalleous.visible=true;
  Ground.visible=true;

  if(score>560){
    ARBackground1.visible=false;
    ARBackground2.visible=true;
    ARBackground2.depth = ARBackground2.depth;
    Thalleous.depth = ARBackground2.depth + 1;
    ARBackground2.depth = ARBackground2.depth;
    Ground.depth = ARBackground2.depth + 1; 
    ARBackground2.depth = ARBackground2.depth;
    Ground2.depth = ARBackground2.depth + 1;

    ARBackground2.velocityX=-2;
   if(ARBackground2.x<600){
     ARBackground2.x=ARBackground2.width/2;
   }
  }

  if(score>1240){
    ARBackground2.visible=false;
    ARBackground3.visible=true;
    ARBackground3.depth = ARBackground3.depth;
    Thalleous.depth = ARBackground3.depth + 1;
    ARBackground3.depth = ARBackground3.depth;
    Ground.depth = ARBackground3.depth + 1; 
    ARBackground3.depth = ARBackground3.depth;
    Ground2.depth = ARBackground3.depth + 1;

    ARBackground3.velocityX=-2;
   if(ARBackground3.x<600){
     ARBackground3.x=ARBackground3.width/2;
   }
  }
  if(score>1540){
    ARBackground3.visible=false;
    ARBackground4.visible=true;
    ARBackground4.depth = ARBackground4.depth;
    Thalleous.depth = ARBackground4.depth + 1;
    ARBackground4.depth = ARBackground4.depth;
    Ground.depth = ARBackground4.depth + 1; 
    ARBackground4.depth = ARBackground4.depth;
    Ground2.depth = ARBackground4.depth + 1;
   
    ARBackground4.velocityX=-2;
   if(ARBackground4.x<600){
     ARBackground4.x=ARBackground4.width/2;
   }
  }
  if(score>1940){
    ARBackground4.visible=false;
    ARBackground5.visible=true;
    ARBackground5.depth = ARBackground5.depth;
    Thalleous.depth = ARBackground5.depth + 1;
    ARBackground5.depth = ARBackground5.depth;
    Ground.depth = ARBackground5.depth + 1; 
    ARBackground5.depth = ARBackground5.depth;
    Ground2.depth = ARBackground5.depth + 1;
   
    ARBackground5.velocityX=-2;
   if(ARBackground5.x<600){
     ARBackground5.x=ARBackground5.width/2;
   }
  }
  if(Voltaris1Group.isTouching(Thalleous)|| Voltaris2Group.isTouching(Thalleous)|| EnergyBallGroup.isTouching(Thalleous)){
    gameState=END3;
  }

  if(keyDown("K")|| keyDown("k") && Voltaris1Group.isTouching(Thalleous)){
    Voltaris1Group.destroyEach();
  }
  if(score>2000){
    gameState=BOSSF3;
  }
}

if(gameState===BOSSF3){
  Thalleous.changeAnimation("TS",ThalleousSTA);
  ARBackground4.visible=false;
  ARBackground5.visible=true;
  ARBackground5.depth = ARBackground5.depth;
  Thalleous.depth = ARBackground5.depth + 1;
  ARBackground5.depth = ARBackground5.depth;
  Ground.depth = ARBackground5.depth + 1; 
  ARBackground5.depth = ARBackground5.depth;
  Ground2.depth = ARBackground5.depth + 1;
 Thalleous.scale=0.32;
 ARBackground4.visible=false;
  ARBackground5.velocityX=0;
  if(Voltaris1Group.isTouching(Thalleous)|| Voltaris2Group.isTouching(Thalleous)){
    gameState=END3;
  }
 if(ARBackground5.x<600){
   ARBackground5.x=ARBackground5.width/2;
 }
 TalkS = TalkS + Math.round(getFrameRate()/60);
 if(keyDown("space")&& Thalleous.y >= 300) {
  Thalleous.velocityY = -15;
  JumpS.play();
}
Thalleous.velocityY = Thalleous.velocityY + 0.8;
 

 ARBackground5.depth = ARBackground5.depth;
  Tygren.depth = ARBackground5.depth + 1; 
  ARBackground5.depth = ARBackground5.depth;
  Rock.depth = ARBackground5.depth + 1;
 
  ARBackground5.depth = ARBackground5.depth;
  TYT.depth = ARBackground5.depth + 1; 
  ARBackground5.depth = ARBackground5.depth;
  TAT.depth = ARBackground5.depth + 1;
 

Rock.visible=true;
Tygren.visible=true;

Thalleous.x=500;

if(TalkS>15){
  TYT.visible=true;
  Tygren.changeAnimation("TTalk",TygrenTalk);
   Tygren.y=210;
}

if(TalkS>40){
  TYT.addImage(Talk2);
}

if(TalkS>150){
  TYT.visible=false;
}

if(TalkS>160){
  TAT.visible=true;
}

if(TalkS>250){
  TAT.addImage(Talk4);
}


if(TalkS>270){
  TAT.visible=false;
  TYT.visible=true;
  TYT.addImage(Talk5);
  Tygren.changeAnimation("TYS",TygrenW);
}

if(TalkS>290){
  Voltaris1Fun();
 Voltaris2Fun();
 ARGuide.visible=true;
 ARGuide.addImage(ARG3);
 ARBackground5.depth = ARBackground5.depth;
 ARGuide.depth = ARBackground5.depth + 1;
}

if(TalkS>300){
if(keyDown("p")|| keyDown("P")){
  Thalleous.changeAnimation("TEA",ThalleousPower);
    EQ.visible=true;
    ARGuide.addImage(ARG4);
    Voltaris1Group.destroyEach();
  ARBackground5.depth = ARBackground5.depth;
  EQ.depth = ARBackground5.depth + 1; 
}
  
}
if(TalkS>345){
 
  EQ.visible=false;
  if(keyDown("X") || keyDown("x")){
    Thalleous.x=600;
  Voltaris2Group.destroyEach();
  }
  TYT.visible=false;
}

if(TalkS>385){
 ARGuide.visible=false;
 Tygren.x=500;
 Tygren.y=550;
 Tygren.changeAnimation("TAS",TygrenS);
}

if(TalkS>400){
  
  Fight.visible=true;
  Thalleous.visible=false;
  Tygren.visible=false;
  Voltaris2Group.destroyEach();
  Voltaris1Group.destroyEach();
  ARBackground5.depth = ARBackground5.depth;
  Fight.depth = ARBackground5.depth + 1; 
}
Thalleous.velocityX=0;
Tygren.velocityX=0;
if(TalkS>415){
ARBackground5.velocityX=-2;
if(ARBackground5.x<600){
  ARBackground5.x=ARBackground5.width/2;
}
Fight.visible=false;
Thalleous.visible=true;
Tygren.visible=true;
Thalleous.changeAnimation("TSR",ThalleousSR);
Thalleous.x=650;
Rock.velocityX=-2;
Tygren.changeAnimation("TYA",TygrenA);
Thalleous.scale=0.4;
}

if(TalkS>430){
  Thalleous.changeAnimation("TDIE",ThalleousDie);
  Tygren.changeAnimation("TTalk",TygrenTalk);
}

if(TalkS>435){
  gameState=WIN3;
}
 
}
if(gameState===WIN3){
  Tygren.visible=false;
  Thalleous.visible=false;
  Rock.visible=false;
  Ground2.visible=false;
  Ground.visible=false;
  ARBackground5.visible=false;
  Result3.visible=true;
}

if(gameState===END3){
  Restart3.visible=true;
  Gameover.visible=true;
  Thalleous.visible=false;
  Gameover.addImage(GameOverImg2);
  Gameover.depth = Gameover.depth;
  Restart3.depth = Gameover.depth + 1;
  ARBackground1.visible=false;
  ARBackground2.visible=false;
  ARBackground3.visible=false;
  ARBackground4.visible=false;
  ARBackground5.visible=false;
  Voltaris1Group.destroyEach();
  Voltaris2Group.destroyEach();
  Ground.visible=false;
  Ground2.visible=false;
  EnergyBallGroup.destroyEach();

  if(mousePressedOver(Restart3)){
    Restart3Fun();
  }
     }

Abbigail.collide(Ground);


Lucan.collide(Ground);
Lucan.collide(Ground2);
Thalleous.collide(Ground);
Thalleous.collide(Ground2);
  drawSprites();
}



function Restart1Fun(){
  gameState=DRAGON;
  score=0;
  Gameover.visible=false;
  Restart1.visible=false;
}

function Restart2Fun(){
  gameState=5;
  score=0;
  Gameover.visible=false;
  Restart2.visible=false;
}

function Restart3Fun(){
  gameState=4;
  score=0;
  Gameover.visible=false;
  Restart3.visible=false;
}

function GrimFun(){
  if(frameCount%400===0){
    var Grim=createSprite(1440,50,50,5);
    Grim.y=Math.round(random(450,500));
    Grim.addAnimation("GrimA",GrimAnim);
   Grim.velocityX=-7;
   Grim.scale=0.2;
   Grim.lifetime=200;
   GrimGroup.add(Grim);
    }
}

function JalkarFun(){
  if(frameCount%600===0){
    var Jalkar=createSprite(1440,1,1,1);
    Jalkar.y=Math.round(random(550,550));
    Jalkar.addAnimation("JalkarA",JalkarAnim);
    Jalkar.velocityX=-8;
    Jalkar.scale=0.38;
    Jalkar.lifetime=200;
  
    JalkarGroup.add(Jalkar);
  }
}

function ZombieFun(){
  if(frameCount%400===0){
var Zombie=createSprite(1440,1,1,1)
Zombie.y=Math.round(random(580,580))
Zombie.addAnimation("ZombieA",ZombieAnim);
Zombie.velocityX=-8;
Zombie.scale=0.27;
Zombie.lifetime=200;
ZombieGroup.add(Zombie);
ZombieS.play();
  }
  if(gameState===BOSSF2){
    if(frameCount%100===0){
      var Zombie=createSprite(1440,1,1,1)
      Zombie.y=Math.round(random(580,580))
      Zombie.addAnimation("ZombieA",ZombieAnim);
      Zombie.velocityX=-8;
      Zombie.scale=0.27;
      Zombie.lifetime=200;
      ZombieGroup.add(Zombie);
      ZombieS.play();
        }
  }
}

function WitherFun(){
  if(frameCount%750===0){
var WitherHead=createSprite(1440,1,1,1)
WitherHead.y=Math.round(random(500,580))
WitherHead.addImage(WitherHeadImg);
WitherHead.velocityX=-9;
WitherHead.lifetime=200;
WitherHead.scale=0.27;
WitherGroup.add(WitherHead);
  }
}

function Voltaris1Fun(){
  if(frameCount%450===0){
    var Voltaris1=createSprite(1440,1,1,1);
    Voltaris1.y=Math.round(random(565,565));
    Voltaris1.addAnimation("VoltarisA",Voltaris1Anim);
    Voltaris1.velocityX=-8;
    Voltaris1.lifetime=200;
    Voltaris1.scale=0.4;
    Voltaris1Group.add(Voltaris1);
  }
  if(gameState===BOSSF3){
    if(frameCount%50===0){
      var Voltaris1=createSprite(1440,1,1,1);
      Voltaris1.y=Math.round(random(565,565));
      Voltaris1.addAnimation("VoltarisA",Voltaris1Anim);
      Voltaris1.velocityX=-8;
      Voltaris1.lifetime=200;
      Voltaris1.scale=0.4;
      Voltaris1Group.add(Voltaris1);
    }
  }
}

function Voltaris2Fun(){
  if(frameCount%700===0){
    var Voltaris2=createSprite(1440,1,1,1);
    Voltaris2.y=Math.round(random(560,560));
    Voltaris2.addAnimation("VoltarisB",Voltaris2Anim);
    Voltaris2.velocityX=-8;
    Voltaris2.scale=0.43;
    Voltaris2.lifetime=200;
    Voltaris2Group.add(Voltaris2);
    
  }
  if(gameState===BOSSF3){
if(score>200){
  if(frameCount%100===0){
    var Voltaris2=createSprite(1440,1,1,1);
    Voltaris2.y=Math.round(random(560,560));
    Voltaris2.addAnimation("VoltarisB",Voltaris2Anim);
    Voltaris2.velocityX=-8;
    Voltaris2.scale=0.43;
    Voltaris2.lifetime=200;
    Voltaris2Group.add(Voltaris2);
  }
}
   
  }
}
     
function ArrowFun(){
  var Arrow=createSprite(Abbigail.x,Abbigail.y,1,1);
  Arrow.addImage(ArrowImg);
  Arrow.velocityX=5;
  Arrow.lifetime=240;
  Arrow.scale=0.3;
  ArrowGroup.add(Arrow);
}

function CreeperFun(){
  if(frameCount%750===0){
var Creeper=createSprite(1440,1,1,1)
Creeper.y=Math.round(random(575,575))
Creeper.addAnimation("CreeperA",CreeperAnim);
Creeper.velocityX=-8;
Creeper.scale=0.34;
Creeper.lifetime=200;
CreeperGroup.add(Creeper);
  }
  if(gameState===BOSSF2){
    if(frameCount%280===0){
      var Creeper=createSprite(1440,1,1,1)
      Creeper.y=Math.round(random(575,575))
      Creeper.addAnimation("CreeperA",CreeperAnim);
      Creeper.velocityX=-7;
      Creeper.scale=0.34;
      Creeper.lifetime=200;
      CreeperGroup.add(Creeper);
        }
  }
}

function EnergyBallFun(){
  if(frameCount%400===0){
var EnergyBall=createSprite(1440,1,1,1);
EnergyBall.y=Math.round(random(505,575));
EnergyBall.addAnimation("EnergyBall",EnergyBallAnim);
EnergyBall.velocityX=-8;
EnergyBall.lifetime=200;
EnergyBall.scale=0.13;
TBCS.play();
EnergyBallGroup.add(EnergyBall);
  }
}