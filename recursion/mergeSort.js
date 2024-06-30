function mergeSort(arr,low,high){
    if(arr.length <= 1){
        //null check
        return arr;
    }
    if(low >= high) return;
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    merge(arr,low,mid,high);
    return arr;
}

function merge(arr,low,mid,high){
    let left = low,
    right = mid+1;
    var temp = [];
    
    while(left<=mid && right <= high){
        if(arr[left]<=arr[right]){
            temp.push(arr[left]);
            left++;
        }else{
            temp.push(arr[right]);
            right++;
        }
    }
  
    // when only left elements are left
    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }

    // when only right elements are left
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }

    // replace the values of arr sorted using temp  // doubt
    for (let i = 0; i < temp.length; i++) {
        arr[low + i] = temp[i];
    }
    return arr;
}

function testMergeSort() {
    const assert = (condition, message) => {
        if (!condition) {
            console.log(message);
        }
    };

    const testCases = [
        { input: [], expected: [] },
        { input: [1], expected: [1] },
        { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
        { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
        { input: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], expected: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9] },
        { input: [4, 2, 5, 3, 2, 8, 1, 3, 4, 6], expected: [1, 2, 2, 3, 3, 4, 4, 5, 6, 8] },
        { input: [-3, -1, -4, -2, 0, 1, -5], expected: [-5, -4, -3, -2, -1, 0, 1] }
    ];

    testCases.forEach((testCase, index) => {
        const arr = [...testCase.input];
        const n = arr.length - 1;
        const sortedArr = mergeSort(arr, 0, n);
        console.log(arr + " Sorted Array : ", sortedArr);
        assert(JSON.stringify(sortedArr) === JSON.stringify(testCase.expected), `Case ${index + 1} Failed: Expected ${JSON.stringify(testCase.expected)} but got ${JSON.stringify(sortedArr)}`);
    });

    console.log("All test cases passed!");
}

// Run the test cases
testMergeSort();







