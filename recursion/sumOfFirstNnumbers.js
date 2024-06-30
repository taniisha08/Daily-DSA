// sum of first n natural numbers
function summation(i,sum){
    if(i<0) {
    console.log(sum);
    }else{
       summation(i-1,sum+i);
    }

}

console.log('parameter wise sum of first natural numbers using [recursion]');

console.log("10");  summation(10,0);
console.log("20"); summation(20,0);
console.log("0"); summation(0,0);


