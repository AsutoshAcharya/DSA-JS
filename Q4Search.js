let data  = [1,2,3,4,5,6,7,8,9];
let item = 5;
let index = undefined;

for(let i = 0;i<data.length;i++){
    if(data[i]==item){
        index = i;
    }
}
console.log(index);