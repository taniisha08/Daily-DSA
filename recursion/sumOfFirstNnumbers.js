// sum of first n natural numbers
function summation(i,sum){
    if(i<0) {
    console.log(sum);
    }else{
       summation(i-1,sum+i);
    }

}

console.log('parameter wise sum of first natural numbers using [recursion]');
summation(10,0);


