let finalRes = [];
let nums = [1,2,4];
permuteRecursion(nums, 0, finalRes);
console.log(finalRes);

function permuteRecursion(nums, pointer, finalRes){ 
    if(pointer === nums.length){
        finalRes.push([...nums]);
        return;
    }

   for(let i = pointer; i<nums.length ; i++){
        swap(nums,i, pointer);
        permuteRecursion(nums,pointer+1,finalRes);
        swap(nums,i, pointer);
   } 
}


function swap(arr,i,j){
   return [arr[i], arr[j]] = [arr[j], arr[i]];
}



