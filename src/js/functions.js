jQuery(document).ready(function() {

    jQuery('.slider').bxSlider();

    jQuery(window).load(function() {
        gutter_in_pixels = jQuery(".item-project").width() * 0.02;
        jQuery('.project-list').masonry({
            // options
            itemSelector: '.item-project',
            resizeable: true,
            gutter: gutter_in_pixels
        });


        //filter project




    });

    var posts = jQuery('.item-project');
    jQuery(".project-nav li" ).click(  function() {

        var nav_active = jQuery(this);
        console.log(nav_active);
        jQuery('.project-nav li').each(function(){
            jQuery(this).removeClass("active");
        });
        jQuery(nav_active).addClass("active");

        var customType = jQuery(this).data('filter'); // category

        posts
            .css("opacity", 0.7)
            .filter(function () {
                return jQuery(this).data('cat') === customType;
            })
            .css("opacity", 1);



    });




    /*jQuery(window).scroll(function () {

        if ((jQuery(this).scrollTop() > 10) && (jQuery(window).width() > 1199)) {
            jQuery("#header").addClass('fixed');


        } else {
            jQuery("#header").removeClass('fixed');

        }
    });*/


    jQuery("#menu").on("click","a[href^='#']", function (event) {
        event.preventDefault();
        //var id  = jQuery(this).attr('href'), top = jQuery(id).offset().top;
        jQuery('html, body').animate({ scrollTop:  jQuery('div[id="'+this.hash.slice(1)+'"]').offset().top }, 1000 );

        //jQuery('body,html').animate({scrollTop: top}, 1500);
    });


});





