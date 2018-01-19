//starting point
var i = 0;
var image = [];
var time = 2000;

//image list
image[0] = 'img/f1.jpg';
image[1] = 'img/f2.jpg';
image[2] = 'img/f3.jpg';
image[3] = 'img/f4.jpg';
image[4] = 'img/f5.jpg';
image[5] = 'img/f6.jpg';
image[6] = 'img/f7.jpg';
image[7] = 'img/f8.jpg';

// change image
function changeImg() {
  document.slide.src = image[i];
  if (i < image.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImg()', time);
}

window.onload = changeImg;
