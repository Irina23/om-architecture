jQuery(document).ready(function() {



    jQuery(function() {
        jQuery("img.lazy").lazyload();
    });

    jQuery(window).load(function() {
        jQuery('#preloader').fadeOut('slow',function(){
            if (location.hash) {
                //console.log(location.hash)
            //    TODO
                jQuery('html, body').animate({ scrollTop:  jQuery(location.hash).offset().top - 52 }, 1000);
            }
            jQuery(this).remove();
        });
        //gutter_in_pixels = jQuery(".item-project").width() * 0.02;
        jQuery('.project-list').masonry({
            // options
            itemSelector: '.item-project',
            resizeable: true
            //gutter: gutter_in_pixels
        });
        jQuery('.slider').bxSlider({
            //auto: true
            //adaptiveHeight: true
        });




        // Create a map object and specify the DOM element for display.
        var map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat:50.461539, lng: 30.5073035},
            scrollwheel: false,
            zoom: 16
        });
        var marker = new google.maps.Marker({
            position: {lat:50.461539, lng: 30.5073035},
            map: map2
            //title: 'Hello World!'
        });


        jQuery(".navbar-toggle").on("click", function(){
            jQuery(".mobile-navbar-holder").slideToggle();
            jQuery(this).toggleClass("active");
            jQuery(".mobile-navbar").toggleClass("active");
            jQuery("#header").toggleClass("active");
        });

        $(window).trigger('resize');

    });

    jQuery(".mobile-navbar a").on("click", function(){

        if (jQuery(window).width() <= 959) {
            jQuery(".mobile-navbar-holder").slideToggle();
            jQuery(".navbar-toggle").toggleClass("active");
            jQuery(".mobile-navbar").toggleClass("active");
            jQuery("#header").toggleClass("active");
        }


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





    jQuery('#menu.main, #menu-mobile.main').find('a').on("click", function (event) {
        event.preventDefault();
        var $self = $(this);
        jQuery('html, body').animate({ scrollTop:  jQuery('div[id="'+this.hash.slice(1)+'"]').offset().top }, 1000, function () {
            location.hash = $self.attr('href')
        } );
        //var id  = jQuery(this).attr('href'), top = jQuery(id).height();
        //jQuery('body,html').animate({scrollTop: top}, 1000);

    });




    // navigation
    jQuery('#projects, .slider').find('a').on('click', function (e) {
        e.preventDefault();
        var $self = jQuery(this);
        var href = $self.attr('href');

        if (href == "#") {

        } else {

            jQuery('body').animate({
                'opacity': 0
            }, 600, function () {
                document.location.href = href;
            });
        }
    });
    jQuery('.close-modal').on('click', function (e) {
        e.preventDefault();

        jQuery('body').animate({
                'opacity': 0
            }, 600, function () {
                document.location.href = "index.html";
        });

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





