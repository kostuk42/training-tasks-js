function checkCashRegister(price, cash, cid) {
    var change = [];
    let status = '';
    const SIGNS = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
]
    const sumCid = cid.reduce((total, couple) => total += couple[1], 0);
    const needChange = cash - price;
    const isEnough = sumCid - needChange;
    
    if (isEnough < 0) { return { status : 'INSUFFICIENT_FUNDS', change }; }
    let cidCopy = cid.map(couple => nominalize(couple)).sort((f, s) => s[0] - f[0]).filter(couple => couple[1] !== 0);
    
    function nominalize(couple) {
        let key = couple[0];
        couple[0] = isNaN(key) ? SIGNS.find(elem => elem[0] === key)[1] : SIGNS.find(elem => elem[1] === key)[0];
        return couple
    }
    let rest = needChange;
    
    for (let couple of cidCopy) {
        let nominal = couple[0];
        let sum = couple[1];
        if (nominal > rest) {
            
            continue;
        }
        let itemsNeeded = Math.floor(rest / nominal);
        let itemsAvailaible = sum / nominal;
        if (itemsNeeded >= itemsAvailaible) {
            change.push(couple);
            rest -= sum;
            
        }
        else {
            change.push([nominal, itemsNeeded * nominal]);
            rest = rest - itemsNeeded * nominal;
            
        }
        rest = rest.toFixed(2);
        if (rest == 0) {
            if (sumCid.toFixed(2) == needChange) { status = "CLOSED"; change = cid.map(couple => nominalize(couple)); }
            else {status ="OPEN"; change = change.map(couple => nominalize(couple));}
    
            return {status, change}
        }
    }
  

  return { status : 'INSUFFICIENT_FUNDS', change: [] };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));