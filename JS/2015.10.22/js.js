/*var a=new Array(98,100,34,45);
alert(a);*/
/*var aa=new Array();
aa[0]=98;
aa[1]=100;
aa[2]=34;
aa[3]=45;
alert(aa);*/
/*var a=[98,100,34,45]
alert(a);*/
/*var a=new Array(9);
alert(a);*/
/*var a=["张三",null,undefined,350];
alert(a[a.length-1]);*/
// var a=[1,2,3,4,5,6,7,8,9,10];
/*for(var i=0;i<a.length;i++){
	alert(a[i])
}*/
/*var i=0;
while(i<a.length){
	alert(a[i]);
	i++;
}
for(var i in a ){
	alert(a[i]);
}*/	
/*var arr=[[1,2,3],[4,5,6]];
alert(arr);*/
/*var arr1=[];
arr1[0]=[1,2,3];
arr1[1]=[4,5,6];
alert(arr1);*/
/*var arr2=new Array([1,2,3],[4,5,6]);
alert(arr2);*/
/*var arr2 =new Array();
arr2[0]=[1,2,3];
arr2[1]=[4,5,6];
alert(arr2);*/
// var arr=[[1,2,3],[4,5,6]];
/*for(var i=0;i<arr.length;i++){
	for(var j=0;j<arr[i].length;j++){
		document.write(arr[i][j])
	}
}*/
/*var i=0;
while(i<arr.length){
	var j=0;
	while(j<arr[i].length){
		document.write(arr[i][j]);
		j++
	}
	i++;
}*/
/*for(var i in arr){
	for(var j in arr[i]){
		document.write(arr[i][j]);
	}
}*/
//数组练习
/***************************************/
/*1.
function getMax(arr){
	var max=arr[0];
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i];
		}
	}
	return max;
}
document.write(getMax(arr));*/
/***************************************/
/*2.
var arr=[[34,1,2,34],[23],[11,22,33,44,55,66],[12,14]];

function getMlength(arr){
	var max=arr[0];
	for(var j=0;j<arr.length;j++){
		if(max.length<arr[j].length){
			max=arr[j];
		}
	}
	return max;
}
document.write(getMlength(arr));*/
/***************************************/
/*3.
var arr=[23,14,3,56  ,200,4,456];
function getMin(arr){
	var min=arr[0];
	for(var i=0;i<arr.length;i++){
		if(min>arr[i]){
			min=arr[i];
		}
	}
	return min;
}
document.write(getMin(arr));*/
/***************************************/
//1.arr:接收数组
//2.num:">" 从大到小排
//		"<" 从小到大排
/*var arr4=[23,14,3,56,200,4,456];
function list(arr,num){
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(num==">"){
				if(arr[i]<arr[j]){
					var temp;
					temp=arr[i];
					arr[i]=arr[j];	
					arr[j]=temp;
				}
			}
			if(num=="<"){
				if(arr[i]>arr[j]){
					var temp;
					temp=arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
			
		}
	}
	return arr;
}
document.write(list(arr4,">"))*/
//删除数组里的空值
/*var arr4=[3,4,,5,,,1,,45,12,234];
function Null(arr){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]!=null&&arr[i]!=undefined){
			newarr.push(arr[i]);
		}
	}
	return newarr;
}
document.write(Null(arr4));*/
// 1.作业 遍历这个混合数组
// var arr5=[23,45,[12,34,56],"abc"]
/*var arr5=[23,45,[12,34,56],"abc"];
for(var i=0;i<arr5.length;i++){
	if(typeof(arr5[i])=="object"){
		for(var j=0;j<arr5[i].length;j++){
			alert(arr5[i][j])
		}
	}
	else{ 
		alert(arr5[i]);
	}
}*/
/*获取数组最大值
var arr=[1,2,3,4,5,6,7,45,78,21];	//进行比较的数组
function getMax(arr){
	var max=arr[0];			//声明变量max，假设max是最大数
	for(var i=0;i<arr.length;i++){		// 遍历数组
		if(max<arr[i]){					//判断，max依次与数组中的每一个值进行比较,如果max<arr[i]
			max=arr[i];					//进行替换,将大的数赋值给max
		}
	}
	return max;							//遍历完数组之后,返回最大值
}
alert(getMax(arr));						//通过实参改变形参*/
/*
var arr1=[1,,2,3,,,,5,78,,,453,,,788,];		//数组
function getNew(arr){						//函数
	var newarr=[];							//声明新的变量,存储新的数组
	for(var i=0;i<arr.length;i++){			//遍历返回新的数组数组
		if(arr[i]!=undefined){				//判断是不是undefined
			newarr.push(arr[i])				//如果不是undefined，使用push函数存储到新数组中
		}
	}
	return newarr;							//返回新的数组
}
document.write(getNew(arr1));				//实参改变形参*/
/*冒泡排序
var arr2=[12,34,23,5,7,11,54,,,14]			//数组
function Pai(arr,fu){						//函数
	for(var i=0;i<arr.length;i++){			//趟数
		for(var j=i+1;j<arr.length;j++){	//次数  i的当前值的下一个值开始遍历
			if(fu==">"){					//">"从大到小排
				if(arr[i]<arr[j]){				//判断第一个数和第二个数，哪个大
					var temp;					//当前i的值与j的值比较，如果当前值小于
												//j的值，他们交换，当前i的值变为最小数，
												//一抖每次比较时，都是拿之前的最大数进行比较，
												//发现比他大的数再交换
					temp=arr[i];				//交换两个数的位置，需要借助temp
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
			if(fu=="<"){					//"<"从小到大排
				if(arr[i]>arr[j]){				//判断第一个数和第二个数，哪个大
					var temp;					//交换两个数的位置，需要借助temp
					temp=arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			}
		}
	}
	return arr;							//返回排序后的数组
}
document.write(Pai(arr2,"<"));				//实参改变形参*/
/*var arr5=[23,45,[12,34,56],"abc"];		//数组
for(var i in arr5){					//遍历一维数组
	if(typeof arr5[i]=="object"){	//检测数据类型是不是object，如果是object，再执行下一步
		for(var j in arr5[i]){		//遍历二维数组
			alert(arr5[i][j]);		//弹出这个二维数组里的每一个数
		}
	}else{
		alert(arr5[i]);				//否则弹出一维数组
	}
}*/
/*var arr5=[23,45,[12,34,56],"abc"];
for(var i=3 in arr5){
	alert(arr5[i])
}*/
/*交换排序
var arr6=[23,45,12,56,9,98];
var newarr=[];
for(var i in arr6){
	newarr[i]=arr6[i];
}
for(var i=0;i<newarr.length;i++){
	for(var j=i+1;j<newarr.length;j++){
		var temp=i;
		if(newarr[temp]<newarr[j]){
			temp=j;
		}
		if(temp!=i){
			var temp1;
			temp1=newarr[i];
			newarr[i]=newarr[j];
			newarr[j]=temp1;
		}
	}
}
document.write(newarr);*/
var arr6=[12,3,5,2,5,3,6,12];
var newarr=[];
for(var i in arr6){
	newarr[i]=arr6[i];
}
for(var i=0;i<newarr.length;i++){ 
	for(var j=i+1;j<newarr.length;j++){
		if(newarr[i]==newarr[j]){
			document.write(newarr[i])
		}
	}
}
