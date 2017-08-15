console.log('JS sanity check');

window.onresize = function() {
  location.reload();
}

$(function() {

  var window_size = window.matchMedia('(max-width: 450px)');

  // media query for mobile device
  if (window.matchMedia('(max-width: 450px)').matches) {
    $.ajax(
      {
        url: 'javascripts/avocado.json',
        data: {}
      }).done(function(response) {
      console.log(response);
      var listMarkup = '';
      for (var i = 0; i < response.length; i++) {
        listMarkup += '<div class="avocado-item"><h2 class="avocado-number">' + (i + 1) + '</h2><div><h3 class="avocado-title">' + response[i].name + '</h3>' + '<p>' + response[i].description + '</p><img src="../images/' + response[i].img + '"></div></div>';
      }
      $('#avocado-list').append(listMarkup);
    }).fail(function() {
      console.log("error");
    }).always(function() {
      console.log("complete");
    });
  }
  // media query for desktop
  else {
    $.ajax(
      {
        url: 'javascripts/avocado.json',
        data: {}
      }).done(function(response) {
      console.log('response:', response);
      var listMarkup = '';
      for (var i = 0; i < response.length; i++) {
        listMarkup += '<div class="avocado-item"><h2 class="avocado-number">' + (i + 1) + '</h2><img src="../images/' + response[i].img + '" class="avocado-img"><div><h3 class="avocado-title">' + response[i].name + '</h3>' + '<p>' + response[i].description + '</p></div></div>';
      }
      $('#avocado-list').append(listMarkup);
    }).fail(function() {
      console.log("error");
    }).always(function() {
      console.log("complete");
    });
  };

  // lightbox for avocado thumbnails

  var overlay = $('<div id="lightbox"></div>');
  var img = $('<img>');
  var close = $('<span>&#10005;</span>');
  var imgUrl;

  $('body').append(overlay);
  overlay.hide();

  // event listener to open lightbox on image click
  $(document).on('click', 'img.avocado-img', function() {
    console.log('click success!');
    imgUrl = $(this).attr('src'); // get img url
    console.log('image url:', imgUrl);
    overlay.append(img);
    overlay.append(close);
    img.attr('src', imgUrl);
    overlay.fadeIn('1000');
    img.fadeIn('1000');
  });

  // close lightbox
  close.click(function() {
    overlay.fadeOut('1000');
  });
});
