function get_k_Permutation(n,k){
    let fact = 1;
    var numbers = [];
    for (let i = 1; i < n; i++) {
        fact = fact * i;
        numbers.push(i);
    }
    numbers.push(n);
    let ans = "";
    k = k - 1;
    while (true) {
        ans = ans + numbers[Math.floor(k / fact)];
        let index = Math.floor(k/fact); 
        numbers = numbers
        .slice(0, index)
        .concat(numbers.slice(index + 1));
        if (numbers.length === 0) {
            break;
        }
        k = k % fact;
        fact = fact / numbers.length;
    }
    return ans;
}


console.log(get_k_Permutation(3,2));
