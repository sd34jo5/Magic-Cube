
window.setTimeout(function(){
$(".loading").fadeOut(500)
},400)

$(document).ready(function(){
	$(window).load(function () {
          $(".mobile-inner-header-icon").click(function(){
            $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
            $(".mobile-inner-nav").slideToggle(250);
          });
          $(".mobile-inner-nav li").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });
          $(".mobile-inner-nav li").click(function(){
            $(this).find('dl').slideToggle(200)
          })
        });
})



$(document).ready(function(){


      $(function() {
                  let timer = setTimeout(function(){
                      console.log("Hello, jQuery!");
                      $('.scroll_box').hide(200,function(){
                        $('body').addClass('cur')
                        var wow = new WOW({
                            boxClass: 'wow',
                            animateClass: 'animated',
                            offset: 0,
                            mobile: true,
                            live: true
                        });
                        wow.init();
                      });
                  },9000)
              });




// $('.poster').click(function(){
//   $('.posterImg').fadeOut(200,function(){
//     $('body').addClass('cur')
// var wow = new WOW({
//     boxClass: 'wow',
//     animateClass: 'animated',
//     offset: 0,
//     mobile: true,
//     live: true
// });
// wow.init();

//   })
// })

$(".section1 .left > *").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });

$('.section3 .content1 .text .dec p').each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });

$('.section3 .content2 .item .text .dec p').each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });


$('.section3 .content3 .content .dec p,.section3 .content3 .content .link a').each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });


$('.section7 .content .left .dec p').each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });



$('.titlemodel,.section2 .left .title2').addClass('wow fadeInUp')


$('.section1 .right,.section2 .right .d2').addClass(' wow zoomIn ')


// $('.section4 .content .left img').addClass(' wow rubberBand ')

$('.section7 .content .right').addClass(' wow zoomInRight ')



$('.section2 .left .title1,.section3 .content2 .item .text .more,.section3 .content3 .content .link a').addClass('wow fadeInDown')

$('.section1 .left > *').addClass('wow fadeInLeft')


$('.section2 .right .i1 img').addClass('wow tada')


$('.section3 .content1 .text .title,.section3 .content2 .item .text .title,.section5 .content .right img').addClass('wow flipInX')

$('.section3 .content1 .text .dec p,.section3 .content2 .item .text .dec p,.section3 .content3 .content .dec p,.section7 .content .left .dec p').addClass('wow bounceInUp')

$('.section3 .content1 .imgbox,.section4 .content .right,.section6 .list .item:nth-child(2),.section6 .list .item:nth-child(4)').addClass('wow bounceInRight')

$('.section3 .content2 .item .imgbox img,.section6 .list .item:nth-child(1),.section6 .list .item:nth-child(3)').addClass('wow bounceInLeft')


$('.section3 .content3 .topImg .lefticon').addClass('wow bounce')

$('.section3 .content3 .topImg .title,.section3 .content3 .topImg .righticon').addClass('wow pulse')

$('.section5 .content .left .cont1').addClass('wow swing')


$('.section5 .content .left .cont2').addClass('wow jello')




$('.switch').click(function(){
  $('.wapMenu').toggleClass('current')
})

$('.wapMenu .menu').click(function(){
  $('.wapMenu').removeClass('current')
})




function height(){
  var sc = $(window).scrollTop();
  if (sc > 200) {
      $("body").addClass("current");
    } else {
      $("body").removeClass("current");
    }
}
height()
$(window).scroll(function () {
  height()
});



var section4  = new Swiper('.section4  .swiper-container', {
        pagination: '.section4  .swiper-pagination',
        paginationClickable: '.section4  .swiper-pagination',
        nextButton: '.section4  .swiper-button-next',
        prevButton: '.section4  .swiper-button-prev',
        autoplay:5000,
        autoplayDisableOnInteraction: false,
        speed:500,
        slidesPerView: 1,
        spaceBetween: 0
});



var section7  = new Swiper('.section7  .swiper-container', {
        pagination: '.section7  .swiper-pagination',
        paginationClickable: '.section7  .swiper-pagination',
        nextButton: '.section7  .swiper-button-next',
        prevButton: '.section7  .swiper-button-prev',
        autoplay:5000,
        autoplayDisableOnInteraction: false,
        speed:500,
        slidesPerView: 1,
        spaceBetween: 0
});

var section8  = new Swiper('.mySwiper', {
  pagination: '.mySwiper  .swiper-pagination',
  paginationClickable: '.mySwiper  .swiper-pagination',
  autoplay:3000,
  speed:300,
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: false,
  loop: true,
});

var section10  = new Swiper('.mobile-Swiper', {
  direction: 'vertical',
  pagination: '.mobile-Swiper  .swiper-pagination',
});


});