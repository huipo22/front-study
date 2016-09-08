$(function(){
	var imgs=$(".img");
	var list=$(".list");
	var banner=$(".banner")[0]
	bgarr=["red","yellow","blue","green"];

	var t=setInterval(move,2000)
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
		banner.style.background=bgarr[num];
		num++;
	}

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


	var bannerleft=$(".banner-left-ul")[0];
	var lis=$("li",bannerleft);
	var bannercon=$(".bannercon");
	var bgarr2=["red","pink","skyblue","#ccc","#333","purple","#c40000","black"];
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			if(this.index==0){
				clearInterval(t);
				for(var j=0;j<bannercon.length;j++){
					bannercon[j].style.zIndex=2;
				}
				bannercon[this.index].style.zIndex=4;
				banner.style.background=bgarr2[this.index];
				t=setInterval(move,2000)
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