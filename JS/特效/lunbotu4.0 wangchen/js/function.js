function $(selector,obj)
{
	var obj=obj||document;
	if (typeof selector=='string')
	{
		if (selector.charAt(0)=='.')
		{
			return getclass(selector.slice(1));
		}
		else if (selector.charAt(0)=='#')
		{
			return document.getElementById(selector.slice(1));
		}
		else if (/^[a-z|1-6]{1,10}/.test(selector));
		{
			return obj.getElementsByTagName(selector);
		}
	}
	else if (typeof selector=='function')
	{
		window.onload=function()
		{
			selector();
		}
	}
}
function getclass(aa,obj)
{
	var obj=obj||document;
	if (obj.getElementsByClassName)
	{
		return obj.getElementsByClassName(aa);
	}
	else 
	{
		var tt=document.getElementsByTagName(aa);
		var arr=[];
		for (var i = 0; i < tt.length; i++) {
			if (checkclass(tt[i].className),aa)
			{
				arr.push=tt[i];
			}
		};
		return arr;
	}
}
function checkclass(objclass,newclass)
{
	var arr=objclass.split(' ');
	var flag=false;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]==newclass)
		{
			flag=true;
		}
	}
	return flag;
}

function getstyle(obj,attr)							//获取对象外部或者引用的样式，obj是对象  attr是属性    有单位
{
	if (obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else 
	{
		return getComputedStyle(obj,null)[attr];
	}
}

