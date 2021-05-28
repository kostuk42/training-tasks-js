// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities(in arr1).
// If an item cannot be found, add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.


function updateInventory(arr1, arr2) {
    let map1 = new Map(arr1.map(elem => elem.reverse()));
    let map2 = new Map(arr2.map(elem => elem.reverse()));
    map2.forEach((value, key) => 
        map1.has(key) ? map1.set(key, map1.get(key) + value) : map1.set(key, value));
    let result = [];
    map1.forEach((key, value) => {
        result.push([key, value])
    })
    return result.sort((a, b) => { 
        if (b[1] < a[1]) return +1;
        if (b[1] > a[1]) return -1;
        if (b[1] = a[1]) return 0;
    } );  
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log (updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))