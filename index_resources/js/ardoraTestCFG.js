//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=160; scoreInc=20; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#8080FF"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Qué es Google Workspace para la Educación?","¿Características y ventajas de Google Classroom y Google Meet?","¿Diferencias entre comunicación sincrónica y asincrónica?","¿Cual es  uso de esta herramientas en el  Centro Educativo San Pío X??","¿Desea Continuar con el Modulo II Google classroom y google meet para clases virtuales?","	¿Qué es Google classroom ?","¿Qué es Google Meet. ?","¿Beneficios para la educación.?"];
var answers1=["MUVzIHVuIHBhcXVldGUgZGUgaGVycmFtaWVudGFzIHkgc2VydmljaW9zIGRlIEdvb2dsZSBpZGVhZG8gcGFyYSBjZW50cm9zIGVkdWNhdGl2b3M=","MEVzIHVuYSBQYWdpbmEgV2Vi"];
var answers2=["MUV2YWx1YWNpw7NuIHZpcnR1YWwgZGUgbG9zIGVzdHVkaWFudGVz","MUF1bGEgSW52ZXJ0aWRhIG8gZmxpcHBlZCBjbGFzc3Jvb20=","MUNlbnRybyBkZSBjb211bmljYWNpw7NuIHkgYWN0aXZpZGFkZXM=","MEVudmlhciBtZW5zYWplcyBwb3Igd2hhdHNhcHA="];
var answers3=["MXBhcnRpY2lwYW50ZXMgaW50ZXJhY3TDumFuIGVuIGVsIG1pc21vIG1vbWVudG8gZW4gZWwgcXVlIHRpZW5lIGx1Z2FyIGxhIGNvbXVuaWNhY2nDs24=","MWFzaW5jcsOzbmljYSBlc3RhIGludGVyYWNjacOzbiBubyBlcyBpbm1lZGlhdGEgeSBwdWVkZSB0ZW5lciBsdWdhciBlbiBkaWZlcmVudGVzIG1vbWVudG9zLg==","ME51bmNhIGhheSBDb211bmljYWNpb24=","MENvbXVuaWNhY2lvbiBzb2xvIHBvciBUZWxlZm9ubw=="];
var answers4=["MU11eSBmcmVjdWVudGU=","ME51bmNh"];
var answers5=["MVNp","ME5v"];
var answers6=["MXBlcm1pdGUgcXVlIGxvcyBlZHVjYWRvcmVzIG1lam9yZW4gc3UgaW1wYWN0byB5IHByZXBhcmVuIGEgbG9zIGVzdHVkaWFudGVzIHBhcmEgZWwgZnV0dXJv","MGVzIHVuIFNpc3RlbWEgT3BlcmF0aXZv"];
var answers7=["MUNyZWEgcmV1bmlvbmVzIHBhcmEgZWwgbWlzbW8gbW9tZW50byBvIHBhcmEgbcOhcyBhZGVsYW50ZQ==","MFVuIGNvcnJlbyBFbGVjdHJvbmljbw=="];
var answers8=["MUVucmlxdWVjZXIgbGEgZW5zZcOxYW56YSB5IGVsIGFwcmVuZGl6YWplIGNvbiBmdW5jaW9uZXMgYXZhbnphZGFz","ME5vIGFwb3JhIG5hZGEgYSBsYSBlZHVjYWNpb24="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8];
var err=["Falsa","No aplica","Repuesta Incorrecta","Incorrecta","No deseo Continuar","Incorrecta","Repuesta Falsa",""];
var ima=["google_workspace.png","","","","google_clasroom_meet.jpg","google_clasroom_meet.jpg","clasrrom_meet.jpeg",""];
var mp4=["","","","","","","",""];
var ogv=["","","","","","","",""];
var alt=["","","","","","","",""];
var info=["","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="index_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
