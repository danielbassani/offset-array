# offset-array
A utility to generate the offset from each number in the array from a given value, or the mean of the array.
Will remove non-numeric types from the provided list.

Installation:
```
    npm i offset-array

```

Methods:
```
    getOffset(*array*, *num*)        // returns in numeric format ie. [-1, 5, 0, 4]
    getOffsetString(*array*, *num*)  // returns in string format ie.  ['-1', '+5', '0', '+4']
    getOffsetFromMean(*array*)       // returns in string format as above
```


Usage:
```
    let oa = require('offset-array');

    let result = oa.getOffset([ 26, -14, 15, 6, 19, -10], 6);
    console.log(result); // result is [ 20, -20, 9, 0, 13, -16 ]

    let result = oa.getOffsetString([ 26, -14, 15, 6, 19, -10], 6);
    console.log(result); // result is [ '+20', '-20', '+9', '0', '+13', '-16' ]

    let result = oa.getOffsetFromMean([ 26, -14, 15, 6, 19, -10], 6);
    console.log(result); // mean calculated as 7, result is [ '+19', '-21', '+8', '-1', '+12', '-17' ]
```

*Note About Mean Calculation*
If the array passed is all numeric (ie. [1, 2, 3, 4]) the mean is calculated as expected. However if the array passed
contains non-numeric and numeric data (ie. [1, 2, ..someObj, 3, 4]) the mean is calculated based off *NUMERIC* data only.

In both cases the mean is calculated to be 
    (1 + 2 + 3 + 4) / 4 = 2.5

and the resulting array is
    [ '-1.5', '-0.5', '+0.5', '+1.5' ]
