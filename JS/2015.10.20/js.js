function aa(a,b){
	if(arguments.length==1){
		return "参数有一个:"+a;
	}
	if(arguments.length==2){
		return "参数有两个:"+a+","+b;
	}
	if(arguments.length==3){
		return "参数有三个:"+a+","+b+arguments[2];
	}
	if(arguments.length>=3){
		return "参数太多了";
	}
}
alert(aa(1,2,3));
/*for(var i=0;i<10;i++){
	if(i==3){
		continue
	}
	document.write(i);
}

//结果是：1 2 4 5 6 7 8 9 10  可见他仅仅是不输出3，因为他结束了本次循环*/
/*c=10;
function bb(num){
	c=30;
	alert(num);
}
bb(9)
alert(c);*/
/*function aa(){
	alert(1);
}

var aa=function(){
	alert(3);
}
aa();*/
/*var a=10;
function aa(){
	alert(a);
}
aa();*/
/*var str="一" ;
function a(){
	// var str="二" ;
	function b(){
		// var str="三";
		alert(str);
	}
	b();
}
a();*/
/*function aa(a,b){
	alert(a+b);
}
alert(aa("23","22"));  */
/*function jia(a,b){
	return a+b;
}
function jian(a,b){
	return a-b;
}
function cheng(a,b){
	return a*b;
}
function chu(a,b){
	return a/b;
}
function sum(a,b,ab){
	return ab (a,b);
}
alert(sum(4,5,chu));*/
/*function aa(){
	var a="123";
	function bb(){
		return a;
	}
	return bb;
}

var cc=aa();
alert(cc());*/
/*window.onload=function(){
	var box=document.getElementsByClassName("box");
	for(var i=0;i<3;i++){
		(function(i){
			box[i].onclick=function(){
				alert(i);
			}
		})(i);
	}
}*/
/*function jie(num){
	if(num==1){
		return num;
	}else{
		return num*jie(--num);
	}
	
}
alert(jie(5));*/
/*function a(num){
	if(num>1){
		a(--num);
	}
	document.write(num);
	document.write("<br>");
}
a(5);*/
/*function a(){
	var i=9;
	function b(){
		return i++;
	}
	return b;
}
alert(a()());
alert(a()());*/
/*var c=a();
alert(c());
alert(c());*/
/*function aa(num){
	if(num>1){
		aa(--num);
	}
	document.write(num);
}
aa(5);*/
/*第一次调用：
	num=5;
		--5	4
		第二次调用：
			num=4
			--4	3
			第三次调用：
				num=3
				--3 2
				第四次调用：
					num=2
					--2 1
					第五次调用：
						num=1
	
						输出	1
				输出	1
			输出	2
		输出	3
	输出	4*/
