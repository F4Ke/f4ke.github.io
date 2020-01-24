$(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 100}, 800);
        console.log("sddfs");
        return false;
    });

    jQuery(window).scroll(function(){
        var $sections = $('.main');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-110;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.active').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');

            }
        })
    });

});