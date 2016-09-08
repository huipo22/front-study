/* $(function(){
	var imgs=$(".img");
	var list=$(".list");
	for(var i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onmouseover=function(){
			clearInterval(t);
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=2;
				list[j].style.background="#333";
			}
			imgs[this.index].style.zIndex=3;
			list[this.index].style.background="#ccc";
		}
		list[i].onmouseout=function(){
			t=setInterval(move,2000);
			num=this.index+1;
		}
	}
	var t=setInterval(move,2000);
	var num=1;
	function move(){
		if(num==4){
			num=0;
		}
		for(var j=0;j<imgs.length;j++){
			imgs[j].style.zIndex=2;
			list[j].style.background="#333";
		}
		imgs[num].style.zIndex=3;
		list[num].style.background="#ccc";
		num++;
	}
})*/
/*$(function(){
	var imgs=$(".img");
	var list=$(".list");
	for(var i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onmouseover=function(){
			clearInterval(t)
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=2;
				list[j].style.background="#333";
			}
			imgs[this.index].style.zIndex=3;
			list[this.index].style.background="#ccc";
		}
		list[i].onmouseout=function(){
			t=setInterval(move,2000);
			num=this.index+1;
		}
	}
	var t=setInterval(move,2000);
	var num=1;
	function move(){
		if(num==4){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=2;
			list[i].style.background="#333";
		}
		imgs[num].style.zIndex=3;
		list[num].style.background="#ccc";
		num++;
	}
})*/
$(function(){
	var imgs=$(".img");
	var list=$(".list");
	var banner=$(".banner")[0];//获取大背景--banner
	var bgarr=["red","yellow","blue","green"]//存放(大背景颜色)的数组
	
	for(var i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onmouseover=function(){
			clearInterval(t);//清除时间函数
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=2;
				list[j].style.background="#333";
			}
			imgs[this.index].style.zIndex=3;
			list[this.index].style.background="#ccc";
			banner.style.background=bgarr[this.index];
		}	
		list[i].onmouseout=function(){
			t=setInterval(move,1000)//重新开始
			num=this.index+1;//重新开始，从下一个开始。
		}
	}
	var t=setInterval(move,1000)
	var num=1;//控制下标
	
	function move(){//自动轮播
		if(num==4){//当等于4时，重新从0开始
			num=0
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=2;
			list[i].style.background="#333";
		}
		imgs[num].style.zIndex=3;//imgs[num],控制轮播图片的下标
		list[num].style.background="#ccc";
		banner.style.background=bgarr[num];//将banner的大背景变为当前bgarr数组里的值
		num++;
	}

	//banner
	var bannerleft=$(".banner-left-ul")[0];
	var lis=$("li",bannerleft);
	var bannercon=$(".bannercon");
	var bgarr2=["red","pink","skyblue","indianred","indigo","purple"];

	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){//每次鼠标划上去的事件
			if(this.index==0){//下标为0
				clearInterval(t);
				for(var j=0;j<bannercon.length;j++){//遍历bannercon
					bannercon[j].style.zIndex=2;
				}
				bannercon[0].style.zIndex=4;//将当前的层级变为4
				banner.style.background=bgarr[num-1];//当在下标为0的时候不变，所以需要减1
				t=setInterval(move,1000)
			}else{
				clearInterval(t);
				for(var j=0;j<bannercon.length;j++){
					bannercon[j].style.zIndex=2;
				}
				bannercon[this.index].style.zIndex=4;
				banner.style.background=bgarr2[this.index];//当前的背景改变
			}
		}
	}
})