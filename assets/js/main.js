$(document).ready(function() {
    var $btnSets = $('#responsive'),
    $btnLinks = $btnSets.find('a');
 
    $btnLinks.click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.user-menu>div.user-menu-content").removeClass("active");
        $("div.user-menu>div.user-menu-content").eq(index).addClass("active");
    });
});

$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.view').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
});
$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 200) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});