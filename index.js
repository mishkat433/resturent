
 $(window).on("load", function(){
    $(".preloader").fadeOut();
})
$(document).ready(function(){

   $(window).scroll(function(){
       if($(this).scrollTop() > 100){
           $("#scroll").fadeIn();
       }
       else{
           $("#scroll").fadeOut();
       }
   })

  
   $("#scroll").click(function(){
    $("html, body").animate({
           scrollTop:0
       },2000);
   })

})






