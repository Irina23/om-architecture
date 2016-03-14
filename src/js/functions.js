jQuery(document).ready(function() {



    jQuery(window).load(function() {
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
        gutter_in_pixels = jQuery(".item-project").width() * 0.02;
        jQuery('.project-list').masonry({
            // options
            itemSelector: '.item-project',
            resizeable: true,
            gutter: gutter_in_pixels
        });
        jQuery('.slider').bxSlider({
            auto: true
        });





    });


    /*var posts = jQuery('.item-project');

    jQuery(".project-nav li" ).click(  function() {

        var nav_active = jQuery(this);
        console.log(nav_active);
        jQuery('.project-nav li').each(function(){
            jQuery(this).removeClass("active");
        });
        jQuery(nav_active).addClass("active");

        var customType = jQuery(this).data('filter'); // category
        console.log(customType);
        posts
            .css("opacity", 0.7)
            .filter(function () {
                if(customType=="all"){
                    posts.css("opacity", 1);
                }else {
                    return jQuery(this).data('cat') === customType;
                }

                //return jQuery(this).data('cat') === customType;
            })
            .css("opacity", 1);



    });*/

    jQuery(".project-nav li").click(function(){
        var nav_active = jQuery(this);
        console.log(nav_active);
        jQuery('.project-nav li').each(function(){
            jQuery(this).removeClass("active");
        });
        jQuery(nav_active).addClass("active");


        var customType = jQuery(this).attr('data-cat');
        console.log(customType);
        if(customType==="all") {
            jQuery('.item-project').css("opacity", 1);
            return;
        }else{
            jQuery('.item-project').each(function(){
                if(jQuery(this).attr('data-cat').indexOf(customType) < 0) jQuery(this).css("opacity", 0.7); else jQuery(this).css("opacity", 1);
            });
        }


    });
    jQuery(window).resize(function() {

    });





    jQuery(document).on("click","a[href^='#']", function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop:  jQuery('div[id="'+this.hash.slice(1)+'"]').offset().top }, 1000 );

    });




    // navigation
    $('#projects, .slider').find('a').on('click', function (e) {
        e.preventDefault();
        var $self = $(this);
        var href = $self.attr('href');

        if (href == "#") {

        } else {

            $('body').animate({
                'opacity': 0
            }, 600, function () {
                document.location.href = href;
            });
        }
    });



});


window.onload = function(){
    jQuery('.blog-img').each(function () {
        this.onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = {index: link, event: event},
                links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        };
    });


};





