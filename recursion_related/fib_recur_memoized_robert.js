const memo = [1,1];
function fib(n) {
    console.log("fib ",n);
    if (memo.length > n) {
        console.log("memoized");
        return memo[n];
    }
    var answer = fib(n - 1) + fib(n - 2);
    memo[n] = answer;
    return answer;
}

module.exports = fib;