/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
window.onload = function(){
	addAqiData;
	renderAqiList;
	//init;
}
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city_input = document.getElementById('aqi-city-input');
	var value_input = document.getElementById('aqi-value-input');
	var handle = function(reg){
		//城市名必须为中英文字符
		var reg = /[^a-z\u4e00-\u9fa5]/gi ;//匹配所有不是中英文的字符
		if(reg.test(this.value)){
			alert("您输入的字段不是中英文字符，请重新输入");
		}

	}
	var handle1 = function(){
		//空气质量指数必须为整数
		var reg1 = /\D/g ;
		if(reg1.test(this.value)){
			alert("您输入的不是整数，请重新输入");
		}
	}
	city_input.addEventListener("change", handle, false);
	value_input.addEventListener("change", handle1, false);
	aqiData[city_input.value] = value_input.value;
	alert(aqiData.city_input.value);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var aqi_table = document.getElementById('aqi-talbe');
	var table_tr = document.createElement("tr");
	table_tr.innerHTML("<td>城市</td><td>空气质量</td><td>操作</td>")
	var table_tr2 = document.createElement("tr");
	var table_td = document.createElement("td");
	var td_text = document.createTextNode(aqiData[0].slice(0,3));

	aqi_table.appendChild(table_tr);
	aqi_table.appendChild(table_tr2);
	table_tr2.appendChild(table_td);
	table_td.appendChild(td_text);

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {
	// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	var add_btn = document.getElementById('add-btn');
	//add_btn.addEventListener("click" ,addBtnHandle , false);
  
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();