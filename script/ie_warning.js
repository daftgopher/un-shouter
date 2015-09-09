(function(Modernizr){
  if (Modernizr.webgl){
    return
  } else {
    var template = '<div id="ie-warning">' +
                     '<div class="ie-modalBg"></div>' +
                     '<div class="ie-popup">' +
                       '<h3>Your Browser\'s Old</h3>' +
                       '<p class="left">Nuts, you\'re using an old-school browser...sorry but personal projects like this are the only chance I have to have fun with fancy bleeding-edge-type code, so things may look a little off.</p>' +
                       '<p class="left">I mean ok, you MAY be able to get it working, but don\'t blame me if things look a little askew. Might I recommend Google Chrome or Mozilla Firefox as sweet evergreen auto-updating browsers?</p>' +
                       '<button id="show-site" class="ie-button">Ok, I get it. Show me the crappy version.</button>' +
                     '</div>' +
                   '</div>'
    document.getElementById('site-header').insertAdjacentHTML('beforebegin', template);

    var ieWarning = document.getElementById('ie-warning'),
                  dismissButton = document.getElementById('show-site');

    function addEventListener(el, eventName, handler) {
      if (el.addEventListener) {
        el.addEventListener(eventName, handler);
      } else {
        el.attachEvent('on' + eventName, function(){
          handler.call(el);
        });
      }
    }

    addEventListener(dismissButton, 'click', function(){
        ieWarning.parentNode.removeChild(ieWarning);
    });
  }
}(Modernizr));