function action1(){
    var Text = document.getElementById("ID1").value
    var elem = document.getElementById("MyText");
    elem.innerText = Text;
  }

function action2(){
    var Text = document.getElementById("ID2").value
    var elem = document.getElementById("MyText");
    elem.outerText = Text;
  }

function action3(){
    var Text = document.getElementById("ID3").value
    var elem = document.getElementById("MyText");
    elem.innerHTML = Text;
  }

function action4(){
    var Text = document.getElementById("ID4").value
    var elem = document.getElementById("MyText");
    elem.outerHTML = Text;
  }
function action5(){
    var Text = document.getElementById("ID51").value
    var elem = document.getElementById("MyText");
    var ad = document.getElementById("ID5").value
    elem.insertAdjacentText(ad,Text);
    alert(ad);
  }

function action6(){
    var Text = document.getElementById("ID61").value
    var elem = document.getElementById("MyText");
    var ad = document.getElementById("ID6").value
    elem.insertAdjacentHTML(ad,Text);
    alert(ad);
  }