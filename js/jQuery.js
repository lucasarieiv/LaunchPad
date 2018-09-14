$(function(){

  var idItem = '',
      idLoop = '';

  var $listItems = $('p'),
      $listLoop = $('span.Loop');

  $(this).on('keydown', function(key){
    if (key.keyCode == '65') {
      $('p#keyBoard-1').removeClass().addClass('roxo').css('background', '#e4aaff');
      setTimeout(function(){
        $('p#keyBoard-1').css('background', 'transparent');
        $('p#keyBoard-2').removeClass().addClass('roxo').css('background', '#e4aaff');
      }, 230);
      setTimeout(function(){
        $('p#keyBoard-2').css({'background': 'transparent', 'border': '6px solid transparent', 'boxShadow': 'none', 'transition': '1.2s'});
        $('p#keyBoard-3').removeClass().addClass('roxo').css('background', '#e4aaff');
      }, 720);
      setTimeout(function(){
        $('p#keyBoard-3').css({'background': 'transparent', 'transition': '1.2s'});
        $('p#keyBoard-4').removeClass().addClass('roxo').css('background', '#e4aaff');
      }, 900);
      $('#audio-1')[0].load();
      $('#audio-1')[0].play();
    }
    else if (key.keyCode == '83') {
      $('p#keyBoard-2').removeClass().addClass('amarelo');
      setTimeout(function(){
        $('p#keyBoard-8').removeClass().addClass('amarelo');
      }, 100);
      setTimeout(function(){
        $('p#keyBoard-7').removeClass().addClass('amarelo');
      }, 800);
      setTimeout(function(){
        $('p#keyBoard-6').removeClass().addClass('amarelo');
      }, 1700);
      setTimeout(function(){
        $('p#keyBoard-5').removeClass().addClass('amarelo');
      }, 2600);
      $('#audio-2')[0].load();
      $('#audio-2')[0].play();
    } else if (key.keyCode == '68') {
      $('p#keyBoard-3').removeClass().addClass('verde');
      $('#audio-3')[0].load();
      $('#audio-3')[0].play();
    } else if (key.keyCode == '70') {
      $('p#keyBoard-4').removeClass().addClass('azul');
      $('#audio-4')[0].load();
      $('#audio-4')[0].play();
    } else if (key.keyCode == '71') {
      $('p#keyBoard-5').removeClass().addClass('vermelho');
      $('#audio-5')[0].load();
      $('#audio-5')[0].play();
    } else if (key.keyCode == '72') {
      $('p#keyBoard-6').removeClass().addClass('rosa');
      $('#audio-6')[0].load();
      $('#audio-6')[0].play();
    } else if (key.keyCode == '90') {
      $('p#keyBoard-7').removeClass().addClass('verde');
      $('#audio-7')[0].load();
      $('#audio-7')[0].play();
    } else if (key.keyCode == '88') {
      $('p#keyBoard-8').removeClass().addClass('vermelho');
      setTimeout(function(){
        $('p#keyBoard-1').removeClass().addClass('vermelho');
      }, 750);
      setTimeout(function(){
        $('p#keyBoard-2').removeClass().addClass('vermelho');
      }, 950);
      setTimeout(function(){
        $('p#keyBoard-3').removeClass().addClass('vermelho');
      }, 1050);

      setTimeout(function(){
        $('p#keyBoard-3').removeClass().addClass('amarelo');
      }, 1600);
      setTimeout(function(){
        $('p#keyBoard-2').removeClass().addClass('amarelo');
      }, 1700);
      setTimeout(function(){
        $('p#keyBoard-1').removeClass().addClass('amarelo');
      }, 1800);

      setTimeout(function(){
        $('p#keyBoard-1').removeClass().addClass('verde');
      }, 2400);
      setTimeout(function(){
        $('p#keyBoard-2').removeClass().addClass('verde');
      }, 2500);
      setTimeout(function(){
        $('p#keyBoard-3').removeClass().addClass('verde');
      }, 2600);

      setTimeout(function(){
        $('p#keyBoard-3').removeClass().addClass('azul');
      }, 3400);
      setTimeout(function(){
        $('p#keyBoard-2').removeClass().addClass('azul');
      }, 3500);
      setTimeout(function(){
        $('p#keyBoard-1').removeClass().addClass('azul');
      }, 3600);

      $('#audio-8')[0].load();
      $('#audio-8')[0].play();
    };
  });

  $(this).on('keyup', function(){
    $('p').addClass('hover');
  });

  // $listItems.on('click', function(){
  //   idItem = this.id;
  //   if (idItem == 'keyBoard-1' || (keyCode) == '65') {
  //     $('p#keyBoard-1').removeClass().addClass('roxo');
  //     $('#audio-1')[0].load();
  //     $('#audio-1')[0].play();
  //   };
  // });

  $listLoop.on('click', function(){
    idLoop = this.id;
    if (idLoop == 'loop-1') {
      $('#loop-1').removeClass('loopOff').addClass('loopOn').text('LOOP ON');
      $('#audio-1')[0].loop = true;
      if ($('#loop-1').click(function() {
        if ($('#audio-1')[0].loop == true) {
          $('#audio-1')[0].loop = false;
          $('#loop-1').removeClass('loopOn').addClass('loopOff').text('LOOP OFF');
        } else {
          $('#loop-1').removeClass('loopOff').addClass('loopOn').text('LOOP ON');
          $('#audio-1')[0].loop = true;
        };
      }));
    } else if (idLoop == 'loop-2'){
      $('#loop-2').removeClass('loopOff').addClass('loopOn').text('LOOP ON');
      $('#audio-2')[0].loop = true;
      if ($('#loop-2').click(function() {
        if ($('#audio-2')[0].loop == true) {
          $('#audio-2')[0].loop = false;
          $('#loop-2').removeClass('loopOn').addClass('loopOff').text('LOOP OFF');
        } else {
          $('#loop-2').removeClass('loopOff').addClass('loopOn').text('LOOP ON');
          $('#audio-2')[0].loop = true;
        };
      }));
    } else if (idLoop == 'loop-3'){
      $('#loop-3').removeClass('loopOff').addClass('loopOn').text('LOOP ON');
      $('#audio-3')[0].loop = true;
      if ($('#loop-3').click(function(){
        if ($('#audio-3')[0].loop == true) {
          $('#audio-3')[0].loop = false;
          $('#loop-3').removeClass('loopOn').addClass('loopOff').text('LOOP OFF');
        } else {
          $('#loop-3').removeClass('loopOff').addClass('loopOn').text('LOOP ON');
          $('#audio-3')[0].loop = true;
        }
      }));
    } else if (idLoop == 'loop-4'){
      $('#loop-4').removeClass('loopOff').addClass('loopOn').text('LOOP ON');
      $('#audio-4')[0].loop = true;
      if ($('#loop-4').click(function(){
        if ($('#audio-4')[0].loop == true) {
          $('#audio-4')[0].loop = false;
          $('#loop-4').removeClass('loopOn').addClass('loopOff').text('LOOP OFF');
        } else {
          $('#loop-4').removeClass('loopOff').addClass('loopOn').text('LOOP ON');
          $('#audio-4')[0].loop = true;
        }
      }));
    } else if (idLoop == 'loop-5'){
      alert('Loop5');
    } else if (idLoop == 'loop-6'){
      alert('Loop6');
    } else if (idLoop == 'loop-7'){
      alert('Loop7');
    } else if (idLoop == 'loop-8'){
      alert('Loop8');
    };
  });

});
