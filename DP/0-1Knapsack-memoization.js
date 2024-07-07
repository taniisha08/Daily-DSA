let wt = [1,3,4,5];
let val = [1,4,5,7];
let bagWt = 7;
let n = wt.length;

// dp memoization
function knapSack(n, wt, val, bagWt){
    if( n == 0 || bagWt == 0) return 0;

    if(dp[n][bagWt] != -1) return dp[n][bagWt];

    if(wt[n-1]>bagWt){
        return dp[n][bagWt] = knapSack(n-1,wt,val,bagWt);
    }else{
        let left = val[n-1] +  knapSack(n-1,wt,val,bagWt - wt[n-1]);
        let right =  knapSack(n-1,wt,val,bagWt);
        dp[n][bagWt] = Math.max(left,right);
    }
    return dp[n][bagWt];
}
let dp = Array.from({ length: n + 1 }, () => Array(bagWt + 1).fill(-1));
let maxProfit = knapSack(n,wt,val,bagWt);
console.log(maxProfit);



