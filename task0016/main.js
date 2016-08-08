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
	var handle = function(){
		
		if(输入不是中英文字符){
			alert("您输入的字段不是中英文字符，请重新输入");
		}else(输入的不是数字){
			alert("您输入的不是数字，请重新输入");
		}
	}
	city_input.addEventListener("change", handle, false);
	//change事件处理程序判断用户输入的城市名必须为中英文字符，空气质量指数必须为整数
	
	city_input.value //获取文本框的值
	
	value_input.value
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

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

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();