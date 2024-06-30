function printSubsequence(index, arr, res){
    if(index >= arr.length){
        console.log(res);
        return;
    }

    res.push(arr[index]);
    printSubsequence(index + 1, arr, res);
    res.pop();
    printSubsequence(index + 1, arr, res);
}




console.log("Test Case 1: Empty Array");
printSubsequence(0, [], []);

console.log("Test Case 2: Single Element Array");
printSubsequence(0, [1], []);

console.log("Test Case 3: Two Element Array");
printSubsequence(0, [1, 2], []);

console.log("Test Case 4: Three Element Array");
printSubsequence(0, [1, 2, 3], []);

console.log("Test Case 5: Array with Duplicates");
printSubsequence(0, [1, 2, 2], []);

console.log("Test Case 6: Array with Negative Numbers");
printSubsequence(0, [-1, 2], []);

console.log("Test Case 7: Array with Mixed Data Types");
printSubsequence(0, [1, 'a'], []);


var testCase0 = [3,2,1];
var testCase1 = [[5,6],[2,7,9],[3,5], [57], [2,4,8]];
var testCase2 = [["s","a","f","h"], ['w','d','r'],'f','a','f'];
var testCase3 = [2,4,6,8,7,8];

console.log("testCase0");
printSubsequence(0, testCase0, []);

console.log("testCase1");
printSubsequence(0, testCase1, []);

console.log("testCase2");
printSubsequence(0, testCase2, []);

console.log("testCase3");
printSubsequence(0, testCase3, []);
