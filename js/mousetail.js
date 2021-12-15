function getMousePos(event) {
  var e = event || window.event;
  var mouseInfo = {
    mouseX : e.clientX,
    mouseY : e.clientY
  }
  return mouseInfo;
}

function getMouseTail(){
	this.init = function(pos){
		this.alpha = 1.0;
		this.element = document.createElement("div");
		this.element.appendChild(document.createTextNode("☆"));
		this.element.style.color = "hsla("+ Math.floor(Math.random() * 255) + ",100%,50%," + this.alpha + ")";
		var offsetX = Math.floor(Math.random() * 20 - 10);
		var offsetY = Math.floor(Math.random() * 20 - 10);
		this.element.style.position = "fixed";
		this.element.style.fontsize = Math.floor(Math.random() * 20 + 10) + "px";
		this.element.style.left = pos.mouseX + offsetX + 15 + "px";
		this.element.style.top = pos.mouseY + offsetY + 15 +"px";
		document.body.appendChild(this.element);
	}
	this.reduceColor = function(win){
		if(this.alpha <= 1.0 && this.alpha > 0.1){
			this.alpha = this.alpha - 0.1;
			this.element.style.color = "hsla("+ Math.floor(Math.random() * 255) + ",100%,50%," + this.alpha + ")";
		}
		else{
			clearInterval(win);
			document.body.removeChild(this.element);
		}
	}
}
  
document.onmousemove = function(event) {
  var pos = getMousePos(event);
  var art = new getMouseTail();
  art.init(pos);
  var win = setInterval(function() {
    art.reduceColor(win);
  }, 70);
}