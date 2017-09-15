function PeaksAndValleys(array){
	var trajectory="neutral";
	var castles=0;
	if(array.length>0){
	

  	for(var i=1;i<array.length;i++){
  		if(array[i]>array[i-1] && trajectory!="positive"){
  			castles+=1
  			trajectory="positive"
  			console.log(trajectory)
  		}
  		else if(array[i]<array[i-1] && trajectory !="negative"){
  			castles+=1
  			trajectory="negative"
  			console.log(trajectory)
  		}
  	}
  	return castles
  }

  else{return 0}
}