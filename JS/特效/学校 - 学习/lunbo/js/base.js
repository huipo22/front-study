window.onload=function(){
		var chang=document.getElementById('chang');
		var bItem=document.getElementsByClassName('b-item');
		bItem[0].style.background='#c40000';
		var left= -251;
		var i=1;
		var t=setInterval(lunbo,2000);
		var lunbo=function(){
			for(var j=0;j<bItem.length;j++){
				bItem[j].style.background='black';
			}

			bItem[i].style.background='#c40000';
			i++;
			if(i==4){
				i=0;
			}


			chang.style.marginLeft=left+'px';
			left=left-251;
			if(left==-1004){
				left=0;
				}
			}
		setInterval(lunbo,1000);
		for(var k=0;k<bItem.length;k++){
			bItem[k].index=k;
			bItem[k].onmouseover=function(){
				clearInterval(t);
				for(var j=0;j<bItem.length;j++){
					bItem[j].style.background='black';
				}
			left=this.index*-251;
			i=this.index;
			this.style.background='#c40000';
			chang.style.marginLeft=this.index * -251+'px';
			}
			bItem[k].onmouseup=function(){
				t=setInterval(lunbo,2000);
			}
		}
	}
