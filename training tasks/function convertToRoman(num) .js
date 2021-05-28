function convertToRoman(num) {
    let rom = '';
    let M = Math.floor(num / 1000);
    let rest = num % 1000;
    for (i = 0; i < M; i += 1){
        rom += 'M';
    }
    let D = Math.floor(rest / 500);
    rest = rest % 500;
    let C = Math.floor(rest / 100);
    rest = rest % 100;// десятки с единицами
    let L = Math.floor(rest / 50);
    rest = rest % 50;
    let X = Math.floor(rest / 10);
    rest = rest % 10;
    let V = Math.floor(rest / 5);
    rest = rest % 5;
    let I = rest;

    function twoOrders(high, low, sHigh, sLow, sHighest) {
      if (high > 0 && low < 4) {
        rom += sHigh;
    }
    if (high > 0 && low === 4) {
        rom = rom + sLow + sHighest;
    }
    if (high === 0 && low === 4) {
        rom = rom + sLow + sHigh;
    }
    if (low < 4) {
        for (i = 0; i < low; i += 1){
        rom += sLow;
        }
    }  
      return rom
    }
    twoOrders(D, C, 'D', 'C', 'M');
    twoOrders(L, X, 'L', 'X', 'C');
    twoOrders(V, I, 'V', 'I', 'X');
    num = rom;
 return num;
}
console.log(convertToRoman(798));
