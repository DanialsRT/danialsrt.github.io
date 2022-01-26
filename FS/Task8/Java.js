const newButton = document.getElementById('newButton');

function t1() {    
    document.write("<table border=1 cellspacing=0>" +
       "<tr><th>Значения</th><th>Результат</th></tr>");
       var n1 = prompt('Введите кол-во значений')
      for(i=1; i<=n1; i++){
        var str = prompt('Введите символы')
        n = str.charCodeAt(0);
       document.write("<tr>",
       "<td align=center><p>", i, "</p></td>",
       "<td align=right>", n, "</td>",
       "</tr>")
      }
       document.write("</table>")
}

newButton.addEventListener('click', t1);