/*
	left:banner的宽-iW;
	top:banner的高-iH;

	left:banner的宽-iW-iW*0.8;
	top:banner的高-iH*0.8;
*/
window.onload=function(){
	var $banner=$('.banner');
	var $imgs=$('img',$banner);
	var bW=$banner.width();
	var bH=$banner.height();
	var $left=$('.left');
	var $right=$('.right');

	var iW=360;
	$imgs.width(iW);//获取图片的宽
	var iH=$imgs.height();//获取图片的高
	var imgS=[];//声明空数组
	$imgs.each(function(i,obj){
		if(i==2){
			var w=iW;
			var h=iH;
			var l=(bW-iW)/2;
			var t=(bH-iH)/2;
			var z=99;
		}else if(i==1){
			var w=iW*0.8;
			var h=iH*0.8;
			var l=(bW-iW-iW*0.8)/2;
			var t=(bH-h)/2;
			var z=98;
		}else if(i==3){
			var w=iW*0.8;
			var h=iH*0.8;
			var l=(bW+iW-iW*0.8)/2;
			var t=(bH-h)/2;
			var z=98;
		}else if(i==0){
			var w=iW*0.8*0.8;
			var h=iH*0.8*0.8;
			var l=(bW-iW-iW*0.8-iW*0.8*0.8)/2;
			var t=(bH-h)/2;
			var z=97;
		}else if(i==4){
			var w=iW*0.8*0.8;
			var h=iH*0.8*0.8;
			var l=(bW+iW+iW*0.8-iW*0.8*0.8)/2;
			/* banner的宽+iW+iW*0.8-下面覆盖的iW*0.8*0.8 */
			var t=(bH-h)/2;
			var z=96;
		}
		$(this).css({width:w,height:h,left:l,top:t,zIndex:z});//当前对象的样式
		imgS.push({'w':w,'h':h,'l':l,'t':t,'z':z})//将样式放入空数组imgS
	})
	$imgs=$.makeArray($imgs);//使用makeArray 将$imgs转换成数组
	// console.log($imgs);
	var t=setInterval(moveL,2000)
	var flag=true;//开关
	function moveL(){
		if(!flag){
			return;
		}
		flag=false;
		$imgs.push($imgs.shift());/*shift 把数组的第一个元素删除  先将元素删除，然后又用push方法添加到数组末尾*/
		$.each($imgs,function(i,obj){
			$(obj).css({zIndex:imgS[i].z}).animate({width:imgS[i].w,height:imgS[i].h,left:imgS[i].l,top:imgS[i].t},300,function(){
				flag=true;
			})
		})
	}
	function moveR(){
		if(!flag){
			return;
		}
		flag=false;
		$imgs.unshift($imgs.pop());/*pop 把数组的最后一个元素删除  然后又用unshift方法添加到数组开头*/

		$($imgs).each(function(i,obj){
			$(obj).animate({width:imgS[i].w,height:imgS[i].h,left:imgS[i].l,top:imgS[i].t,zIndex:imgS[i].z},300,function(){
				flag=true;
			})
		})
	/*	$.each($imgs,function(i,obj){
			$(obj).css({zIndex:imgS[i].z}).animate({width:imgS[i].w,height:imgS[i].h,left:imgS[i].l,top:imgS[i].t},300,function(){
				flag=true;
			})
		})*/
	}
	/*鼠标按下阻止默认事件*/
	$('a',$banner).mousedown(function(e){
		e.preventDefault();
	})
	$banner.hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(moveL,2000)
	})
	$left.click(function(){
		moveL();
	})
	$right.click(function(){
		moveR();
	})
}