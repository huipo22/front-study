window.onload=function(){
	var box=document.getElementsByClassName("box")[0];
	var num=0;
	setInterval(function(){
		num++;
		if (num==2) {
			num=0;
		};
		box.style.marginLeft=num*-500+"px";
	},2000)
}