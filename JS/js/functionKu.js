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
	for(var i=0;i<newarr.length;i++){
		if(newarr[i]==classname){
			return true;
		}
	}
	return false;
}	
function getText(obj,val){
	if(val!=undefined){
		if(obj.textContent||obj.textContent==""){
			obj.textContent;
		}else{
			obj.innerText;
		}
	}else{
		if(obj.textContent){
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}	
}
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return parseInt(window.getComputedStyle(obj,null)[attr]);
	}else{
		return parseInt(obj.currentStyle[attr]);
	}
}
function $(selector,obj){
	var obj=obj||document;
	if(typeof selector=="string"){
		selector=selector.replace(/^\s*|\s*$/g,"");
		if(selector.charAt(0)=="."){
			return getClass(selector.slice(1),obj);
		}else if(selector.charAt(0)=="#"){
			return obj.getElementById(selector.slice(1))
		}else if(/^[a-z|1-10]{1,10}$/g.test(selector)){
			return obj.getElementsByTagName(selector);
		}
	}
	if(typeof selector=="function"){
		window.onload=function(){
			selector();
		}
	}
}
function getChilds(father,type){
	var type=type||"a";
	var childs=father.childNodes;
	var arr=[];
	for(var i=0;i<childs.length;i++){
		if(type=="a"){
			if(childs[i].nodeType==1){
				arr.push(childs[i]);
			}
		}else if(type=="b"){
			if(childs[i].nodeType==1||(childs[i].nodeValue.replace(/^\s*|\s*$/g,"")!=""&&
				childs[i].nodeType!=8)){
				arr.push(childs[i]);
			}
		}
	}
	return arr;
}
function getFirst(father){
	return getChilds(father)[0];
}
function getLast(father){
	return getChilds(father)[getChilds(father).length-1];
}
function getNum(father,val){
	return getChilds(father)[val];
}
function getDown(obj){
	var down=obj.nextSibling;
	while(down.nodeType==3||down.nodeType==8){
		down=down.nextSibling;
		if(down==null){
			return false;
		}
	}
	return down;
}
function getUp(obj){
	var up=obj.previousSibling;
	if(up==null){
		return false;
	}
	while(up.nodeType==3||up.nodeType==8){
		up=up.previousSibling;
		if(up==null){
			return false;
		}
	}
	return up;
}
Object.prototype.insertAfter=function(newobj,obj){
	var down=getDown(obj);
	if(down){
		this.insertBefore(newobj,down)
	}else{
		this.appendChild(newobj);
	}
}
function addEvent(obj,event,fun){
	if(obj.addEventListener){
		return obj.addEventListener(event,fun,false)
	}else{
		return obj.attachEvent("on"+event,fun)
	}
}
function removeEvent(obj,event,fun){
	if(obj.removeEventListener){
		return obj.removeEventListener(event,fun,false)
	}else{
		return obj.detachEvent("on"+event,fun)
	}
}
function mouseWheel(obj,upfun,downfun){
	if(obj.attachEvent){
		obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
	}else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari -webkit
		obj.addEventListener("DOMMouseScroll",scrollFn,false);//firefox -moz-
	}
	function scrollFn(e){
		var ev=e||window.event;
		if(ev.detail==-3||ev.wheelDelta==120){
			if(upfun){
				upfun();
			}
		}
		if(ev.detail==3||ev.wheelDelta==-120){
			if(downfun){
				downfun();
			}
		}
		if (ev.preventDefault){
			ev.preventDefault(); //阻止默认浏览器动作(W3C)
		}	
		else{
			ev.returnValue = false;//IE中阻止函数器默认动作的方式
		}
	}
}
	//16.hover
	//判断某个元素是否包含有另外一个元素
	function contains (parent,child) {
		if(parent.contains){
			return parent.contains(child) && parent!=child;
		}else{
			return (parent.compareDocumentPosition(child)===20);
		}
	}

	//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
	function checkHover (e,target) {
		if(getEvent(e).type=="mouseover"){
			return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
		}else{
			return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
			!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
		}
	}
	//鼠标移入移出事件
	/*
	  obj   要操作的对象
	  overfun   鼠标移入需要处理的函数
	  outfun     鼠标移除需要处理的函数
	  */
	  function hover (obj,overfun,outfun) {
	  	if(overfun){
	  		obj.onmouseover=function  (e) {
	  			if(checkHover(e,obj)){
	  				overfun.call(obj,[e]);
	  			}
	  		}
	  	}
	  	if(outfun){
	  		obj.onmouseout=function  (e) {
	  			if(checkHover(e,obj)){
	  				outfun.call(obj,[e]);
	  			}
	  		}
	  	}
	  }
	  function getEvent (e) {
	  	return e||window.event;
	  }
	  /********************************/
	  //17.
	  function getObj(){
	  	return obj=document.documentElement.scrollTop?document.documentElement:document.body;
	  }