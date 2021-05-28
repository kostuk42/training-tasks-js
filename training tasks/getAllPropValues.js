/**
 * Напиши функцию getAllPropValues(propName)
 * которая вернет все значения заданного
 * свойства
 * Например getAllPropValues('name') возвращает ['Asus', 'Huawei', 'HP', 'Dell']
 * getAllPropValues('category') возвращает []
 */

const products = [
  { name: 'Asus', price: 1300, quantity: 4, name: 'spot'},
  { name: 'Huawei', price: 2700, quantity: 3 },
  { name: 'HP', price: 400, quantity: 7 },
  { name: 'Dell', price: 1200, quantity: 9 },
  { name: 'Apple', price: 1400 },
];

const getAllPropValues = propName => {
    return products.reduce((acc, product) => 
    product.hasOwnProperty(propName) ? acc.concat(product[propName]) : acc, [])
    }

console.log(getAllPropValues('name')); // ['Asus', 'Huawei', 'HP', 'Dell', 'Apple']
console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]
console.log(getAllPropValues('category')); // []
console.log(typeof NaN)