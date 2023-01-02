let data = [56,566,3434,334,2343,22];
    let newEl = 70;
    let pos = 4;
   
    for(let i = data.length-1;i>=0;i--){
        if(i>=pos){
            data[i+1] = data[i];
            if(i==pos){
                data[i] = newEl;
            }
        }
    }
    console.log(data);