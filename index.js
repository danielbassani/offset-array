exports.getOffsets = function (arr, centerNum = 0) {
    return helper(arr, centerNum);
}

exports.getOffsetsString = function (arr, centerNum = 0) {
   return convToString(helper(arr, centerNum));
}

exports.getOffsetFromMean = function (arr) {
    const avg = parseFloat(mean(arr));
    return convToString(helper(arr, avg));
}

helper = function (arr, centerNum = 0) {
    let res = [];
    if (typeof arr !== 'object' || arr === [] || arr[0] === undefined || typeof centerNum != 'number') {
        return res;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                res.push(arr[i] - centerNum);
            }
        }
    }

    return res;
}

mean = function (arr) {
    let lenTracker = 0;
    arr = arr.map(Number);
    return (arr.reduce((p, c) => {
        if (isNaN(c)) {
            return p;
        } else {
            lenTracker++;
            return p + c;
        }
    }, 0) / lenTracker).toFixed(2);
}

convToString = function (res) {
    res = res.map(e => {
        e = (e > 0) ? '+' + e.toString(): e.toString();
        return e;
    });

    return res;
}