/*function a(){
	alert(2);
}*/
/*var a=function(){
	alert(5);
}*/
/*window.onload=function(){
	var div=document.getElementsByClassName("box")[0];
	div.onclick=function a(){
	alert(2);
	}
}*/
// var a=new Function("alert(1)");
// a();
/*(function(){
	alert(1);
})();*/
/*(function(){
	alert(1);
}())*/
/*bb();
*/
/*function aa(val){
	for(var i=1;i<=val;i++){
		for(var k=val;k>i;k--){
			document.write("&nbsp;");
		}
		for(var j=1;j<=2*i-1;j++){
			document.write("*");
		}
		document.write("<br>");
	}
}
aa(7);*/
/*for(var i=1;i<=7;i++){
	for(var j=1;j<=7-i;j++){
		document.write("&nbsp");
	}
	for(var k=1;k<=2*i-1;k++){
		document.write("*");
	}
	document.write("<br>");
}*/
// 只能检测初始类型
/*function aa(num){
	alert("你输入的数据类型是"+typeof(num));
	switch(typeof(num)){
		case "number":alert("数值类型");
		break;
		case "string":alert("字符串类型");
		break;
		case "boolean":alert("布尔类型");
		break;
		case "undefined":alert("未定义类型");
		break;
		case "object":alert("对象类型");
		break;
		default:alert("未知");
	} 
}
aa("33");*/
/*function bb(val){
	if(typeof(val)=="number"){
		alert("你输入的是数值类型");
	}else if(typeof(val)=="string"){
		alert("你输入的是字符串类型");
	}else if(typeof(val)=="boolean"){
		alert("你输入的是布尔类型");
	}else if(typeof(val)=="undefined"){
		alert("你输入的是未定义类型");
	}else if(typeof(val)=="object"){
		alert("你输入的是对象类型");
	}else{
		alert("未知")
	}
}
 bb("34");*/
/* function cc(val1,val2){
 	// alert(val1);
 	// alert(val2);
 	alert(arguments.callee);
 }
 cc(34,"567",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,151,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);

*/
/*function dd(val1,val2){
	return val1+val2;
}
alert(dd(13,2));*/