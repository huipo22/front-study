$(function(){
	var imgbox=$('.box')[0];
	var imgs=$('a',$('.ban')[0]);
	var iw=parseInt(getstyle(imgs[0],'width'));
	for (var i = 0; i < imgs.length; i++) {
		if(i==0)
		{
			continue;
		}
		imgs[i].style.left=iw+"px";
	};
	var num=0;
	var val=0;
	var flag=true;
	var t=setInterval(move,1500);
	function move()
	{
		num++;
		if(num==imgs.length)
		{
			num=0;
		}
		imgs[num].style.left=iw+"px";
		lis[num].className='hot';
		lis[val].className='';
		animate(imgs[val],{left:-iw},700);
		animate(imgs[num],{left:0},700);
		val=num;
	}
	var lis=$('li',$('ul')[0]);
	lis[0].className='hot';
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onmouseover=function()
		{
			clearInterval(t);
			if(!flag)
			{
				return;
			}
			num=this.index;
			flag=false;
			if (val==this.index){return};
			imgs[this.index].style.left=iw+"px";
			animate(imgs[val],{left:-iw},700);
			animate(imgs[this.index],{left:0},700,function(){flag=true;});
			lis[val].className='';
			lis[this.index].className='hot';
			val=this.index;
		}
		lis[i].onmouseout=function()
		{
			t=setInterval(move,1500);
		}
	};
	var btnl=$(".left")[0];
	var btnr=$(".right")[0];
	btnl.onclick=function()
	{
		if(!flag)
		{
			return;
		}
		flag=false;
		num--;
		if(num<0)
		{
			num=imgs.length-1;
		}
		imgs[num].style.left=-iw+"px";
		animate(imgs[num],{left:0},500,function(){
			flag=true;
		});
		animate(imgs[val],{left:iw},500,function(){
			flag=true;
		});
		lis[val].className="";
		lis[num].className="hot"
		val=num;
	}
	btnr.onclick=function()
	{
		move();
	}
	btnr.onmouseover=btnl.onmouseover=function()
	{
		clearInterval(t);
	}
	btnr.onmouseout=btnl.onmouseout=function()
	{
		t=setInterval(move,1500);
	}
})
