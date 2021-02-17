$(window).scroll(function(){
    var WScroll = $(this).scrollTop();
    // console.log(WScroll)
    if ( WScroll > $('.about-overlay').offset().top -200 ) {
        $('.about-overlay').addClass('fade-overlay-about');
        $('.about-h2').addClass('about-h2-animation');
        $('.about-h3').addClass('about-h3-animation');
        $('.about-p-visi').addClass('about-p-animation');
        $('.about-p-visi-2').addClass('about-p-animation-2');
        $('.about-li').addClass('about-li-animation');

        // console.log("STRING")   
        $('.pohon').addClass('pohon-animation');     
    } 
    if ( WScroll > $('.learn-text-overlay').offset().top -150){
        $('.learn-text-overlay').addClass('learn-animation');
        $('.learn-overlay').addClass('learn-overlay-animation');
        $('.learn-p-1').addClass('learn-p-1-animation');
        $('.learn-p-2').addClass('learn-p-2-animation');
        $('.learn-p-3').addClass('learn-p-3-animation');
        $('.learn-p-4').addClass('learn-p-4-animation');
        $('.learn-img1').addClass('learn-img1-animation');
        $('.learn-img2').addClass('learn-img2-animation');
        $('.learn-kebakaran').addClass('learn-kebakaran-animation');
        $('.learn-banjir').addClass('learn-banjir-animation');
        
    }
    if ( WScroll > $('.gallery').offset().top -500 ) {
        $('.gallery-img').each(function(i){

            setTimeout(function () {

                    $('.gallery-img').eq(i).addClass('muncul');

                }, 300 * (i*1) );

        });
        
        
    }
    
    if ( WScroll > $('.footer').offset().top -260 ) {
      $('.footer-form').addClass('footer-form-animation');
      $('.footer-help').addClass('footer-help-animation');
      $('.footer-social-media').addClass('footer-social-media-animation');
    } 
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30 ) {
    document.getElementById("navbar").style.background = "rgba(158, 80, 36, 1)";
    document.getElementById("navbar").style.padding = " 10px 5px";
    document.getElementById("navbar").style.borderColor = "rgba(158, 80, 36, 1) ";
    // document.getElementById("logo").style.color = "white";
    // document.getElementById("home").style.color = "white";
    // document.getElementById("about").style.color = "white";
    // document.getElementById("contact").style.color = "white";
    // document.getElementById("navbar").style.padding = "0";
  } else {
    document.getElementById("navbar").style.background = "#9E502400";
    document.getElementById("navbar").style.padding = "0";
    document.getElementById("navbar").style.borderColor = "rgba(158, 80, 36, 0) ";
    // document.getElementById("logo").style.color = "black";
    // document.getElementById("home").style.color = "black";
    // document.getElementById("about").style.color = "black";
    // document.getElementById("contact").style.color = "black";
    // document.getElementById("navbar").style.padding = "0 20px";
    // console.log("TONG");
  }
}