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
		num++;
	}
})