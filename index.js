exports.center = function (arr, centerNum) {
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