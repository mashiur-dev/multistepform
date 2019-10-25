$(document).ready(function() {
   //radio btn to lable
   $('input[type=radio]').on('click', function() {
      $('label.radiobtn').removeClass('active');
      $(this).parent('label').addClass('active');
   });

   // Get button id
   var btn = $('.nextPrev-btn button[type="button"]'),
   // get step
   step = 'undefined';

   btn.on('click', function(){

      // get next tab id
      step = $(this).attr('tabnum');

      $("#pre-loader").show().delay(300).queue(function(n) {

         $(this).hide(); n();

         formProgress();

      });

      function formProgress(){
         // hide all active tab
         $('.tab.active').hide().removeClass('active').addClass('finished');

         // show next step & add .active class
         $('.tab#' + step).show().addClass('active').removeClass('finished');

         // remove active class to steps & add finished class
         $('.step-out.active').removeClass('active').addClass('finished');

         // add active class to steps & remove finished class
         $('.step-out#' + step).addClass('active').removeClass('finished');
      }

   });

});

// remove class on mobileview
$(window).on('load resize', function() {
   if($(window).width() < 768) {
       $('.order-last').removeClass('show');
   }else {
      $('.order-last').addClass('show');
   }
});
