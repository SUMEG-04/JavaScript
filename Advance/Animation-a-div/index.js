$(document).ready(function(){
  $(window).scroll(function(){
      var positiontop=$(document).scrollTop();
      console.log(positiontop);

      if((positiontop>180) && (positiontop<528)){
          $('#img-one').addClass('animate__animated animate__bounceInLeft');
          $('#img-two').addClass('animate__animated animate__bounceInLeft');
          $('#img-three').addClass('animate__animated animate__bounceInLeft');
      }

      if((positiontop>432) && (positiontop<600)){
          $('#textanimate').addClass('animate__animated animate__slideInUp');
          
      }

      if((positiontop>585) && (positiontop<620)){
          $('#img-two-one').addClass('animate__animated animate__flipInY');
          $('#img-two-two').addClass('animate__animated animate__jackInTheBox');
          $('#img-two-three').addClass('animate__animated animate__flipInY');
      }
  });
});