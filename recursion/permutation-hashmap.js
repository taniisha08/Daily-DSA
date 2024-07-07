function permuteRecursion(nums, hashMap, ans, finalRes){ 
    if(ans.length === nums.length){
        finalRes.push([...ans]);
        return;
    }

   for(let i = 0; i<nums.length ; i++){
    if(!hashMap.has(nums[i])){
        hashMap.set(nums[i], true);
        ans.push(nums[i]);
        permuteRecursion(nums, hashMap, ans, finalRes);
        ans.pop();
        hashMap.delete(nums[i]);
    }
   }
}

let ans = [];
let finalRes = [];
let hashMap = new Map();
let nums = [1,2,4];
permuteRecursion(nums, hashMap, ans, finalRes);
console.log(finalRes);
