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

        var posts = jQuery('.item-project');
        jQuery( ".project_nav li" ).click(function() {

            var customType = jQuery(this).data('filter'); // category
            console.log(customType);
            posts
             .css("opacity", 0.5)
             .filter(function () {
             return jQuery(this).data('cat') === customType;
             })
             .css("opacity", 1);
            //jQuery(window).trigger('resize');

    });



    jQuery(window).resize(function() {





        });

    });

});





