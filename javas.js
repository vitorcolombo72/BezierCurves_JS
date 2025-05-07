console.log("spline");
const points = [
  { x: 100, y: 200 }, // P0
  { x: 300, y: 350 }, // P1
  { x: 100, y: 500 }, // P2
  { x: 700, y: 550 }, // P3
  { x: 400, y: 100 }, // P4
  { x: 250, y: 150 }, // P5
  { x: 800, y: 300 }, // P6
  { x: 150, y: 220 }, // P7
  { x: 725, y: 50 }, // P8
  { x: 450, y: 250 }, // P9
];

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function drawPoints(point) {
  ctx.beginPath();
  ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
}

function calc_b(p0,p1,p2) {
  ctx.beginPath();
  ctx.moveTo(100, 200);
  for (let t = 0; t <= 1.01; t += 0.01) {
    //console.log(t);
    let x =
      (1 - t) ** 2 * p0.x +
      2 * (1 - t) * t * p1.x +
      t ** 2 * p2.x;
    let y =
      (1 - t) ** 2 * p0.y +
      2 * (1 - t) * t * p1.y +
      t ** 2 * p2.y;
    //console.log("x:" + x + "y:" + y);
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "blue";
  ctx.stroke();
}

for (let i = 0; i <= points.length - 1; i++) {
  drawPoints(points[i]);
}

for(let i = 0 ; i <= points.length - 3 ; i++){
  console.log("fodase")
  calc_b(points[i],points[i+ 1], points[i + 2]);
}
