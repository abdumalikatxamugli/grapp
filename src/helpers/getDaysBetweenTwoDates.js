function parseDate(str) {
    var mdy = str.split('-');
    return new Date(mdy[0], mdy[1]-1, mdy[2]);
}

export function datediff(first, second) {
    console.log(first, second)
    return ""
    // const fir=parseDate(first)
    // const sec=parseDate(second)
    // // Take the difference between the dates and divide by milliseconds per day.
    // // Round to nearest whole number to deal with DST.
    // return Math.round((sec-fir)/(1000*60*60*24));
}
