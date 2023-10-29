let data = [56,566,3434,334,2343,22];
    let newEl = 999;
    let pos = 3;
   
   //checks index out of range
   if(data.length < pos || pos < 0)
   {
     console.log("position is out of range");
     return;
   }
   
    for(let i = data.length-1;i>=0;i--){
        if(i>=pos){
            data[i+1] = data[i];
            if(i==pos){
                data[i] = newEl;
                //if position found breakout of the loop to skip extra iterations
                break;
            }
        }
    }
    console.log(data);
