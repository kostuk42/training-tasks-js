// compare two objects v.1
isEqual = function (data1, data2) {
    let keys1 = Object.keys(data1);
    let values1 = Object.values(data1);
    let keys2 = Object.keys(data2);
    let values2 = Object.values(data2);
    return keys1.length !== keys2.length ? false : (values1.every((value, index) => {
        return typeof value === 'object' ? isEqual(value, values2[index]) : value === values2[index]
    }))
}
const data = {a: 1, b: {c: 1, d: 2}, f: {p: {p: 5, q: 6}, q: 6}};
const data2 = {a: 1, b: {c: 1, d: 2}, f: {p: {p: 5, q: 6}, q: 6}};
console.log(isEqual(data, data2));

