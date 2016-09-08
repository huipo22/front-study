/*window.onload=function(){
	var imgs=document.getElementsByClassName("lists")[0].getElementsByTagName("img");
	var indexs=document.getElementsByClassName("index")[0].getElementsByTagName("li");
	var banner=document.getElementsByClassName("banner")[0];
	var left=document.getElementsByClassName("left")[0];
	var right=document.getElementsByClassName("right")[0];


	var flag=true;//打开开关 为true 	(执行打开开关到关闭开关之间的内容)
	var len=imgs.length;
	var imgW=imgs[0].offsetWidth;
	for(var i=0;i<len;i++){
		if(i!=0){//第一张图片不动 需要判断
			imgs[i].style.left=imgW+'px';//把除第一张以外的其他图片放在窗口的右侧
		}

	}
	//autoMove自动轮播
	var now=0;//当前下标
	var next=0;//下一张的下标
	
	var t=setInterval(autoMove,2000);
	function autoMove(){
		if(!flag){
			return// 判断动画是否执行完  为false时返回
		}
		flag=false;

		next++;//自加 同时控制0和1两张图，是两张图一起轮播
		//next		0 1 2 3 4
		//next++	1 2 3 4 5
		if(next==len){//当next自加之后的值与len的值相同时，轮播从头开始
			next=0;
		}
	
		imgs[next].style.left=imgW+'px';//把下一张图next放在窗口的右面，保持轮播时从右向左
		//两张图片同时运动
		animate(imgs[now],{left:-imgW},800);//-imgW
		animate(imgs[next],{left:0},800,Tween.linear,function(){//0
			flag=true;
		});

		//执行完之后		对应下标	当前下标，下一个下标已经有了,不需要再次定义
		indexs[now].className="";//当前按钮变化消失，背景不再变化
		indexs[next].className="hot";//下一个按钮变化出现 用的是hot的类名样式
		now=next;//把第一次轮播后的第二张图的next值赋给now，使第二张图成为下一次轮播的第一张
	}


	//按钮点击事件
	var ilen=indexs.length;
	for(var i=0;i<ilen;i++){
		indexs[i].index=i;
		indexs[i].onclick=function(){//给每一个按钮添加点击事件
									 //函数体里 外面的循环已经结束，需要借助this.index
			if(now==this.index||!flag){//当前图片与点击按钮的顺序相同时，跳出函数，防止当前图片来回轮播
				return;				  //开关只有关闭为false时执行返回
			}
			flag=false;//开关关闭
			if(now<this.index){//当前图片顺序小于点击按钮的顺序
				imgs[this.index].style.left=imgW+'px'//提前放到窗口右侧，准备从右向左轮播
				animate(imgs[now],{left:-imgW},800);//当前图片向左移动
			}else{//当前图片顺序大于点击按钮的顺序
				imgs[this.index].style.left=-imgW+'px';//提前放到窗口左侧，准备从左向右轮播
				animate(imgs[now],{left:imgW},800);//当前图片向右移动
			}
			animate(imgs[this.index],{left:0},800,Tween.linear,function(){//点击哪个，哪个有效果
				flag=true;//开关打开
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
  		t=setInterval(autoMove,2000);
 	}
 	right.onclick=function(){
 		autoMove();
 	}
 	left.onclick=function(){
 		if(!flag){
			return//为false时返回
		}
		flag=false;

 		next--;//自减
		//next		0 1 2 3 4
		//next--	-1 0 1 2 3
		if(next==-1){//当next自加之后的值与len的值相同时，轮播从头开始
			next=len-1;
		}
		imgs[next].style.left=-imgW+'px';//把下一张图next放在窗口的右面，保持轮播时从右向左
		//两张图片同时运动
		animate(imgs[now],{left:imgW},800);
		animate(imgs[next],{left:0},800,Tween.linear,function(){
			flag=true;
		});

		//执行完之后		对应下标	当前下标，下一个下标已经有了,不需要再次定义
		indexs[now].className="";//当前按钮变化消失，背景不再变化
		indexs[next].className="hot";//下一个按钮变化出现 用的是hot的类名样式
		now=next;//把第一次轮播后的第二张图的next值赋给now，使第二张图成为下一次轮播的第一张
 	}

}  */
/*window.onload=function(){
	var imgs=document.getElementsByClassName("lists")[0].getElementsByTagName("img");
	var indexs=document.getElementsByClassName("index")[0].getElementsByTagName("li");
	var banner=document.getElementsByClassName("banner")[0];
	var left=document.getElementsByClassName("left")[0];
	var right=document.getElementsByClassName("right")[0];

	var flag=true;
	var imgW=imgs[0].offsetWidth
	var len=imgs.length;
	for(var i=0;i<len;i++){
		if(i!=0){
			imgs[i].style.left=imgW+'px';
		}
	}

	var now=0;
	var next=0;
	var t=setInterval(autoMove,2000)
	function autoMove(){
		if(!flag){
			return
		}
		flag=false;

		next++;
		if(next==len){
			next=0;
		}
		
		imgs[next].style.left=imgW+'px';
		animate(imgs[now],{left:-imgW},800);
		animate(imgs[next],{left:0},800,Tween.linear,function(){
			flag=true;
		});
		indexs[now].className="";
		indexs[next].className="hot";
		now=next;
	}

	var ilen=indexs.length;
	for(var i=0;i<ilen;i++){
		indexs[i].index=i;
		indexs[i].onclick=function(){
			if(now==this.index||!flag){//点击事件里判断
				return;
			}
			flag=false;
			if(now<this.index){
				imgs[this.index].style.left=imgW+'px';
				animate(imgs[now],{left:-imgW},800)
			}else{
				imgs[this.index].style.left=-imgW+'px';
				animate(imgs[now],{left:imgW},800)
			}
			animate(imgs[this.index],{left:0},800,Tween.linear,function(){
				flag=true;
			});
			indexs[now].className="";
			this.className="hot";
			next=now=this.index;
		}
	}
	banner.onmouseover=function(){
  		clearInterval(t);
  	}
  	banner.onmouseout=function(){
  		t=setInterval(autoMove,2000);
 	}
 	right.onclick=function(){
 		autoMove();
 	}
 	left.onclick=function(){
 		if(!flag){
 			return;
 		}
 		flag=false;
 		
 		next--;
 		if(next==-1){
 			next=len-1;
 		}
 		
 		// alert(next)
 		imgs[next].style.left=imgW+"px";
 		animate(imgs[now],{left:-imgW},800);
 		animate(imgs[next],{left:0},800,Tween.linear,function(){
 			flag=true;
 		});
 		indexs[now].className="";
 		indexs[next].className="hot";
 		now=next;
 	}
}*/
$(function(){
	var img=$(".lists")[0];
	var imgs=$("img",img);
	var index=$(".index")[0];
	var indexs=$("li",index);
	var banner=$(".banner")[0];
	var left=$(".left")[0];
	var right=$(".right")[0];
	var span=$("span")[0]
	var len=imgs.length;
	// console.log(imgs[0].style.left=imgW+"px");
	for(i=0;i<len;i++){
		var imgW=imgs[0].offsetWidth;
		// console.log(i)
		if(i!=0){//判断 不是第一张图片 放在右侧
			// console.log(imgW)
			imgs[i].style.left=imgW+"px";
		}
	}
	var now=0;
	var next=0;
	var t=setInterval(autoMove,2000);
	var flag=true;
	function autoMove(){
		if(!flag){
			return;
		}
		flag=false;
		next++;
		if(next==len){
			next=0
		}
		imgs[next].style.left=imgW+"px";
		animate(imgs[now],{left:-imgW},600);
		animate(imgs[next],{left:0},600,Tween.Linear,function(){
			flag=true;
		});
		indexs[now].className="";
		indexs[next].className="hot";
		// alert(next)
		span.innerHTML=next+1;//第一次动画完成之后+1  赋值给innerHTML
		now=next;
	}

	
	var ilen=indexs.length
	for(var i=0;i<ilen;i++){
		indexs[i].index=i;
		indexs[i].onclick=function(){
			if(now==this.index||!flag){
				return;
			};
			flag=false;
			if(now<this.index){
				imgs[this.index].style.left=imgW+"px";
				animate(imgs[now],{left:-imgW},600)
			}else{
				imgs[this.index].style.left=-imgW+"px";
				animate(imgs[now],{left:imgW},600)
			}
			animate(imgs[this.index],{left:0},600,Tween.Linear,function(){
				flag=true;
			});
			indexs[now].className="";
			this.className="hot";
			span.innerHTML=next+1;
			now=next=this.index;
		}
		// indexs[i].onclick=function(){
		// 	if(now==this.index||!flag){
		// 		return;
		// 	}
		// 	flag=false;
		// 	if(now<this.index){
		// 		imgs[this.index].style.left=imgW+"px";
		// 		animate(imgs[now],{left:-imgW},800)
		// 	}else{
		// 		imgs[this.index].style.left=-imgW+"px";
		// 		animate(imgs[now],{left:imgW},800)
		// 	}
		// 	animate(imgs[this.index],{left:0},800,Tween.Linear,function(){
		// 		flag=true;
		// 	});
		// 	indexs[now].className=""
		// 	this.className="one"
		// 	span.innerHTML=next+1;
		// 	now=next=this.index;
		// }
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(autoMove,2000);
	}
	right.onclick=function(){
		autoMove();
	}
	left.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		next--;
		// if(next==-1){
		// 	next=len-1
		// }
		if(next<0){
			next=len-1
		}
		imgs[next].style.left=imgW+"px";//imgW
		animate(imgs[now],{left:-imgW},800);//-imgW
		animate(imgs[next],{left:0},800,Tween.Linear,function(){//0
			flag=true;
		});
		indexs[now].className="";
		indexs[next].className="hot";
		span.innerHTML=next+1;
		now=next;
	}
})