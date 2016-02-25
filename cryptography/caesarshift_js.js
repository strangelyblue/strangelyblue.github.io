function caesarShift(){
	var origin=document.getElementById("originText").value;
	var result="'";
	var first=65;
	var last=90;
	var shift=parseInt(document.getElementById("shiftNum1").value);//Math.floor((Math.random() * (last-first+1)) + 1);	//+1 to include space
	for(var i=0;i<origin.length;i++){
		var letter= origin.toUpperCase().charCodeAt(i);
		if(letter==32){	//is space
			result=result.concat(String.fromCharCode(first-1+shift));
		}
		else if(letter<first||letter>last){
			//do nothing
		}
		else if(letter+shift==last+1){	//replace with space
			result=result.concat(" ");
		}
		else if(letter+shift>last+1){
			result=result.concat(String.fromCharCode(letter+shift-last+first-2));
		}
		else{
			result=result.concat(String.fromCharCode(letter+shift));
		}
	}
	result=result.concat("'");
	document.getElementById("output1").innerHTML=result;
}
function breakShift(){
	var origin=document.getElementById("shiftedText").value;
	var result="";
	var first=65;
	var last=90;
	var shift=parseInt(document.getElementById("shiftNum2").value);
	for(var i=0;i<origin.length;i++){
		var letter= origin.toUpperCase().charCodeAt(i);
		if(letter==32){	//is space
			result=result.concat(String.fromCharCode(last+1-shift));
		}
		else if(letter<first||letter>last){
			//do nothing
		}
		else if(letter-shift<first){
			if(letter-shift+last-first+2>90)
				result=result.concat(" ");
			else 
				result=result.concat(String.fromCharCode(letter-shift+last-first+2));
		}
		else{
			result=result.concat(String.fromCharCode(letter-shift));
		}
	}
	document.getElementById("output2").innerHTML=result;
}