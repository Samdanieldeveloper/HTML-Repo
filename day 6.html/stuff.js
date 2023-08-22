for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    var color = colors[c];

    var lilypad = $('<div/>').addClass('lilypad ' + color + (this.colorblind == 'true' ? ' cb-friendly' : '')).data('color', color);
    var frog = $('<div/>').addClass('frog ' + color + (this.colorblind == 'true' ? ' cb-friendly' : '')).data('color', color);

    $('<div/>').addClass('bg').css(game.transform()).appendTo(lilypad);
    $('<div/>').addClass('bg animated pulse infinite').appendTo(frog);

    $('#background').append(lilypad);
    $('#pond').append(frog);
  }
