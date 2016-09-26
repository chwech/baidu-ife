
var EventUtil = {
	//添加事件处理程序
	//接收三个参数,要绑定事件的元素(element)，事件类型(type)，事件处理函数(handler)
	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent){
			element.attachEvent('on' + type, handler);
		}else{
			element['on' + type] = handler;
		}
	},
	//取得事件对象event
	getEvent: function(event){
		return event?event:window.event;
	},
	//事件的目标
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	//阻止事件默认行为
	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},

	//移除事件处理程序
	removeHandler: function(element, type, handler){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		}else if(element.detachEvent){
			element.detachEvent('on' + type, handler);
		}else{
			element['on' + type] = null;
		}
	},
	//阻止事件冒泡
	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}

};