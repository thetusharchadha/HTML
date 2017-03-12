var canvas, ctx,started,  mouseButton,previousmousepos,c=0;
 var colorArray = ['silver','gold','red','blue','green','yellow','purple','white'];
var r =15,k=16;
var colorIndex = 0;
function getMousePos(canvas, evt) {

   var rect = canvas.getBoundingClientRect();
   return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
   };
}

function mousehandler(evt){
	var mousePos = getMousePos(canvas,evt)
if(!started){
	previousmousepos = mousePos;
	started = true;
}
	else{
	drawline(previousmousepos.x, previousmousepos.y, mousePos.x, mousePos.y,colorArray[colorIndex]);
		colorIndex++;
		c++;
		if(colorIndex==8){
			colorIndex=0;

		}
		if(c==k){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			c=0;
		}
		previousmousepos = mousePos;
	}
}
function drawline(x1, y1, x2, y2,color) {
	ctx.strokeStyle = color;
	ctx.fillStyle = color;
	ctx.fill();
    ctx.beginPath();
    ctx.arc(x2,y2,r,0,2*Math.PI);
    ctx.stroke();
}
function changesize(event){
  //console.log("size changed");
  r = parseInt(event.target.value);
  document.getElementById("size").innerHTML = r;
}
function changenumber(event){
  // ctx.clearRect(0,0,canvas.width,canvas.height);
  k = parseInt(event.target.value);
  if((k<8)){
    k=8;
  }
  else if((isNaN(k))){
    k=8;
  }
  else if(k>100){
    k=100;
  }
  document.getElementById("number").innerHTML = k;
  console.log(k);
}
button1 = document.getElementById("button");
button1.onclick = function(){
  console.log("clear");
  ctx.clearRect(0,0,canvas.width,canvas.height);
}
window.onresize = function(){
	var dimension = [document.body.clientWidth, document.body.clientHeight];
	canvas.width = dimension[0];
canvas.height = dimension[1];
}
window.onload = function init() {

var dimension = [document.body.clientWidth, document.body.clientHeight];
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
canvas.width = dimension[0];
canvas.height = dimension[1];
 	started=false;

    canvas.addEventListener('mousemove', mousehandler, false);

};
