function pressure(Value, Code) {
  //1 Па = 0.007500616827041699 мм рт ст
  if (Code == 1){ //1 из Па в мм рт. ст.
    Result = Value * 760 / 101325;
    Result = Value + ' Па * 760 / 101325 = ' +  Result + ' мм рт. ст';
  }
  else if (Code == 0){ //0 из мм рт. ст. в Па
    Result = Value * 101325 / 760;
    Result = Value + ' мм рт. ст * 101325 / 760 = ' + Result + ' Па';
  }
  else
     Result = 'Введеное значение неверно'
  document.querySelector('.sum').innerHTML = Result;
}

function srdch() {
  myFuncCalls2++;
  let Value = 1;
  let Sum = 0;
  let arr = [];
  while (Value != 'End'){
  Value = prompt('Введите число: (Если нужно закончить, введите End)');
  if (Value != 'End')
  arr.push(Value);
  }
  for (i = 0; i < arr.length; i++) {
    Sum = Number(Sum) + Number(arr[i]);
  }
  length = arr.length;
  Sum = Sum / length;
  Sum = 'Среднее арифметическое число = ' + Sum + '. Все введенные числа = ' + arr;
  return Sum;
}

var myFuncCalls1 = 0;
function myFunction1()
{
  myFuncCalls1++; 
  alert('Функция вызвана');
  return myFuncCalls1;
}

var myFuncCalls2 = 0;
function myFunction2()
{
  myFuncCalls2++; 
  alert('Функция вызвана');
  return myFuncCalls2;
}

function myFunctionCall1()
{
     otv = "Первая функция была вызвана " + myFuncCalls1 + " раз/раза";
     return otv;
}

function myFunctionCall2()
{
     otv = "Вторая функция была вызвана " + myFuncCalls2 + " раз/раза";
     return otv;
}

function action(){
  //Запрос код - типа перевода измерений давления
  let code = prompt('Выбирете режим перевода: \n' +
      '0 : Из mm в ПА \n' + '1 : Из Па в mm', 0);
      //Проверка на корректность ввода - либо 1, либо 0
  if(code != 1 && code != 0) {
    alert("Некорректный выбор")
    location.reload();
    return;
  }
  //Запрос значения - давление в каком-либо из измерений
  let value = prompt('Введите начальное значение:', 101325);
  let value1 = prompt('Введите конечное значение:', 102325);
  let step = prompt('Введите шаг:', 10);
  console.log(value);
  console.log(value1);
  console.log(step);
  for (let j = value; j <= value1; j = Number(j) + Number(step)){
    console.log(j);
    firstUserAction(j,code);
  }
  return;
}

function firstUserAction(value,code) {
  
  //Проверка на корректность ввода - любое число
  if(isNaN(parseFloat(value)))
  {
      alert("Некорректный выбор")
      location.reload();
      return;
  }
  //Получение через селекторы расположения под кнопокой и реализация создания эл-та
  //Путем добавления аттрибутов и тегов(через Child и Node)
  //Благодаря такому подходу можно обновлять динамически таблицу без перезапуска страницы
  //Постоянно нажимать на кнопку, вводить данные и прорисовывать таблицу
  let body = document.querySelector('.table');
  let tbdy = document.createElement('tbody');
  let tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  for (let i = 0; i < 1; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < 2; j++) {
          if (i == 1 && j == 1) {
              break;
          } else {
              let td = document.createElement('td');

              if (j == 0 && code == 0) 
                  td.innerText = `${value} mm`;
              else if (j == 0 && code == 1) 
                  td.innerText = `${value} Па`;

              if (j == 1 && code == 0) 
                  td.innerText = `${pressure(value,code)} Па`;
              else if (j == 1 && code == 1) 
                  td.innerText = `${pressure(value,code)} mm`;

              td.appendChild(document.createTextNode('\u0020'))
              i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
              tr.appendChild(td)
          }
      }
      tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
}

function pressure(value,code) {
  return code == 0 ? value * (101325/760) : value * (760/101325);
}