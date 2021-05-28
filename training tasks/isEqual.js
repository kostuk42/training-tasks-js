// compare two objects v.1
isEqual = function (data1, data2) {
    if (Object.keys(data1).length !== Object.keys(data2).length){return false}
    for (let key in data1) {
        if (typeof data1[key] === 'object') {
            let result = isEqual(data1[key], data2[key])
            if (!result)
            {
                return false
            } else continue
        }
        if (data1[key] !== data2[key]) {
            return false
        }
    }
    return true
}
const data = {a: 1, b: {c: 1, d: 2}, f: {p: {p: 5, q: 6}, q: 6}};
const data2 = {a: 1, b: {c: 1, d: 2}, f: {p: {p: 5, q: 6}, q: 6}};
console.log(isEqual(data, data2));