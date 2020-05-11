
/* start oclock function*/

window.onload = function() {
  clock();  
    function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();

    var mid = 'pm';
    if (min < 10) {
      min = "0" + min;
    }
   
    if (hour > 12) {
      hour = hour - 12;
    }    
    if (hour < 10) {
    	hour = "0" + hour;
    }
    if(hour==0){ 
      hour=12;
    }
    if(TwentyFourHour < 12) {
       mid = 'am';
    }     

    var message;
   if (TwentyFourHour < 12) {
        message="Good morning";
   }
   else if (min < 10) {
   	    message="Good afternoon";
   }
   else{
   	   message="Good evening";
   }
  
  document.getElementById('message').innerHTML=message;
  document.getElementById('clock').innerHTML =hour+':'+min;
    setTimeout(clock, 1000);
  }
}

/*end oclock function*/

/*accordian menu*/
$(document).ready(function(){
      $(".accordion_header:eq(0)").click(function(){
         $(".accordion_header:eq(0)").toggleClass("active");
         $('.accordion_body:eq(0)').toggleClass("active");
      });

      $(".accordion_header:eq(1)").click(function(){
         $(".accordion_header:eq(1)").toggleClass("active");
         $('.accordion_body:eq(1)').toggleClass("active");
      });

      $(".accordion_header:eq(2)").click(function(){
         $(".accordion_header:eq(2)").toggleClass("active");
         $('.accordion_body:eq(2)').toggleClass("active");
      });

      $(".accordion_header:eq(3)").click(function(){
         $(".accordion_header:eq(3)").toggleClass("active");
         $('.accordion_body:eq(3)').toggleClass("active");
      });

      $(".accordion_header:eq(4)").click(function(){
         $(".accordion_header:eq(4)").toggleClass("active");
         $('.accordion_body:eq(4)').toggleClass("active");
      });

      $(".accordion_header:eq(5)").click(function(){
         $(".accordion_header:eq(5)").toggleClass("active");
         $('.accordion_body:eq(5)').toggleClass("active");
      });
    });

/*menu toggle*/
$(document).ready(function(){
  $('.menu-toggle').click(function () {
    $('.menu-toggle').toggleClass('active')
     $('nav').toggleClass('active')
  })
})


/*Back to top*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()>150) {
      $('.backtotop').fadeIn();
    }else{
      $('.backtotop').fadeOut();
    }
  });

  $('.backtotop').click(function () {
    $('html,body').animate({scrollTop:0},700);
  })
});


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('nav').addClass('black');
    }else{
      $('nav').removeClass('black');
    }
  });
});








