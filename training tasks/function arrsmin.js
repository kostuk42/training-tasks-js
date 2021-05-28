function arrsmin() {
    var numbers = [];// сюда будем складывать числа
    var obj = arguments;// здесь коллекция данных на входе
    forobj(obj);// функция для обработки массивов и обьектов и извлечения из них чисел
    var min = Math.min.apply(null, numbers);// минимум из получившегося массива чисел
    return min;
    function forobj(arg) {// в качестве аргумента - обрабатываемый объект
        for (var i in arg) {// перебор свойств объекта

            var type = typeof arg[i];
            switch (type) {// это тип свойства
                case 'number': // если число

                    numbers.push(arg[i]);// складываем в массив
                    break;

                case 'object': //если вложенный объект
                    if (arg[i] == 'null') { // проверка на null
                        break;
                    } else {
                        forobj(arg[i]);
                    };// вызов forobj изнутри, в качестве аргумента - обнаруженный объект			
            };
        };
        // перебрали все свойства - возврат. должен сформироваться массив numbers
        return;
    };


};
var a = arrsmin(2, 14, -216, [92, 6, -22], 1, { g: 14, dfg: 'dfgg', d: -3334, e: [3, 12, -334544] });
console.log(a);