function fib(n){
    let dp = new Array().fill(-1);
    dp[0] = 0;
    dp[1] = 1;
    let prev2 = 0;
    let prev1 =1;
    for(let i=2;i<=n;i++){
        dp[i] = prev1 + prev2;
        prev2 = prev1; // prev2 must be updated first before prev1
        prev1 = dp[i];
    }
    console.log(dp);
    return dp[n];
}

let n = 5;
fib(n);
console.log(fib(n));
