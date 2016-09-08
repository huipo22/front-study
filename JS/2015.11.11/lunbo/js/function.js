//window.onload=function(){
	//获取雷鸣的兼容函数
	//classname:类名要加引号
	//obj:父容器，表示从哪个父容器里来获取子容器
	function getClass(classname,obj){
		var obj=obj||document;//只要有一个为真它就为真，如果obj存在，就赋值给声明的obj，
		//如果不存在，就document赋值给声明的obj（声明的obj表示从哪个对象里获取）
		if(obj.getElementsByClassName){//为真时表示是现代浏览器
			return obj.getElementsByClassName(classname)
		}else{
			var alls=obj.getElementsByTagName("*");//获取所有标签元素
			var arr=[];
			for(var i=0;i<alls.length;i++){//遍历这个alls集合
				if(checkClass(alls[i].className,classname)){
					arr.push(alls[i]);
				}
			}
		}
		return arr;//如果为真，则保存在数组中
	}
	function checkClass(str,classname){//检测一个元素里是否有我们想要找的类名
		var newarr=str.split(" ");//将元素的类名（字符串）中的空格分割成数组
		for(var i in newarr){//遍历这个数组，那数组中的每一个值与classname比较
			if(newarr[i]==classname){//如果相同，表示找到了，这个函数返回真
				return true;
			}
		}
		return false;//等这个数组遍历完成以后，如果还没有找到相同的类名，则这个函数返回假
	}

	/**************************************************/
	//获取与设置对象的纯文本的兼容函数
	//obj:从哪个对象里来获取纯文本
	//val:表示要设置的文本
	//ff	obj.textContent
	//ie    obj.innerText
	function getText(obj,val){		
		if(val!=undefined){  //获取
			if(obj.textContent||obj.textContent==""){
				obj.textContent=val;
			}else{
				obj.innerText=val;
			}

		}else{
			if(obj.textContent){	//为真表示是W3C的浏览器
				return obj.textContent;
			}else{			//表示IE
				return obj.innerText;
			}
		}
		
	}


	/**************************************************/
	//获取外部与行内样式的属性
	//FF:window.getComputedStyle(obj,null).width
	//IE:obj.currentStyle.width
	/*//1.自己写的
	function getStyle(obj,val){
		if(obj.currentStyle){
			return obj.currentStyle[val]
		}else{
			return getComputedStyle(obj,null)[val]
		}
	}*/
	//2.
	function getStyle(obj,attr){
		if(window.getComputedStyle){//FF
			return window.getComputedStyle(obj,null)[attr];
		}else{//IE
			return obj.currentStyle[attr];
		}
	}


	/**************************************************/
	//document.getElementById();
	//$(".one");
	//$("#first")
	//$("div")
	/*function $(selector,obj){
		var obj=obj||document;
		if(typeof selector=="string"){//判断selector是否是字符串
			selector=selector.replace(/^\s*|\s*$/g,"");//找出字符串前后的空格
			if(selector.charAt(0)=="."){//classname
				return getClass(selector.slice(1),obj);
			}else if(selector.charAt(0)=="#"){//id
				return obj.getElementById(selector.slice(1))
			}else if(/^[a-z|1-10]{1,10}$/g.test(selector)){//TagName
				return obj.getElementsByTagName(selector);
			}
		}else if(typeof selector=="function"){
			window.onload=function(){
				selector();
			}
		}	
	}*/
/*	function $(selector,obj){
		var obj=obj||document;
		if(typeof selector=="string"){
			selector=selector.replace(/^\s*|\s*$/g,"")
			if(selector.charAt(0)=="."){
				return getClass(selector.slice(1),obj);
			}else if(selector.charAt(0)=="#"){
				return obj.getElementById(selector.slice(1))
			}else if(/^[a-z|1-10]{1,10}$/g.test(selector)){
				return obj.getElementsByTagName(selector);
			}
		}else if(typeof selector=="function"){
			window.onload=function(){
				selector();
			}
		}
	}*/
	function $(selector,obj){
		var obj=obj||document;
		if(typeof selector=="string"){
			selector=selector.replace(/^\s*|\s*$/g,"")
			if(selector.charAt(0)=="."){
				return getClass(selector.slice(1),obj)
			}else if(selector.charAt(0)=="#"){
				return obj.getElementById(selector.slice(1))
			}else if(/^[a-z|1-10]{1,10}$/g.test(selector)){
				return obj.getElementsByTagName(selector)
			}
		}else if(typeof selector=="function"){
			window.onload=function(){
				selector();
			}
		}
	}
//}