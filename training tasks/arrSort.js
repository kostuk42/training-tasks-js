ArrSort = (arr) => {
    c = (type) => arr.filter(elem => typeof elem === type)
    return [...c('number'), ...c('string')].sort()
}


    

console.log(ArrSort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));
