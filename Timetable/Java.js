function highlighting(){
  currentdate = new Date();
  var oneJan = new Date(currentdate.getFullYear(),0,1);
  var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7) - 1;
  Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }

    var result = (new Date()).getWeek();
  if(result % 2 == 0)
  {
    result = "Знаменатель";
  }
  else
  {
    result = "Числитель";
  }
  document.getElementById('result').innerHTML = result;
  var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
  var ds = new Date();
  var n = ds.getDay();
  //document.getElementById('n').innerHTML = n;
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var time = 0;
  hours = hours * 100;
  time = hours + minutes;
  //document.getElementById('timedisplay1').innerHTML = time;
  if(time > 900 && time <= 1105)
  {
      switch(n){
          case 1:
              if(result == "Знаменатель")
              {
                  document.getElementById('pn11').style.color = 'red';
              }
              else
              {
                  document.getElementById('pn12').style.color = 'red';
              }
              break;
          case 2:
              document.getElementById('vt1').style.color = 'red';
              break;
          case 3:
              if(result == "Числитель")
              {
                  document.getElementById('sr11').style.color = 'red';
              }
              else
              {
                  document.getElementById('sr12').style.color = 'red';
              }
              break;
          case 4:
              if(result == "Числитель")
              {
                  document.getElementById('ch11').style.color = 'red';
              }
              else
              {
                  document.getElementById('ch12').style.color = 'red';
              }
              break;
          case 5:
              document.getElementById('pt1').style.color = 'red';
              break;
          default :
      }
  }
  if(time > 1105 && time <= 1250)
  {
      switch(n){
          case 1:
              document.getElementById('pn2').style.color = 'red';
              break;
          case 2:
              document.getElementById('vt21').style.color = 'red';
              document.getElementById('vt22').style.color = 'red';
              break;
          case 3:
              document.getElementById('sr2').style.color = 'red';
              break;
          case 4:   
              if(result == "Числитель")
              {
                  document.getElementById('ch211').style.color = 'red';
                  document.getElementById('ch212').style.color = 'red';
              }
              else
              {
                  document.getElementById('ch221').style.color = 'red';
                  document.getElementById('ch222').style.color = 'red';
              }
              break;
          case 5:
              document.getElementById('pt2').style.color = 'red';
              break;
          default:
      }
  }
  if(time > 1300 && time <= 1510)
  {
      switch(n){
          case 1:
              document.getElementById('pn3').style.color = 'red';
              break;
          case 2:    
              document.getElementById('vt3').style.color = 'red';
              break;
          case 3:
              if(result == "Числитель")
              {
                  document.getElementById('sr3').style.color = 'red';
              }
              break;
          case 4:
              document.getElementById('ch3').style.color = 'red';
              break;
          case 5:
              document.getElementById('pt3').style.color = 'red';
              break;
          default:
      }
  }
  if(time > 1510 && time <= 1655)
  {
      switch(n){
          case 2:
              document.getElementById('vt4').style.color = 'red';
              break;
          case 3:    
              if(result == "Числитель")
              {
                  document.getElementById('sr4').style.color = 'red';
              }
              break;
          case 4:
              if(result == "Числитель")
              {
                  document.getElementById('ch4').style.color = 'red';
              }
              break;
          default:
      }
  }
}
setInterval(highlighting, 0);

function getDate(){
  var date = new Date();
  var day = date.getDate();
  var month = (date.getMonth() + 1);
  var year = (date.getYear()-100);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if(seconds < 10)
  {
      seconds = '0' + seconds;
  }
  if(minutes < 10)
  {
      minutes = '0' + minutes;
  }
  if(hours < 10)
  {
      hours = '0' + hours;
  }
  //document.getElementById('timedisplay').innerHTML = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}
//setInterval(getDate, 0);