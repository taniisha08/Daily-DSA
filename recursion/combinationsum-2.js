let nums = [10,1,2,7,6,1,5], target = 8;
let res = [], finalRes = [];
nums.sort((a,b)=>a-b);
combinationSum2(nums,0,target,res,finalRes);
console.log(finalRes);

function combinationSum2(arr,index,target,res,finalRes){
    // i starts from index so that is why i<= arr.length
    for(let i=index; i<= arr.length; i++){
        if(target === 0){
            // we need to make a deep copy of array to place it inside finalres array
            finalRes.push([...res]);
            return;
        }
        if(i!=index && arr[i]== arr[i-1]) continue;
        if(arr[i]>target) break;
        res.push(arr[i]);
        combinationSum2(arr,i+1,target-arr[i],res,finalRes);
        res.pop();
    }    
}


