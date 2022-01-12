Date.prototype.getWeek = function () {
  let date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  let week1 = new Date(date.getFullYear(), 0, 4);
  result =
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    );
  return result;
};

function highlighting() {
  let mydate = new Date();
  result = mydate.getWeek();
  if (result % 2 == 1) {
    result = "Числитель";
  } else {
    result = "Знаменатель";
  }
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let time = 0;
  hours = hours * 100;
  time = hours + minutes;
  if (time > 900 && time <= 1105) {
    switch (n) {
      case 1:
        document.getElementById("pn1").style.color = "red";
        break;
      case 2:
        document.getElementById("vt1").style.color = "red";
        break;
      case 3:
        if (result == "Числитель") {
          document.getElementById("sr11").style.color = "red";
        } else {
          document.getElementById("sr12").style.color = "red";
        }
        break;
      case 4:
        if (result == "Числитель") {
          document.getElementById("ch11").style.color = "red";
        } else {
          document.getElementById("ch12").style.color = "red";
        }
        break;
      case 6:
        document.getElementById("sb1").style.color = "red";
        break;
      default:
    }
  }
  if (time > 1105 && time <= 1250) {
    switch (n) {
      case 1:
        document.getElementById("pn2").style.color = "red";
        break;
      case 2:
        document.getElementById("vt2").style.color = "red";
        break;
      case 3:
        document.getElementById("sr2").style.color = "red";
        break;
      case 4:
        document.getElementById("ch2").style.color = "red";
        break;
      case 6:
        document.getElementById("sb2").style.color = "red";
        break;
      default:
    }
  }
  if (time > 1300 && time <= 1510) {
    switch (n) {
      case 1:
        document.getElementById("pn3").style.color = "red";
        break;
      case 2:
        document.getElementById("vt3").style.color = "red";
        break;
      case 3:
        document.getElementById("sr3").style.color = "red";
        break;
      case 4:
        document.getElementById("ch3").style.color = "red";
        break;
      case 6:
        document.getElementById("sb3").style.color = "red";
        break;
      default:
    }
  }
  if (time > 1510 && time <= 1655) {
    switch (n) {
      case 1:
        if (result == "Числитель") {
          document.getElementById("pn41").style.color = "red";
        } else {
          document.getElementById("pn42").style.color = "red";
        }
        break;
      case 2:
        document.getElementById("vt4").style.color = "red";
        break;
      case 3:
        if (result == "Числитель") {
          document.getElementById("sr4").style.color = "red";
        }
        break;
      case 4:
        if (result == "Числитель") {
          document.getElementById("ch4").style.color = "red";
        }
        break;
      case 6:
        if (result == "Числитель") {
          document.getElementById("sb41").style.color = "red";
        } else {
          document.getElementById("sb42").style.color = "red";
        }
        break;
      default:
    }
  }
}
window.addEventListener("load", function () {
  highlighting();
});

function Week(k) {
  let m = new Date();
  let days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  let month = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "авгутса",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  let D0 = k;
  D0 > 7 ? (D0 -= 7) : D0;
  let DG = m.getYear(); //Год
  let D3 = m.getDay(); //День недели
  let D1 = m.getDate(); //День
  let D2 = m.getMonth(); //Месяц
  console.log;
  m = new Date(DG, D2, D1 + k - D3);
  DG = m.getYear(); //Год
  D1 = m.getDate(); //День
  D2 = m.getMonth(); //Месяц
  D0 = days[D0];
  D2 = month[D2];
  console.log(D0 + ", " + D1 + " " + D2);
  return D0 + ", " + D1 + " " + D2;
}
