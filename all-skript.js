
jQuery(function($){
   var BODY = $("body");
  //menu
  var menuBurger = $(".menu-burger");
  menuBurger.on('click', function(event) {
    event.preventDefault();
    BODY.toggleClass('mobile-menu-open');
  });
  var mobileMenu = $(".mobile-menu");
  mobileMenu.on('click', function(event) {
    event.preventDefault();
    BODY.removeClass("mobile-menu-open");
  });
  var mobileMenuItem = $(".mobile-menu-item");
  mobileMenuItem.on('click', function(event) {
    var thisLala = event.target;
    if(!$(thisLala).data('lang')) event.stopPropagation();        
  });

//paralax
  var header = $("#header");
  var headerWidth = header.outerWidth();
  var headerHeight = header.outerHeight();
  var parallax = $(".parallax");
  var coef = 20;
  header.on('mousemove', function(event) {
    var cordX = event.pageX - headerWidth/2;
    var cordY = event.pageY - headerHeight/2;
    parallax.css({
      "marginLeft": -(cordX+cordY)/coef + "px"
    })
  }); 

  // Для свайпера стоп при наведении
  $('.slider-content').on('mouseover',function() { swipers.stopAutoplay(); }); $('.slider-content').on('mouseout',function() { swipers.startAutoplay(); });

  //Табы по индексу
  var institutionSmallPictures = $(".institution-small-pictures").find("a");
  var institutionBigPictures = $(".institution-big-pictures").find("img");
  institutionSmallPictures.on('click', function(event) {
      event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      var index = institutionSmallPictures.index($(this));
      institutionBigPictures.eq(index).addClass('active').siblings().removeClass('active');    
  });

  // Время для переключения баннеров
  var timers = [$("#t13"),$("#t1")];
  var iter = 0;
  var count = 1;
  count++;
  setInterval(function() { show_timer(); }, 3000);
  function show_timer(){
      for(var i = 0; i<timers.length; i++){
          timers[i].fadeOut(0);
      }
      timers[iter].fadeIn(0);
      iter++;
      if(iter==count){
          iter = 0;   
      }
  }

  // фиксированное меню
  var $window = $(window);
    var $menu = $('#header'); 
    setTimeout(function(){    
      var menuTop = $menu.offset().top;
      $window.on('scroll', function() {
        var windowTop = $window.scrollTop();
        if(windowTop > menuTop){
          $menu.addClass("fixed");
        }else{
          $menu.removeClass("fixed");
        }
      });
    }, 1500);

  // Клавиша для перекручивания вверх
  $(document).ready(function(e) {
    $(".fixtotop").hide(); 
    $(window).scroll(function(e) { 
      var top = $(document).scrollTop(); 
      if(top >= 1050) $('.fixtotop').fadeIn(); 
      else $('.fixtotop').fadeOut(); 
      e.preventDefault(); 
      return false; 
    }); 
    $(document).on('click', '#totop', function(e) { 
      $('body, html').animate({scrollTop: 0}, 1000); 
      e.preventDefault(); 
      return false; 
    });
    
  });

  // Фиксированый блок по отношению к контенту
  $(document).ready(function(e) {

    if($(".news-full").length > 0) {
        $(document).on('scroll', function(event) {
        var $window = $(window);
        var $newsFullR = $('.news-full-r'); 
        var newsFullTop = $(".news-full").offset().top-118;
        var blockHeight = $(".news-full > .wrapper").height()+$(".news-full > .wrapper").offset().top;
        var windowTopV = $window.scrollTop();
          var windowTopV = $window.scrollTop();
          if(windowTopV > newsFullTop) $newsFullR.addClass("news-full-r-f-fixed");
          else  $newsFullR.removeClass('news-full-r-f-fixed').removeClass('bottabs-news');
          if(  windowTopV >= $(".news-full > .wrapper").height()-372) $newsFullR.addClass('bottabs-news').removeClass('news-full-r-f-fixed');            
      });
    };
});


  // клин везде кроме элемента убирать класс
  var basket = $(".basket");
    basket.on('click', function(event) {
      body.addClass('basket-open');
    });
    
  $(document).click(function(e) {
    var div = $(".basket");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
       $('body').removeClass('basket-open');
    }
  });


});

// Модальное окно
var static_modal = "";
var getIdCModal = false;
$(document).on('click', '[data-modal]', function(e) {
   e.preventDefault();
   var thisId = $(this).data('modal')?"#"+$(this).data('modal'):$(this).attr('href'),
       modalBlock = $(".datamodal"+thisId);
        
    if($(this).data('modalcopy')) {
        copyModals(thisId);
        return false;
    }

   static_modal = thisId;
   modalBlock.addClass('active');
   $("body").addClass('active-modal');
    
   $('.modalclose', modalBlock).on('click', function(e) {
       modalBlock.removeClass('active');
       $('body').removeClass('active-modal');
   });
});
function copyModals(id) {
    getIdCModal = 'onloadmodal'+getRandomInt(1111, 9999);
   $("body").addClass('active-modal').append('<div class="datamodal active" id="'+getIdCModal+'">'+$(id).html()+'</div>');
    if($("#"+getIdCModal).length>0) {
        $('.modalclose', "#"+getIdCModal).on('click', function(e) {
            $("#"+getIdCModal).detach();
            $('body').removeClass('active-modal');
            getIdCModal = false;
        });
    }
}
function getRandomInt(min, max) {
    min = min || 1;
    max = max || 99999999999;
    return Math.floor(Math.random() * (max - min)) + min;
}

// html  
<div class="datamodal" id="id-modal">
    <div>
      
    </div>
    <div class="modalclose"></div>
</div>
// html


// Модальное окно

//проскролить до нужного блока
var scrollTo = $("#filter");
body.stop().animate({
    scrollTop: scrollTo.offset().top - body.offset().top + body.scrollTop()
});
//проскролить до нужного блока


// плавный якорь
$(document).ready(function() {
    $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top-104;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
    });
});
// плавный якорь

// инпут показать пароль
$(document).on('click', '.show-password', function(event) {
    $('input.input-password').attr('type', ($('input.input-password').attr('type') == 'password') ? 'text' : 'password');
});
// инпут показать пароль



