window.onload=function(){
	var img=$(".lists")[0];
	var imgs=$("img",img);
	var index=$(".index")[0];
	var indexs=$("li",index);
	var banner=$(".banner")[0];
	var right=$(".right")[0];
	var left=$(".left")[0];
	var box=$(".box")[0];
	var span=$("span",box)[0];
	var len=imgs.length;
	for(var i=0;i<len;i++){
		var imgW=imgs[0].offsetWidth;
		if(i!=0){
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
			next=0;
		}
		
		imgs[next].style.left=imgW+"px";
		animate(imgs[now],{left:-imgW},800)
		animate(imgs[next],{left:0},800,Tween.Linear,function(){
			flag=true;
		});
		
		indexs[now].className="";
		indexs[next].className="one";
		span.innerHTML=next+1;
		now=next;
	}
	var ilen=indexs.length;
	for(var i=0;i<ilen;i++){
		indexs[i].index=i;
		indexs[i].onclick=function(){
			if(now==this.index||!flag){
				return;
			}
			flag=false;
			if(now<this.index){
				imgs[this.index].style.left=imgW+"px";
				animate(imgs[now],{left:-imgW},800)
			}else{
				imgs[this.index].style.left=-imgW+"px";
				animate(imgs[now],{left:imgW},800)
			}
			animate(imgs[this.index],{left:0},800,Tween.Linear,function(){
				flag=true;
			});
			indexs[now].className=""
			this.className="one"
			span.innerHTML=next+1;
			now=next=this.index;
		}
	}
    banner.onmouseover=function(){
    	clearInterval(t);
    }
    banner.onmouseout=function(){
    	t=setInterval(autoMove,2000)
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
    	if(next<0){
    		next=len-1;
    	}
    	
    	imgs[next].style.left=-imgW+"px";
    	animate(imgs[now],{left:imgW},800);
    	animate(imgs[next],{left:0},800,Tween.Linear,function(){
    		flag=true;
    	});
    	indexs[now].className="";
    	indexs[next].className="one";
    	span.innerHTML=next+1;
    	now=next;
    }

}

/*$(function(){
	var list=$(".lists")[0];
	var imgs=$("img",list);
	var index=$(".index")[0];
	var indexs=$("li",index);
	var banner=$(".banner")[0];
	var len=imgs.length;
	var imgW=imgs[0].offsetWidth;
	for(var i=0;i<len;i++){
       if(i!=0){
       	imgs[i].style.left=imgW+"px";
       }
	}
	var now=0;
	var next=0;
	var t=setInterval(autoMove,2000);
	function autoMove(){
		next++;
		if(next==len){
			next=0;
		}
		animate(imgs[now],{left:-imgW},800);
		imgs[next].style.left=imgW+"px";
		animate(imgs[next],{left:0},800);
        indexs[now].className="";
        indexs[next].className="one";
        now=next;
	}
	var ilen=indexs.length;
	var flag=true;
	for(var i=0;i<ilen;i++){
		indexs[i].index=i;
		indexs[i].onclick=function(){
		if(now=this.index||!flag){
			return;
		}
		flag=false;
			if(now<this.index){
			   imgs[this.index].style.left=imgW+"px"
	           animate(imgs[now],{left:-imgW},800);	
			}else{
			   imgs[this.index].style.left=-imgs+"px";
	           animate(imgs[now],{left:imgW},800)
			}
			animate(imgs[now],{left:0},800,function(){
				flag=true;
			});
           indexs[now].className="";
           indexs[this.index].className="one";
           now=next=this.index;
		}
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(autoMove,2000);
	}
})*/