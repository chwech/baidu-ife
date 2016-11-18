var aTag = document.getElementsByTagName('a');
var h2 = document.getElementsByTagName('h2');
var ul = document.getElementsByTagName('ul');
function bindEvent(){
	for(var i = 0, len = aTag.length;i < len; i++){
		EventUtil.addHandler(aTag[i], "mouseover", mouseoverHandler);
		EventUtil.addHandler(aTag[i], "mouseout", mouseoutHandler);
	}
	for(var i = 0; i < h2.length; i++) {
		h2[i].index = i;//为h2创建索引
		var timer = null; 
		h2[i].onclick = function(){
			console.log(this.index);
			var that = this;
			timer = setTimeout(function(){
				for (var j = 0; j < ul.length; j++) {
					ul[j].className = "hide";
					ul[that.index].className = "show";
				}	
			}, 300);
		};
	}
}

function mouseoverHandler(){
	this.style.backgroundColor = "#393";
	this.style.color = "#fff";
	this.style.borderRadius = 5 + "px";
	// this.style.opacity = 0.9;
	// this.style.paddingLeft = 30 + "px";
	startMove(this, {"padding-left": "30", "opacity": "90"});
}
function mouseoutHandler(){
	this.style.backgroundColor = "#fff";
	this.style.color = "#0a8cd2";
	// this.style.paddingLeft = 0 + "px";
	startMove(this, {"padding-left": "0", "opacity" :"80"});
}		
window.onload = bindEvent;

	


