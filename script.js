;(function() {
  var selem = document.currentScript;

  var button = document.createElement('button');
  button.className = "replit-auth-button";
  button.textContent = 'Launch Among Us ';

  if (location.protocol !== 'https:') {
    var err = document.createElement('div');
    err.className = "extramath-errorrun-error";
    err.textContent = 'Replit auth requires https!';
    selem.parentNode.insertBefore(err, selem);
  }

  button.onclick = function() {
    // var authWindow = window.open('https://161bf4dd-d780-42d5-a211-221a6737c340.id.repl.co/')
    window.addEventListener('message', authComplete);

    var h = 500;
		var w = 350;
		var left = (screen.width / 2) - ( w / 2);
		var top = (screen.height / 2) - (h / 2);

    var authWindow = window.open(
      'https://161bf4dd-d780-42d5-a211-221a6737c340.id.repl.co/',
      '_blank',
      'modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left)

    function authComplete(e) {
      if (e.data !== 'OS_game.script') {
        return;
      }

      window.removeEventListener('message', authComplete);

      authWindow.close();
      if (selem.attributes.authed.value) {
        eval(selem.attributes.authed.value);
      } else {
        location.reload();
      }
    }
  }

  selem.parentNode.insertBefore(button, selem);
})();
