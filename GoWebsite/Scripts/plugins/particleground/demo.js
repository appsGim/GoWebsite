/**
* Particleground demo
* @author Jonathan Nicol - @mrjnicol
*/


document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
        dotColor: '#ffffff',
        lineColor: '#ffffff'
    });
    var intro = document.getElementById('intro');
    intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


 //jQuery plugin example:
//$(document).ready(function() {
//    $('#intro').particleground({
//    dotColor: '#ffffff',
//        lineColor: '#ffffff'   
      
//  });
//  $('.intro').css({
//    'margin-top': -($('.intro').height() / 10)
//  });
//});
