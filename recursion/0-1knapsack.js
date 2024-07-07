let wt = [1, 3, 4, 5];
let val = [1, 4, 5, 7];
let bagWt = 7;
let n = wt.length;

function knapSack(n, wt, val, bagWt) {
    if (n == 0 || bagWt == 0) return 0;

    if (wt[n - 1] > bagWt) {
        return knapSack(n - 1, wt, val, bagWt);
    } else {
        let include = val[n - 1] + knapSack(n - 1, wt, val, bagWt - wt[n - 1]);
        let exclude = knapSack(n - 1, wt, val, bagWt);
        return Math.max(include, exclude);
    }
}

let maxProfit = knapSack(n, wt, val, bagWt);
console.log(maxProfit);


// can lead to stack overflow due to huge function calls, 
//to minimize it use a DP approach