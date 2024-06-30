var print_subsequence_sum = function(index,arr,res,s,sum){
    if(index>=arr.length){
        // calculate sum of res
        if(sum == s){
            console.log(res);
       
        }
        return;
    }

    // take the index element

    res.push(arr[index]); 
    sum += arr[index];
    print_subsequence_sum(index+1,arr, res, s, sum) == true
    //not take the  index element
    sum -= arr[index];
    res.pop(arr[index]);
    print_subsequence_sum(index+1,arr, res, s, sum) == true
}


// print_subsequence_sum(0,[2,3,4,6,8],[],10,0);
print_subsequence_sum(0,[2,3,5,2,4,5,1,7],[],10,0);