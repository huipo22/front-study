//console.log("1");
function getClass(classname,obj){
	var obj=obj||document;
	if(obj.getElementsByClassname){
		return obj.getElementsByClassname(classname)
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
			obj.textContent=val;
		}else{
			obj.innerText=val;
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
		return window.getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}