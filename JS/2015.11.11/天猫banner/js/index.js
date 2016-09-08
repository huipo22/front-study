$(function(){

	var imgs=$(".imgs");//图片类
	var list=$(".list");//按钮类
	var bgarr=["red","yellow","blue","green"];
	var banner=$(".banner")[0];
	// 鼠标经过特效
	for(var i=0;i<list.length;i++){
		list[i].index=i;
		list[i].onmouseover=function(){ //鼠标经过
			clearInterval(t); //鼠标移上去停止轮播
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=2;
				list[j].style.background="#333";
			}
			imgs[this.index].style.zIndex=3; //调整当前位置imgs的层级
			list[this.index].style.background="#ccc"; //调整当前位置按钮的颜色
			banner.style.background=bgarr[this.index];
		}
		list[i].onmouseout=function(){ //鼠标移开后继续执行轮播
			t=setInterval(move,1000);
			num=this.index+1;
		}
	}

	//页面初始加载后轮播
	var t=setInterval(move,1000);
	var num=1;
	function move(){
		if(num==4){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){ 
			imgs[i].style.zIndex=2; //先给每一个imgs设置层级
			list[i].style.background="#333"; //先给每一个按钮设置颜色
		}
		imgs[num].style.zIndex=3; //设置层级
		list[num].style.background="#ccc"; //设置按钮颜色
		banner.style.background=bgarr[num];
		num++;

	}



	var bannerleft=$(".banner-left")[0];
	var lis=$("li",bannerleft);
	var bannercon=$(".banner-center-con");
	var bgarr2=["pink","green","red","black","yellow","blue","gray"];
	var bigbox=$(".bigbox")[0];
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){

			if(this.index==0){
				clearInterval(t);
				for(var j=0;j<bannercon.length;j++){
					bannercon[j].style.zIndex=2;
				}
				bigbox.style.zIndex=6;
				banner.style.background=bgarr[num-1];
				t=setInterval(move,1000);
			}else{
				clearInterval(t);
				for(var j=0;j<bannercon.length;j++){
					bannercon[j].style.zIndex=2;
				}
				bannercon[this.index].style.zIndex=4;
				banner.style.background=bgarr2[this.index];
			}
		}
	}
})