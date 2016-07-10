// JavaScript Document
	window.onload=function(){
		var oHiddenNav=document.getElementById('hidden_nav');
		var oMeau=document.getElementById('meau'); 
		var oClose=document.getElementById('close');
		oMeau.onclick=function(){
			move(oHiddenNav,{top:0, opacity:0.8});
		}
		oClose.onclick=function(){
			move(oHiddenNav,{top:-100, opacity:0});
		}
	}
