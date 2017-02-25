var titles = document.querySelectorAll('section h2');

for (var i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', toggleSibblings);
}

function toggleSibblings(){
  var parent = this.parentNode;
  var ps = parent.querySelectorAll('p');
  for (var i = 0; i < ps.length; i++) {
    var p = ps[i];
    if(p.classList.contains('hidden')){
      p.classList.remove('hidden');
    } else {
      p.classList.add('hidden');
    }
  }
}
