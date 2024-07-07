function subsetSum(arr,index,sum,res){

    if(index == arr.length){
        res.push(sum);
        return;
    }
    
    subsetSum(arr,index+1,sum+arr[index],res); //pick
    subsetSum(arr,index+1,sum,res); //not pick
}

arr = [2,3,1];
var res = [];
subsetSum(arr,0,0,res);
console.log(res.sort((a,b)=>a-b));
