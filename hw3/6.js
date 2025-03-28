function factorial(n){
    if(n>1){
        return (n)*factorial(n-1)
    }
    else{
        return 1;
    }
}
let sum=factorial(5)
console.log(sum);  