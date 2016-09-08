window.onload=function(){
	var $banner=$('.banner');
	var bW=$banner.width();
	console.log(bW);
	var $box=$('.box');
	var boW=$box.width();
	var iW=$('img',$box).width();
	console.log(iW)
	var l=$box.length;
	var flag=true;
	$box.hover(function(){
		var cur=$box.index(this)
		$(this).each(function(i,obj){
			if(cur>=i){
				console
				$(obj).animate({width:(bW-boW)/(l-1)*i},300);
			}else if(cur<i){
				$(obj).animate({width:cur*(bW-boW)/(l-1)})
			}
		})
		
	},function(){
		$(this).animate({width:(bW-iW)/(l-1)+boW},300)
	})
}