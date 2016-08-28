/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city_input = document.getElementById('aqi-city-input');
	var value_input = document.getElementById('aqi-value-input');
	var reg = /[^a-z\u4e00-\u9fa5]/gi;
	var reg1 = /\D/g;
	var value = city_input.value.trim();
	var value1 = value_input.value.trim();
	if(reg.test(value)){
		alert("城市输入不正确");
		return;
	}
	if(reg1.test(value1)){
		alert("num输入不正确");
		return;
	}
	aqiData[value] = value1;
	return aqiData;
}

function renderAqiList() {
	var table = document.getElementById('aqi-table');
	table.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for( x in aqiData){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var btn = document.createElement("button");
		btn.className = "button";
		var td_text = document.createTextNode(x);
		var td1_text = document.createTextNode(aqiData[x]);
		var td2_text =　document.createTextNode("删除");
		table.appendChild(tr);
		tr.appendChild(td);
		tr.appendChild(td1);
		tr.appendChild(td2);
		td2.appendChild(btn);
		td.appendChild(td_text);
		td1.appendChild(td1_text);
		btn.appendChild(td2_text);
	}
}
function addBtnHandle() {
  addAqiData();
  renderAqiList();
  var del_btn = document.getElementsByClassName('button');
  for (var i = 0; i < del_btn.length; i++) {
  	del_btn[i].onclick = function () {
  		
  		
  	}
  }
}
function delBtnHandle() {
	
	
  renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	var add_btn = document.getElementById('add-btn');
	add_btn.addEventListener("click" ,addBtnHandle , false);
	
	
}
window.onload = init;