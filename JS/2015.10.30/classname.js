//window.onload=function(){
	function getClass(classname,obj){
		var obj=obj||document;
		if(obj.getElementsByClassName){
			return obj.getElementsByClassName(classname)
		}else{
			var alls=obj.getElementsByTagName("*");
			var arr=[];
			for(var i=0;i<alls.length;i++){
				if(checkClass(alls[i].className,classname)){
					arr.push(alls[i]);
				}
			}
		}
		return arr;
	}
	function checkClass(str,classname){
		var newarr=str.split(" ");
		for(var i in newarr){
			if(newarr[i]==classname){
				return true;
			}
		}
		return false;
	}
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
		if(window.getComputedStyle){
			return window.getComputedStyle(obj,null)[attr];
		}else{
			return obj.currentStyle[attr];
		}
	}
//}