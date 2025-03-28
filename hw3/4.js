let Array=[1,2,3,4,5,6,7,8,9];
let i;
for(i=1;i<=9;i++){
    if(Array[i-1]%2==0){
        continue;
    }
    console.log(i);
}
