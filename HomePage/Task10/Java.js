//Первое задание
class CustomArray {
    // Исходный буффер - реализация массива.
    #buffer = [];

    //Размер исходного буффера - реализация размера массива.
    #length = this.#buffer.length;

    //Вывод обьектов контейнера
    print(){
        return `[${this.#buffer}]`.toString();
    }

    get length(){
        return this.#length;
    }

    get buffer(){
        return this.#buffer
    }

    //Добавление элемента в конец стека
    push(value){
        this.#buffer[length++] = value;
    }

    //Удаляет элемент в конце стека
    pop(){
        try {
            if (length == 0) throw new Error('It empty!');
                let deleteObj = this.#buffer[length - 1];
                this.#buffer.length = --length;
                return deleteObj;
        } catch (err) {
            console.log(err)
        }
    }


    //Добавление элемента в начало стека
    unshift(value){
        for (let i = this.#buffer.length - 1; i >= 0; i--) {
            this.#buffer[i+1] = this.#buffer[i]
        }
        this.#buffer[0] = value;
        length = this.#buffer.length;
    }

    //Удаление первого элемента
    shift(){
        try {
            if (length == 0) throw new Error('It empty!');
            let deleteBuff = this.#buffer[0];
            for (let i = 0; i < this.#buffer.length; i++) {
                this.#buffer[i] = this.#buffer[i + 1];
            }
            this.#buffer.length--;
            return deleteBuff;
        } catch (err) {
            console.log(err);
        }
    }

    //Возвращает элемент по указанному индексу
    getByIndex(index){
        try {
            if (length == 0) throw new Error('It empty!');
            if (index - 1 >= length || index <= 0 ) throw new Error('Out of index stack')
                let deleteObj =  this.#buffer[index - 1];
            for (let i = index - 1; i < this.#buffer.length - 1;i++) {
                [this.#buffer[i],this.#buffer[i+1]] = [this.#buffer[i+1],this.#buffer[i]];
            }
            this.pop();
            return deleteObj;
        } catch (err) {
            console.log(err)
        }
    }

}

//Второе задание
//Сортировка по возрастанию
function sortStringAscending(array) {
    return array.sort(function (a,b) {
        return a.length - b.length || a.localeCompare(b);
    });
}

//Сортировка по убыванию
function sortStringDescending(array) {
    return array.sort(function (a,b) {
        return b.length - a.length || b.localeCompare(a);
    });
}

//Функция ввода и вывода отсортированного массива.
function enterSorting(func) {
    let collection = [];
    while (true){
        let numberBuffer = prompt('Введите значение: \n'+
            'Введите "!" чтобы закончить ввод и получить ответ', 1);

        if (numberBuffer == '!') {
            alert(`[${collection}] - Начальный массив \n` +
            `[${func(collection)}] - Отсортированный массив`)
            return;
        } else {
            collection.push(numberBuffer);
        }
    }
}

//Третье задание
//Данная функция находит сечение
function matrixSpecial(matrix,dimension,position) {
    let dimensions = matrix.length;
    let dims = [];

    for (let i = 0; i < dimensions - 1; i++) {
        dims[i] = matrix[i + (i >= dimension ? 1 : 0)].length;
    }

    let result = [dims[0],dims[1]];

    let start = [];
    let end = [];
    for (let i = 0; i < dimensions; i++) {
        start[i] = (dimension == i ? position : 0);
        end[i] = (dimension == i ? position + 1 : matrix[i].length);
    }

    let counters = [];
    for (counters[0] = start[0]; counters[0] < end[0]; counters[0]++) {
        for (counters[1] = start[1]; counters[1] < end[1]; counters[1]++){
            for (counters[2] = start[2]; counters[2] < end[2]; counters[2]++){
                let sliceCoord = [];
                for (let i = 0; i < dimensions - 1; i++) {
                    sliceCoord[i] = counters[i + (i >= dimension ? 1 : 0)];
                }
                result[sliceCoord[0],sliceCoord[1]] = matrix[counters[0],counters[1],counters[2]];
            }
        }
    }
    return result[position];
}

//Генерирует случайную матрицу для получения сечения
function generateMatrix() {
    let matrix = [[],[],[]];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrix[i][j] = Math.floor((Math.random() * 10));
        }
    }
    return matrix;
}

//Четвертое задание
function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

//Календарь
function createCalendar(elem) {
    var d1 = new Date();
    year = d1.getFullYear();
    month = d1.getMonth() + 1;
    if (month > 12)
        month = month - 12; 
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);

    let table = `<table><tr><th colspan="7">${monthNames[d.getMonth()]}</th><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr></tr><tr>`;

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
}

//Пятое задание
//Поиск элементов в строке
function implementCounter(string,repeatString) {
    return string.split(repeatString).length - 1;
}

//Шестое задание
function func1(arg) {
    return Math.exp(arg);
}
//Седьмое задание
function func2(arg) {
    return (arg + Math.cos(arg))/(Math.sin(arg));
}
//Восьмое задание
function func3(arg) {
    return (1)/(Math.log10(1+arg)) - (1)/(arg);
}

//Таблица значений
function createFunctionTable(elem,func) {
    let table = `<table><tr><td>Шаг</td><td>Результат</td></tr>`;

    for (let step = 0; step <= 5; step+=0.5) {
        table += `<tr><td>${step}</td><td>${func(step).toFixed(5)}</td>`;
    }

    table += `</table>`;
    elem.innerHTML = table;
}

let container = new CustomArray();