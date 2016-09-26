function Queue(){
	this.data = [];
	this.push = push;//右入队
	this.shift = shift;//左出队
	this.pop = pop;//右出队
	this.unshift = unshift;//左入队
}
function push(value){
	this.data.push(value);
}
function shift(){
	this.data.shift();
}
function pop(){
	this.data.pop();
}
function unshift(value){
	this.data.unshift(value);
}

function reader(){
	var reader = document.getElementById('reader');
	reader.innerHTML = '';
	console.log(queue.data);
	queue.data.forEach(function(item){
		var div = document.createElement('div');
		var div_text = document.createTextNode(item);
		div.appendChild(div_text);
		reader.appendChild(div);
	});	
}

var queue = new Queue();
var input_box = document.getElementById('input-box');

EventUtil.addHandler(document.body, 'click', function(event){
	var event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	switch(target.id){
		case "left-in":
			queue.unshift(input_box.value);
			reader();
			break;
		case "left-out":
			queue.shift();
			reader();
			break;
		case "right-in":
			queue.push(input_box.value);
			reader();
			break;
		case "right-out":
			queue.pop();
			reader();
			break;
	}
});

