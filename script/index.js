var aTag = document.getElementsByTagName('a');
var h2 = document.getElementsByTagName('h2');
var ul = document.getElementsByTagName('ul');
function bindEvent(){
	for(let i = 0, len = aTag.length;i < len; i++){
		EventUtil.addHandler(aTag[i], "mouseover", mouseoverHandler);
		EventUtil.addHandler(aTag[i], "mouseout", mouseoutHandler);
	}
	for(let i = 0; i < h2.length; i++) {
		h2[i].index = i;//为h2创建索引 
		h2[i].onclick = function(){
			console.log(this.index);
			for (let j = 0; j < ul.length; j++) {
				ul[j].className = "hide";
				
			}
			ul[this.index].className = "show";
		}
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

	


