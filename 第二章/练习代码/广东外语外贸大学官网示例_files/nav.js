// JavaScript Document


//<!CDATA[
function g(o){return document.getElementById(o);}
function HoverLi(n){
//如果有N个标签,就将i<=N;
//本功能非常OK,兼容IE7,FF,IE6;
	for(var i=1;i<=6;i++)
	{
		g('tb_'+i).className='normaltab';
		g('tbc_0'+i).className='undis';
		g('navImg_'+i).src='images/nav'+i+'.jpg';
	}
	g('tbc_0'+n).className='dis';
	g('tb_'+n).className='hovertab';
	g('navImg_'+n).src='images/navh'+n+'.jpg';
}
//如果要做成点击后再转到请将<li>中的onmouseover 改成 onclick;
//]]>

function HoverLiOut(n){
//如果有N个标签,就将i<=N;
//本功能非常OK,兼容IE7,FF,IE6;
	for(var i=1;i<=6;i++)
	{
		
		
		g('navImg_'+i).src='images/nav'+i+'.jpg';
	}

	g('navImg_'+n).src='images/navh'+n+'.jpg';
}



  function setTab(name,cursel,n){
   for(i=1;i<=n;i++){
    var menu=document.getElementById(name+i);
    var con=document.getElementById("con_"+name+"_"+i);
    menu.className=i==cursel?"hover":"";
    con.style.display=i==cursel?"block":"none";
   }
  }

    function setTabout(name,cursel){

  var menu=document.getElementById(name+cursel);
    menu.className="";
    var con=document.getElementById("con_"+name+"_"+cursel);

    con.style.display="none"; 
  }
  
  function homeTab(name,n){

    var menu=document.getElementById(name+n);
    menu.style.display="block";
 
  }  
  
  function homeTabout(name,n){
    var menu=document.getElementById(name+n);
    menu.style.display="none";
  }  
  
  
  
  function setTab2(name,cursel,n){
   for(i=1;i<=n;i++){
    var menu=document.getElementById(name+i);
    var con=document.getElementById("con_"+name+"_"+i);
	var pic =document.getElementById("irnavpic"+i);
    menu.className=i==cursel?"hover yahei":"yahei";
	pic.src=i==cursel?"images/sign_jianxia.jpg":"images/sign_jianright.jpg";
    con.style.display=i==cursel?"block":"none";
   }
  }

  function setTab1(name){
   
    var menu=document.getElementById(name);
  
    menu.className="hover1";
    
   
  }

    function setTabout1(name){

  var menu=document.getElementById(name);
    menu.className="";
    
  }