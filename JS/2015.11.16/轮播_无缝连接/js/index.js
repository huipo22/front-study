$(function(){

	var lists=$(".lists")[0];
	var imgs=$("img",lists);
	var index=$(".index")[0];
	var indexs=$("li",index);
	var banner=$(".banner")[0];
	var right=$(".right")[0];
	var left=$(".left")[0];
	// alert(imgs.length);
	var imgW=imgs[0].offsetWidth;
	var len=imgs.length;

	for(var i=0;i<len;i++){
		if(i!=0){
			imgs[i].style.left=imgW+"px";//把除第一个外的其他图放到窗口的右侧
		}
	
	}


	var now=0;//当前下标
	var next=0;//下一张下标
	var t=setInterval(autoMove,1500);
	var flag=true;//打开开关，为true
	function autoMove(){
		next++;//自加，同时控制0和1两张图，使两张图一起轮播
		if(next==len){ //当next值与len值相等时，轮播从头开始
			next=0;
		}
		if(!flag){
			return
		}
		flag=false;
		imgs[next].style.left=imgW+"px";//把接下来的一张图放到窗口右面，保持轮播时从右向左
		animate(imgs[now],{left:-imgW},800);
		animate(imgs[next],{left:0},800,Tween.linear,function(){
			flag=true;
		});
		indexs[now].className="";//当前按钮变化消失
		indexs[next].className="hot";//下一个按钮变化出现
		now=next;//把第一次轮播后的第二张图的next值给now，使第二张图成为下一次轮播的第一张

	}


	var ilen=indexs.length;
	for(var i=0;i<ilen;i++){
		indexs[i].index=i;
		indexs[i].onclick=function(){//给每一个按钮添加点击事件
			if(now==this.index||!flag){//当当前图片与点击按钮的顺序相同时，跳出函数，防止当前图片来回轮播
				return;         //开关只有关闭为false时才不会跳出函数，若保持开关打开就会跳出函数
			}

			flag=false;//关闭开关
			if(now<this.index){//当当前图片顺序小于点击按钮的顺序，使按钮对应的图片从右向左轮播
				imgs[this.index].style.left=imgW+"px";//按钮对应的图片到窗口右侧，准备从右向左轮播
				animate(imgs[now],{left:-imgW},800);//当前图片向左移动
			}else{//当当前图片顺序大于点击按钮的顺序，使按钮对应的图片从左向右轮播
				imgs[this.index].style.left=-imgW+"px";//按钮对应的图片到窗口左侧，准备从左向右轮播
				animate(imgs[now],{left:imgW},800);//当前图片向右移动
			}

			
			animate(imgs[this.index],{left:0},800,Tween.linear,function(){//按钮对应的图片移动到窗口中
				flag=true;
			});
			
			indexs[now].className="";//当前图片对应按钮变化消失
			this.className="hot";//点击的按钮变化出现
			next=now=this.index;//将当前点击按钮对应的图片 成为下一次点击按钮时的当前图片
			//给next赋值this.index，保证从当前点击位置继续轮播
			
		}
	}




	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(autoMove,1500);
	}

	right.onclick=function(){
		autoMove();
		
	}
	left.onclick=function(){
		next--;//自加，同时控制0和1两张图，使两张图一起轮播
		if(next==-1){ //当next值与len值相等时，轮播从头开始
			next=4;
		}
		if(!flag){
			return
		}
		flag=false;
		imgs[next].style.left=-imgW+"px";//把接下来的一张图放到窗口右面，保持轮播时从右向左
		animate(imgs[now],{left:imgW},800);
		animate(imgs[next],{left:0},800,Tween.linear,function(){
			flag=true;
		});
		indexs[now].className="";//当前按钮变化消失
		indexs[next].className="hot";//下一个按钮变化出现
		now=next;//把第一次轮播后的第二张图的next值给now，使第二张图成为下一次轮播的第一张
	}







	
})