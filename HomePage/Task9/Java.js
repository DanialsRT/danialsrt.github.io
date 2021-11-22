function pressure(Value, Code) {
  myFuncCalls1++;
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

var myFuncCalls2 = 0;

function myFunction1()
{
     otv = "Первая функция была вызвана " + myFuncCalls1 + " раз/раза";
     return otv;
}

function myFunction2()
{
     otv = "Вторая функция была вызвана " + myFuncCalls2 + " раз/раза";
     return otv;
}