function sub(){
	var y,d=1,i,c=0,ld,k,p,dy,mont;
	var mt,month=["Jan","Feb","Mar","Apr","May"
	,"Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	dy=parseInt(document.getElementById("d").value)
	mt=document.getElementById("m").value
	y=parseInt(document.getElementById("y").value)
	var day=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
	"Sunday"];
	if(dy<1 || dy>31)
	alert("Invalid day")
	else if(mt=="Feb")
	{
		if((y%100!=0 && y%4==0) || y%400==0)
		{
			if(dy>=30)
			alert("Invalid day");
			else
		{
		k=firstDay(mt,y);
		k=(k+dy-1)%7;
		//document.write(k);
		document.getElementById("res").innerHTML=day[k]
		}
		}	
		else if(dy>28)
			alert("Invalid day");
		else
		{
		k=firstDay(mt,y);
		k=(k+dy-1)%7;
		//document.write(k);
		document.getElementById("res").innerHTML=day[k]
		}
	}
	else if(mt!="Jan"&& mt!="Mar"&&mt!="May" && mt!="Jul" &&
	 mt!="Aug" && mt!="Oct" && mt!="Dec" && dy>30)
	 alert("Invalid day")
	else
	{
	k=firstDay(mt,y);
	k=(k+dy-1)%7;
	//document.write(k);
	document.getElementById("res").innerHTML=day[k]
	}
}
function firstDay(mt, y)
{
	var i,j,k,s=0;
	var d=["mon","tue","wed","thu","fri","sat","sun"],month=["Jan","Feb","Mar","Apr","May"
	,"Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	for(i=1900;i<y;i++)
	{
		if((i%100!=0 && i%4==0) || i%400==0)
		s=s+366;
		else
		s+=365;
	}
	for(i=0;i<12;i++)
	{
		if(month[i]==mt)
		break;
		if(i==0 || i==2 || i==4 || i==6 || i==7 || i==9 || i==11)
		s+=31;
		else if(i==1)
		s+=28;
		else 
		s+=30;
	}
	if(((y%100!=0 && y%4==0) || y%400==0) && i>1)
	s=s+2;
	else
	s+=1;
	k=s%7;
	k=k-1;
	if(k<0)
	k=6;
	if(k>=7)
	k=k-7;
	return k;
}
function reset()
{
	document.getElementById("d").value="";
	document.getElementById("m").value="";
	document.getElementById("y").value="";
	document.getElementById("res").innerHTML="";
}