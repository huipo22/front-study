// window.onload=function(){
// 	// var item=document.getElementsByClassName("xiao");
// 	// for(var i=0;i<item.length;i++){
// 	// 	// if(Math.random()>0.8){
// 	// 	// 	item[i].textContent='No';
// 	// 	// }
// 	// 	// else{
// 	// 	// 	item[i].textContent='Yes';
// 	// 	// }
// 	// 	item[i].textContent=(Math.random()>0.8)?'Yes':'No';
		
// 	// 	item[i].onclick=function(){
// 	// 		this.style.background='white';
// 	// 		if(this.textContent=='No'){
// 	// 			this.style.background='#c40000';
// 	// 			alert('boom!!!');
// 	// 		}
// 	// 	}
// 	// }
// 	 // console.log('item');
// 	 // var lei=[
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,1,0,0,0,0,1,0],
// 	 // 		[0,0,1,0,1,0,1,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // ];
// 	 var row=5;
// 	 var da=document.getElementById('da');
// 	 var zhezhao=document.getElementById('zhezhao');

// 	 da.style.width=50*row+'px';
// 	 da.style.height=50*row+'px';
// 	 // for(var i=0;i<row*row;i++){
// 	 // 	var c=document.createElement('div');
// 	 // 	c.setAttribute('class','xiao');
// 	 // 	da.appendChild(c);
// 	 // }
// 	 var k=0;
// 	 var t=setInterval(function(){
// 	 	var c=document.createElement('div');
// 	 	c.setAttribute('class','xiao');
// 	 	da.appendChild(c);
// 	 	k++;

// 	 	setTimeout(function(){
// 	 		c.style.webkitTransform='rotateZ(360deg)';
// 	 	},15)

// 	 	if(k>row*row-1){
// 	 	clearInterval(t);
	 		
// 	 		var lei=document.getElementsByClassName('xiao');
// 			 for(var i=0;i<lei.length;i++){
// 			 	lei[i].textContent=a[i];
// 			 	lei[i].onclick=dianji;
// 			 	lei[i].onmousedown=function(e){
// 			 			console.log(e);
// 			 	}

// 			 }
// 	 	}																															
// 	 },25)
// 	 			function dianji(){
// 			 		this.style.background='white';
// 			 		this.style.webkitTransform='scale(1.1,1.1)';
// 			 		if(this.textContent=='lei'){
// 			 			this.style.background='#c40000';
// 			 			zhezhao.style.display='block';
// 			 			zhezhao.style.webkitTransform='scale(0.8,0.8)';
// 			 			alert('game over');
// 			 			window.location.reload();
// 			 		}

// 			 	}

	 

// 	 var lei=[];
// 	 for(var i=0;i<row;i++){
// 	 	lei[i]=[];
// 	 	for(var j=0;j<row;j++){
// 	 		var b=(Math.random()>0.8)?1:0;
// 	 		lei[i].push(b);
// 	 	}
// 	 }
// 	 var new_lei=[];
// 	 for(var i=0;i<row;i++){
// 	 	new_lei[i]=[];
// 	 	for(var j=0;j<row;j++){
// 	 		if(lei[i][j]==0){
// 		 		var d1=(j>0)?lei[i][j-1]:0;
// 		 		var d2=(j<row-1)?lei[i][j+1]:0;

// 		 		var d3=(i>0&&j>0)?lei[i-1][j-1]:0;
// 		 		var d4=(i>0)?lei[i-1][j]:0;
// 		 		var d5=(i>0&&j<row-1)?lei[i-1][j+1]:0;

// 		 		var d6=(i<row-1&&j>0)?lei[i+1][j-1]:0;
// 		 		var d7=(i<row-1)?lei[i+1][j]:0;
// 		 		var d8=(i<row-1&&j<row-1)?lei[i+1][j+1]:0;
// 		 		var tip=d1+d2+d3+d4+d5+d6+d7+d8;
// 		 		new_lei[i].push(tip);
// 		 		}
// 		 		else{
// 		 			new_lei[i].push('lei');
// 		 		}
// 	 	}
// 	 }

// 	 // console.log(new_lei);
// 	 // var item=[
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,1,0,0,0,0,1,0],
// 	 // 		[0,0,1,0,1,0,1,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // 		[0,0,0,1,0,1,0,0],
// 	 // ];
// 	 var a=[];
// 	 for(var i=0;i<row;i++){
// 	 	for(var j=0;j<row;j++){
// 	 		a.push(new_lei[i][j]);
// 	 	}
// 	 }

// 	 // var lei=document.getElementsByClassName('xiao');
// 	 // for(var i=0;i<lei.length;i++){
// 	 // 	lei[i].textContent=a[i];
// 	 // 	lei[i].onclick=function(){
// 	 // 		this.style.background='white';
// 	 // 		if(this.textContent=='lei'){
// 	 // 			this.style.background='#c40000';
// 	 // 			alert('gameover');
// 	 // 		}
// 	 // 	}
// 	 // 	console.log(lei[i]);
// 	 // }
// 	 document.oncontextmenu=function(){
// 	 	return false;
// 	 }
// }
window.onload=function(){
	var row=5;
	var da=document.getElementById('da');
	da.style.width=50*row+'px';
	da.style.height=50*row+'px';

	var lei=[];
	for(var i=0;i<row;i++){
		for(var j=0;j<row;j++){
			lei.push((Math.random()>0.8)?'lei':0);
		}
	}
	var _i=0;
	var intervalId=setInterval(function(){
		var div=document.createElement('div');
		if(lei[_i]=='lei'){
			div.setAttribute('class','xiao lei');
		}
		else{
			div.setAttribute('class','xiao');
		}
		div.textContent=lei[_i];
		da.appendChild(div);
		_i++;
		if(_i>row*row-1){
			clearInterval(intervalId);
			var els=document.getElementsByClassName('xiao');
			for(var i=0;i<els.length;i++){
				els[i].onmousedown=function(e){
					if(e.which==1){  				//表示右击事件
						if(this.textContent==0){
							this.style.background='black';
						}
						if(this.textContent=='lei'){
							alert('game over');
							window.location.reload();
						}
					}
					if(e.which==3){					//表示右击事件
						if(this.textContent!='lei'){
							alert('game over');
							window.location.reload();
						}
						else{
							this.textContent='qi';
							this.style.background='white';
							this.setAttribute('class','xiao');
							var leis=document.getElementsByClassName('lei');
							if(leis.length==0){
								alert("你赢了");
								window.location.reload();		//刷新页面
							}
						}
					}
				}
			}
		}
	},200)
	document.oncontextmenu = function(){			//禁止右击
        return false;               
    }
}