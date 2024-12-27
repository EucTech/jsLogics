function flattenArray() {
    // Your code here
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            arr = arr.concat(flattenArray(...arguments[i]));
        } else {
            arr.push(arguments[i]);
        }
    }
    return arr;
}

const rel = flattenArray([1, [2, [3, [4]]], 5]); // [1, 2, 3, 4, 5]
console.log(rel);