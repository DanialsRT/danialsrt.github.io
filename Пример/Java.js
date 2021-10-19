function highlighting(){
  currentdate = new Date();
  var oneJan = new Date(currentdate.getFullYear(),0,1);
  var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
  if(result / 2 == 1)
  {
    result = "Числитель";
  }
  else
  {
    result = "Знаменатель";
  }
  document.getElementById('result').innerHTML = result;
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var time = 0;
  hours = hours * 100;
  time = hours + minutes;
  document.getElementById('timedisplay1').innerHTML = time;
  time = 1000;
  if(time > 900 && time <= 1105 && result == "Числитель")
  {
    document.getElementById('pn1').style.backgroundColor = 'red';
    document.getElementById('pn1').style.color = 'white';
  }
  if(time > 900 && time <= 1105 && result == "Знаменатель")
  {
    document.getElementById('pn2').style.backgroundColor = 'red';
    document.getElementById('pn2').style.color = 'white';
  }
  if(time > 1105 && time <= 1250 && result == "Числитель")
  {
    document.getElementById('pn3').style.backgroundColor = 'red';
    document.getElementById('pn3').style.color = 'white';
  }
  if(time > 1105 && time <= 1250 && result == "Знаменатель")
  {
    document.getElementById('pn4').style.backgroundColor = 'red';
    document.getElementById('pn4').style.color = 'white';
  }
  if(time > 1300 && time <= 1510 && result == "Числитель")
  {
    document.getElementById('pn5').style.backgroundColor = 'red';
    document.getElementById('pn5').style.color = 'white';
  }
  if(time > 1300 && time <= 1510 && result == "Знаменатель")
  {
    document.getElementById('pn6').style.backgroundColor = 'red';
    document.getElementById('pn6').style.color = 'white';
  }
  if(time > 1510 && time <= 1655 && result == "Числитель")
  {
    document.getElementById('pn7').style.backgroundColor = 'red';
    document.getElementById('pn7').style.color = 'white';
  }
  if(time > 1510 && time <= 1655 && result == "Знаменатель")
  {
    document.getElementById('pn8').style.backgroundColor = 'red';
    document.getElementById('pn8').style.color = 'white';
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
    document.getElementById('timedisplay').innerHTML = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}
setInterval(getDate, 0);