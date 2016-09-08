//IE8获取class name的兼容函数
	//classname 子元素的类名，加引号
	//obj 父元素类名
	function getClass(classname,obj){
		var obj=obj || document;//只要有一个为真就为真
		//如果obj存在，就赋值给声明的obj，如果不存在，将document赋值给objs
		if (obj.getElementsByClassName) {//为真时表示现代浏览器 w3c
			return obj.getElementsByClassName(classname); //直接返回结果
		}else{ //为假时表示是IE8
			var alls=obj.getElementsByTagName("*"); //获取所有tag标签元素
			var arr=[];
			for(var i=0;i<alls.length;i++){ //遍历alls集合


				if( checkClass(alls[i].className,classname) ){//每一个元素的classname属性与传进来的参数做判断
					arr.push(alls[i]); // 为真，保存在数组中
				}
			}
			return arr; // 数组返回，表示找到了
		}
	}

	

	//查找类名 检测一个元素里是否有我们想要找的类名
	function checkClass(str,classname){ //检测一个元素里是否有我们想要找的类名
		var newarr=str.split(" "); //将元素的类名（字符串）中的空格分割成数组
		for(var i=0;i<newarr.length;i++){ //遍历这个数组，将数组中的每一个值与classname比较，若相同，这个函数返回真
			if(newarr[i]==classname){
				return true;
			}
		}
		return false; //等这个数组遍历完成后，如果还没有找到相同的类名，则返回假
	}


//*********************************************************************************************

//获取与设置对象的纯文本的兼容函数
	//FF obj.textContent
	//IE obj.innerText
	//obj 从哪个对象里获取纯文本
	//val 要设置的文本
	function getText(obj,val){
		if(val==undefined){ //获取
			if(obj.textContent){ //为真，表示是w3c浏览器
				return obj.textContent; 
			}else{ // 为假，表示是IE
				return obj.innerText;
			}
		}else{  //设置
			if(obj.textContent||obj.textContent==""){
				obj.textContent=val; 
			}else{ 
				obj.innerText=val;
			}
		}
		
	}




//*********************************************************************************************



//获取通用样式的兼容函数 火狐 IE8
	//IE obj.currentStyle[att]
	//FF window.getComputedStyle(obj,null)[att]
	//obj 对象
	//att 属性
	function getStyle(obj,att){
		if(att==undefined){    //没有赋值属性时
			if(obj.currentStyle){  //为真，表示是IE
				return obj.currentStyle;
			}else{				//为假，表示是FF
				return window.getComputedStyle(obj,null);
			}
		}else{           //赋值属性时
			if(obj.currentStyle){   
				return obj.currentStyle[att];   //为真，表示是IE
			}else{
				return window.getComputedStyle(obj,null)[att];//为假，表示是FF
			}
		}
		
	}

//*********************************************************************************************

 //通过$()直接获取类名，id名，标签名,并可以代替window.onload
	// $(".one")[0]; 从类名获取 
	// $("#one"); 从id名获取
	// $("div")[0];  从tagname获取
	//  slice(0,1) charAt(0)==""
function $(selector,father){
	var obj=father||document;
	if(typeof selector=="string"){//判断这个参数是否是字符串
		selector=selector.replace(/^\s*|\s*$/g,"");//删除传入值时的空格 \s空格 
		if(selector.charAt(0)=="."){ //类名
			return getClass(selector.slice(1),obj);
		}else if(selector.charAt(0)=="#"){ //id
			return obj.getElementById(selector.slice(1));
		}else if( /^[a-z|1-10]{1,10}$/g.test(selector) ){
				// /^正则开始   $/正则结束 {1,10}1位到10位 text()判断 g全局比较
			return obj.getElementsByTagName(selector);
		}

	}else if(typeof selector=="function"){  // 代替window.onload
		window.onload=function(){
			selector();
		}
	}
}