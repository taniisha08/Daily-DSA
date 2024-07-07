function fib(n){
    if(n<=1){
        dp[n] = n;
        return n;
    }
    if(dp[n]!=-1){
        return dp[n];
    }
    return dp[n]=fib(n-1) + fib(n-2);
}

let n = 7;
let dp = new Array(n+1).fill(-1);
fib(n);
console.log(dp);