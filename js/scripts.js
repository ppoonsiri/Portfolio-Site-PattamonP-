console.log('Hello, I hope you like my portfolio site');

function menuToggle () {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle'&& $(window).width() < 640) {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}
