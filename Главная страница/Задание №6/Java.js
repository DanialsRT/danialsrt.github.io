function pre(){
    document.write("123<br>123<br>123");
}
function al(){
    alert("123\n"+
          "123\n"+
          "123");
}
function boole(){
    a1 = 0; a2 = 00; a3 = 0.0;
    a4 = 0e1; a5 = null; a6 = undefined;
    a7 = +1; a8 = -1.1; a9 = "";
    a10 = "0"; a11 = "undefined"; a12 = "xxxx";
    alert("a1 = 0 -> "+!a1+"\n"+
    "a2 = 00 -> "+!a2+"\n"+
    "a3 = 0.0 -> "+!a3+"\n"+
    "a4 = 0e1 -> "+!a4+"\n"+
    "a5 = null -> "+!a5+"\n"+
    "a6 = undefined -> "+!a6+"\n"+
    "a7 = +1 -> "+!a7+"\n"+
    "a8 = -1.1 -> "+!a8+"\n"+
    'a9 = "" -> '+!a9+"\n"+
    'a10 = "0" -> '+!a10+"\n"+
    'a11 = "undefined" -> '+!a11+"\n"+
    'a12 = "xxxx" -> '+!a12);
}
function ty(){
    a = 5
    a = "five"
    alert(typeof(a));
}