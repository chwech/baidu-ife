# task0015
## 任务目的
- 接触一下JavaScript中的高级选择器
- 学习JavaScript中的数组对象**遍历**、**读写**、**排序**等操作
- 学习简单的字符串处理操作

## 学习总结
### 一、知识点总结
1. document.getElementById("id")  
通过id获取元素对象
2. element.childNodes  
用来获取任何一个元素所有子元素，返回一个数组。  
3. node.nodeType  
有12种类型值，其中:

    - 元素节点的nodeType属性值是1。
    - 属性节点的nodeType属性值是2。
    - 文本节点的nodeType属性值是3。
	
4. node.nodeValue  
获取或设置节点的值   
  
	|     节点类型    |nodeValue|
	|-----------------|---------|
	|Element(元素节点)| null    |
	|  Attr(属性节点) |属性的值 |
	|  Text(文本节点) |节点所包含的文本|  

5. 数组方法slice()  
截取数组或字符串，接收一个或两个参数：

    - 一个参数，slice(5)//截取从索引5开始到最后索引结束
    - 两个参数，slice(0,5)//截取从索引0开始到索引5之间（不包括5）结束


	
