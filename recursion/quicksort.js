function quickSort(arr,low,high){
    if(arr.length<=1){
        // null check
        return arr;
    }

    if(low<high){
        let partitionIndex = findPartitionIndex(arr,low,high);
        quickSort(arr,low,partitionIndex - 1);
        quickSort(arr,partitionIndex + 1,high);
        return arr;
    }
}

function findPartitionIndex(arr,low,high){
    let pivot = arr[low];
    let i = low+1, j = high;
    
    while(i<=j){
        while(arr[i] <= pivot && i <= high-1){
            // left side all small elements than pivot
            i++;
        }
        
        while(arr[j] > pivot && j>=low+1){
            // right side all the large elements than pivot
            j--;
        }
    
        if(i<j){
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
        }
    }
    // placing the pivot at the right place
    [arr[low], arr[j]] = [arr[j], arr[low]]; 
    return j;
}




var testcase1 = [2,4,5,8,1];
var testcase2 = [];
var testcase3 = [1];
var sortedArray1 = quickSort(testcase1,0,testcase1.length-1);console.log(sortedArray1);
var sortedArray2 = quickSort(testcase2,0,testcase2.length-1);console.log(sortedArray2);
var sortedArray3 = quickSort(testcase3,0,testcase3.length-1);console.log(sortedArray3);


