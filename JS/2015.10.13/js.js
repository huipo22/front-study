/* var num=prompt("输入数字"," ");
 if(num%2==0){
 	alert("偶数")
 }
 if(!(num%2==0)){
 	alert("奇数");
 }*/
/* 双路分支
 var name=prompt("请输入账号"," ");
 var Pwd=123;
 if(name==Pwd){
 	alert("登录成功")
 }else{
 	alert("登录失败");
 }*/
/* 判断成绩
 var num=prompt("输入成绩","");
 if(num>=90&&num<100){
 	alert("优秀");
 }else if(num>=70&&num<90){
 	alert("良好");
 }else if(num>=60&&num<70){
 	alert("及格");
 }else{
 	if(num>100){
 		alert("超出范围")
 	}else if(num<0){
 		alert("不符合")
 	}else{
 		alert("不及格");
 	}
 }*/
/* 星期
 var week=prompt("输入日期","");
 switch(week){
 	case "1":alert("星期一");
 	break;
 	case "2":alert("星期二");
 	break;
 	case "3":alert("星期三");
 	break;
 	case "4":alert("星期四");
 	break;
 	case "5":alert("星期五");
 	break;
 	case "6":alert("星期六");
 	break;
 	case "7":alert("星期日");
 	break;
 	default:alert("不符合")
 }*/
/* 四则运算
 var val1=prompt("输入第一个数","");
 var val2=prompt("输入第二个数","");
 var fu=prompt("符号","");
 switch(fu){
 	case "+": alert(parseInt(val1)+parseInt(val2));
 	break;
 	case "-": alert(parseInt(val1)-parseInt(val2));
 	break;
 	case "*": alert(parseInt(val1)*parseInt(val2));
 	break;
 	case "/": alert(parseInt(val1)/parseInt(val2));
 	break;
 	default:alert("非法输入");
 }*/
/* 10行10列  交替变色
 document.write("<table align='center'>")
 for(i=0;i<=9;i++){
 	if(i%2==0){
	 	document.write("<tr bgcolor=#aaa>")
	 }else{
	 	document.write("<tr bgcolor=#ccc>")
	 }
 	for(j=0;j<=9;j++){
 		if(j%2==0&&i%2==0){
 			document.write("<td bgcolor='red'>")
 		}else if(j%2==1&&i%2==1 ){
 			document.write("<td bgcolor='blue'>")
 		}else{
 		document.write("<td bgcolor='#fff'>");
 		}
 		document.write("第"+i+"行"+"第"+j+"列");
 		document.write("</td>");
 	}
 	document.write("</tr>")
 }
  document.write("</table>")*/
/* 9*9乘法表   while
 var i=1;
 while(i<=9){
 	var j=1;
 	while(j<=i){
 		if(j==2&&(i==3||i==4)){
 			document.write(j+"*"+i+"="+j*i+"&nbsp;&nbsp;&nbsp;")
 		}
 		else{
	 		document.write(j+"*"+i+"="+j*i+"&nbsp;")
	 	}
 		j++;
 	}
 	document.write("<br/>")
 	i++;
 }*/
/* out:
 for(var i=0;i<6;i++){
 	document.write("外层循环"+i);
 	document.write("<br>");
 	for(var j=0;j<6;j++){
 		if(j==2){
 			break out;
 		}
 		document.write("里层循环"+j+"&nbsp;&nbsp;");
 	}
 	document.write("<br>");
 }*/
/* 作业1
 for(var i=0;i<=34;i++){
 		if(i*2+4*(34-i)==96){
 			document.write("鸡有"+i+"只"+"&nbsp"+"兔有"+(34-i)+"只")
 		}
 }
 作业2
for(var i=0;i<=100;i++){
	for(var j=0;j<=100;j++){
		if((i*10+j*5+(100-i-j)*0.5==100)&&(i+j+(100-i-j)==100))
			document.write("教材"+i+"本"+"&nbsp;"+"参考书"+j+"本"+"&nbsp;"+"练习本"+(100-i-j)+"本")
	}
}
 // 作业3
for(var sum=100;sum<200;sum++){
	if((sum%3==1)&&(sum%4==2)&&(sum%5==3)){
		document.write("共有"+sum+"&nbsp;&nbsp;")
	}
}*/
/*document.write("<table>");
for(var i=0;i<=9;i++){
	if(i%2==0){
		document.write("<tr bgcolor='#ccc'>")
	}else{
		document.write("<tr bgcolor='#fff'>")
	}
	for(var j=0;j<=9;j++){
		if(i%2==0&&j%2==0){
			document.write("<td bgcolor='red'>")
		}else if(i%2==1&&j%2==1){
			document.write("<td bgcolor='blue'>")
		}else{
			document.write("<td bgcolor='white'>")
		}
		
		document.write(i+"行"+j+"列")
		document.write("</td>")
	}
	document.write("</tr>")
}
document.write("</table>")*/
/*var i=1;
while(i<=9){
	var j=1;
	while(j<=i){
		if(j==2&&(i==3||i==4)){
			document.write(j+"*"+i+"="+j*i+"&nbsp;&nbsp;&nbsp;&nbsp;")
		}else{
		document.write(j+"*"+i+"="+j*i+"&nbsp;&nbsp;")
	}
		j++;
	}
	document.write("<br>")
	i++;
}
*//*var i=parseInt(prompt("输入第一个数",""));
var j=parseInt(prompt("输入第二个数",""));
var fu=prompt("输入符号","");
switch(fu){
	case "+":alert(i+j);
	break;
	case "-":alert(i-j);
	break;
	case "*":alert(i*j);
	break;
	case "/":alert(i/j);
	break;
	default:alert("非法输入");
}*/
/*var num=prompt("输入成绩","");
if(num>=90&&num<=100){
	alert("优秀");
}else if(num>=80&&num<90){
	alert("良好");
}else if(num>=70&&num<80){
	alert("继续努力");
}else if(num>=60&&num<70){
	alert("及格");
}else if(num<0||num>100){
		alert("非法输入");
}else{
	alert("不及格");
}*/
/*var i=parseInt(prompt("输入第一个数",""));
var j=parseInt(prompt("输入第二个数",""));
var fu=prompt("输入符号","");
switch(fu){
	case "+":alert(i+j);
	break;
	case "-":alert(i-j);
	break;
	case "*":alert(i*j);
	break;
	case "/":alert(i/j);
	break;
	default: alert("非法输入");
}*/
/*document.write("<table>")
for(var i=1;i<=10;i++){
	document.write("<tr>")
	for(var j=1;j<=10;j++){
		if(i%2==0&&j%2==0){
			document.write("<td bgcolor='red'>")	
		}else if(i%2==1&&j%2==1){
			document.write("<td bgcolor='blue'>")
		}else{
			document.write("<td bgcolor='white'>")
		}
		document.write(i+"行"+j+"列")
		document.write("</td>")
	}
	document.write("</tr>")
}
document.write("</table")*/
/*var i=1;
while(i<=9){
	var j=1;
	while(j<=i){
		if(j==2&&(i==3||i==4)){
			document.write(j+"*"+i+"="+j*i+"&nbsp;&nbsp;&nbsp;&nbsp;");
		}else{
			document.write(j+"*"+i+"="+j*i+"&nbsp;&nbsp;");
		}
		
		j++;
	}
	document.write("<br>")
	i++;
}*/
/*for(var i=1;i<=9;i++){
	for(var j=1;j<=i;j++){
		if(j==2&&(i==3||i==4)){
			document.write(j+"*"+i+"="+j*i+"&nbsp;&nbsp;&nbsp;&nbsp;")
		}else{
			document.write(j+"*"+i+"="+j*i+"&nbsp;&nbsp;")
		}
		
	}
	document.write("<br>");
}*/