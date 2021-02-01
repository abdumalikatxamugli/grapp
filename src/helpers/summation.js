export function summation(args) {
    // var args = Array.prototype.slice.call(arguments);
    return args.reduce(function (pre, curr) {
        if (!isNaN(curr)) {
            return pre + curr;
        }
        else {
            throw Error("Non-Numeric arguments" + curr);
        }
    }, 0)
}