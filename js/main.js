$window = $(window);
$slide = $('.slide');

windowHeight = $window.height();

if(windowHeight <= 550) {
  windowHeight = 550;
}

$slide.height(windowHeight);
