const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(350,200);
ctx.lineTo(350,800);
ctx.moveTo(350,200);
ctx.lineTo(900,100);
ctx.moveTo(900,100);
ctx.lineTo(900,700);
ctx.moveTo(350,800);
ctx.lineTo(900,700);
ctx.moveTo(900,100);
ctx.lineTo(1500,200);
ctx.moveTo(1500,200);
ctx.lineTo(1500,800);
ctx.moveTo(1500,800);
ctx.lineTo(900,700);
ctx.closePath();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(455,315);
ctx.lineTo(485,315);
ctx.closePath();
ctx.moveTo(450,300);
ctx.beginPath();
ctx.closePath();
ctx.moveTo(900,300);
ctx.beginPath();


// pop
ctx.arc(450, 375, 52, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(450, 490, 65, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(450, 625, 75, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

//knop
ctx.lineWidth =9;
ctx.beginPath();
ctx.arc(450, 460, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(450, 495, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(450, 530, 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

//oge
ctx.lineWidth =6;
ctx.beginPath();
ctx.arc(428, 360, 3, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.lineWidth =6;
ctx.beginPath();
ctx.arc(468, 360, 3, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

//mond
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(450, 400, 24, 650, 8 * Math.PI);
ctx.stroke();
ctx.closePath();

//hoed

ctx.fillRect(400, 300, 100, 40);
ctx.fillRect(410, 280, 75, 25);


//boom
ctx.fillStyle = "brown";
ctx.fillRect(650, 500, 75, 200);
ctx.fillStyle = "green";
ctx.fillRect(575, 500, 230, 20);
ctx.fillRect(590, 480, 200, 20);
ctx.fillRect(605, 460, 170, 20);
ctx.fillRect(620, 440, 140, 20);
ctx.fillRect(635, 420, 110, 20);
ctx.fillRect(650, 400, 80, 20);
ctx.fillRect(665, 380, 50, 20);
ctx.fillRect(680, 360, 20, 20);

ctx.fillStyle = "red";
ctx.fillRect(620, 460, 10, 30);
ctx.fillRect(660, 480, 10, 30);
ctx.fillRect(700, 400, 10, 30);

//straat
ctx.fillStyle = "black";
ctx.fillRect(920, 600, 500, 22);
ctx.fillRect(1100, 600, 22, 100);
ctx.fillRect(1300, 500, 22, 100);

//huisje
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "red";
ctx.moveTo(965,540);
ctx.lineTo(953,560);
ctx.lineTo(977,560);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "red";
ctx.fillRect(950,560,30,30);

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(1015,540);
ctx.lineTo(1003,560);
ctx.lineTo(1030,560);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "grenn";
ctx.fillRect(1000,560,30,30);

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(1215,540);
ctx.lineTo(1203,560);
ctx.lineTo(1230,560);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "grenn";
ctx.fillRect(1200,560,30,30);

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.fillStyle = "orange";
ctx.moveTo(1115,540);
ctx.lineTo(1103,560);
ctx.lineTo(1130,560);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "orange";
ctx.fillRect(1100,560,30,30);

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.fillStyle = "orange";
ctx.moveTo(1065,625);
ctx.lineTo(1053,650);
ctx.lineTo(1080,650);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "orange";
ctx.fillRect(1050,650,30,30);

ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.fillStyle = "purple";
ctx.moveTo(965,625);
ctx.lineTo(953,650);
ctx.lineTo(980,650);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "purple";
ctx.fillRect(950,650,30,30);

ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.fillStyle = "purple";
ctx.moveTo(1365,625);
ctx.lineTo(1353,650);
ctx.lineTo(1380,650);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "purple";
ctx.fillRect(1350,650,30,30);

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.fillStyle = "green";
ctx.moveTo(1165,625);
ctx.lineTo(1153,650);
ctx.lineTo(1180,650);
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(1150,650,30,30);

















