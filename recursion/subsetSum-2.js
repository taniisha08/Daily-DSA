var subsetsWithDup = function(nums) {
    let ds = [], res =[];
    nums.sort((a,b)=>a-b); 
    recursion(0,nums,ds,res);
    return res;
};

function recursion(index,arr,ds,res){
    res.push([...ds]);
    for(let i = index;i < arr.length; i++){
        if(i!= index && arr[i] == arr[i-1]) continue;
        ds.push(arr[i]);
        recursion(i+1,arr,ds,res);
        ds.pop();
    }
}
var nums = [1,4];
console.log(subsetsWithDup(nums));