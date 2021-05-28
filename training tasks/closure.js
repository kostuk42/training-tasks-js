const result = [];
var i = 10;
for (let i = 0; i < 5; i++) {
    const f = function () {
        return function () { console.log(i) }
    }
    result[i] = f();

    
    
};
console.log(i);

result[0](); // 5, ожидаем 0
result[1](); // 5, ожидаем 1
result[2](); // 5, ожидаем 2
result[3](); // 5, ожидаем 3
result[4](); // 5, ожидаем 4
