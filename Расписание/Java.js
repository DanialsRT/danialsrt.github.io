function highlighting(){
    d = new Date();
    time = d.getDate()+"."+(d.getMonth()+1)+"."+(d.getYear()-100);
    return time;
}
function domRangehighlight(text) {
    var root = document.getElementById('ex3').firstChild;
    var content = root.nodeValue;
    if (~content.indexOf(text)) {
      if (document.createRange) {
        var rng = document.createRange();
        rng.setStart(root, content.indexOf(text));
        rng.setEnd(root, content.indexOf(text) + text.length);
        var highlightDiv = document.createElement('span');
        highlightDiv.style.backgroundColor = 'blue';
        rng.surroundContents(highlightDiv);
      } else
        alert('Вероятно, у вас IE8-, смотрите реализацию TextRange ниже');
    } else
      alert('Совпадений не найдено');
  }