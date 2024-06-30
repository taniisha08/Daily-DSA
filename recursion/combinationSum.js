var combinationSum = function(candidates, target) {
    var finalRes = [];
    var res = [];
    recursion_combinationSum(candidates, 0, target, res, finalRes);
    return finalRes;
};

function recursion_combinationSum(arr, index, target, res, finalRes) {
    if (target === 0) {
        finalRes.push([...res]);  
        return;
    }

    if (index === arr.length || target < 0) {
        return;
    }

    res.push(arr[index]);
    recursion_combinationSum(arr, index, target - arr[index], res, finalRes);
    res.pop();
    recursion_combinationSum(arr, index + 1, target, res, finalRes);
}

console.log(combinationSum([2, 3, 5], 8)); // Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1)); // Output: []
console.log(combinationSum([1], 1)); // Output: [[1]]
console.log(combinationSum([1], 2)); // Output: [[1, 1]]
console.log(combinationSum([2, 3, 5], 10)); // Output: [[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 3, 5], [5, 5]]
console.log(combinationSum([2, 4, 6, 8], 8)); // Output: [[2, 2, 2, 2], [2, 2, 4], [2, 6], [4, 4], [8]]
console.log(combinationSum([3, 4, 7], 7)); // Output: [[3, 4], [7]]


