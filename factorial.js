function factorial(num){
    if(num < 0){
        return -1;
    }
    else if (num == 0){
        return 1;
    }
    else {
        return (num * factorial(num-1))
    }
}
console.log(factorial(5));

function fac(n){
    return(n*fac(n-1))
}
console.log(fac(5));