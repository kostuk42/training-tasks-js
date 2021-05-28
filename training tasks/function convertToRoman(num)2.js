function convertToRoman(num) {
let rest = num;
    let rom = '';
    let n = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    for (let key in n) {
        let orderQuantity = Math.floor(rest / n[key]);
        rest = rest % n[key];
        n[key] = orderQuantity;
    }
    
function twoOrders(high, low, sHigh, sLow, sHighest) {
    if (high > 0 && low < 4) {rom += sHigh}
    if (high > 0 && low === 4) {rom = rom + sLow + sHighest}
    if (high === 0 && low === 4) {rom = rom + sLow + sHigh}
    if (low < 4) {
        for (let i = 0; i < low; i += 1){
        rom += sLow;
        }
    }  
      return rom
    }
    twoOrders(null, n.M, null, 'M', null);
    twoOrders(n.D, n.C, 'D', 'C', 'M');
    twoOrders(n.L, n.X, 'L', 'X', 'C');
    twoOrders(n.V, n.I, 'V', 'I', 'X');
    num = rom;
 return num;
}
console.log(convertToRoman(798));