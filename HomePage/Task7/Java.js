function t1(){
    var var1;
    alert("var1="+var1);
}
function t2(){
    a1 = parseFloat("2.1", 10);
    a2 = parseFloat("3.0", 10);
    a3 = a1 + a2;
    alert(a3);
}
function t3(){
    var a="";
    a && (a=true);
    alert(a);
    var a="javascript";
    a && (a="vbscript");
    a || (a="javascript");
    alert(a);
    var b="1.1";
    a = typeof b*0.1;
    alert(a);
    var b="1.1";
    a = typeof(b*0.1);
    alert(a);
}