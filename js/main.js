// Generated by CoffeeScript 1.6.2
(function() {
  var autoInput, autoTime, moveToButton, moveToRandom, moveToText, switchMouseCursor;

  autoTime = 233;

  moveToButton = function() {
    return $('#fake_mouse').animate({
      top: $('#su').position().top + 5,
      left: $('#su').position().left + 15
    }, 500, function() {
      return location.href = $('#search').attr('action') + '?' + $('#search').formSerialize();
    });
  };

  moveToText = function() {
    return $('#fake_mouse').animate({
      top: $("#kw").position().top + 5,
      left: $("#kw").position().left
    }, 2000, function() {
      return $("#kw").focus();
    });
  };

  moveToRandom = function(str) {
    var stemp;

    stemp = str;
    return $('#fake_mouse').animate({
      top: "+=5px",
      left: "+=10px"
    }, "fast", function() {
      return autoInput(stemp, 0);
    });
  };

  switchMouseCursor = function() {
    var agent;

    agent = navigator.userAgent;
    if (agent.indexOf("Windows NT")) {
      return $('#fake_mouse').attr("src", "img/mouse_arrow_windows_aero.png");
    } else if (agent.indexOf("Mac OS")) {
      return $('#fake_mouse').attr("src", "img/mouse_arrow_mac.png");
    }
  };

  autoInput = function(str, index) {
    var val;

    val = str.substr(0, index + 1);
    $("#kw").attr("value", val);
    if (index < str.length) {
      return setTimeout(function() {
        return autoInput(str, index + 1);
      }, Math.random() * autoTime);
    } else {
      return moveToButton();
    }
  };

  $(document).ready(function() {
    var wd;

    if (wd = $.url().param('s')) {
      $('#fake_mouse').show();
      switchMouseCursor();
      return $('#su').ready(function() {
        moveToText();
        return moveToRandom(wd);
      });
    } else {
      return $('#search').submit(function() {
        this.kw.value = _.string.trim(this.kw.value);
        if (this.kw.value) {
          $("#search_url").html(location.href + '?s=' + $('#kw').val());
        }
        return false;
      });
    }
  });

}).call(this);
