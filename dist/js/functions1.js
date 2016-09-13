
jQuery(document).ready(function() {


    var $container = $('.project-list');
    var $portfolioItems = $container.children();

    // $portfolioItems.css({
    //     'transition': 'none !important'
    // });



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

        $container.masonry({
            itemSelector: '.item-project',
            resizeable: true

        });



        jQuery('.slider').bxSlider({
               auto: true,
               speed: 1000
            //adaptiveHeight: true
        });




        // Create a map object and specify the DOM element for display.
        var map2 = new google.maps.Map(document.getElementById('footer-map'), {
            center: {lat:50.461539, lng: 30.5073035},
            scrollwheel: false,
            zoom: 16
        });
        var marker = new google.maps.Marker({
            position: {lat:50.461539, lng: 30.5073035},
            map: map2
            //title: 'Hello World!'
        });


        jQuery("#map-wrapper").on("click", function(){

            jQuery(this).remove();

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

    // portfolioItems
    jQuery(".project-nav li").click(function(){
        var nav_active = jQuery(this);
        //console.log(nav_active);
        jQuery('.project-nav li').each(function(){
            jQuery(this).removeClass("active");
        });
        jQuery(nav_active).addClass("active");
        var customType = jQuery(this).attr('data-cat');

        if(customType==="all") {
            jQuery('.item-project').find('a').removeClass('noshow');
            return;
        }
        if(customType==='predmetnyy-dizayn'){
            jQuery('.item-project').each(function() {
                if (jQuery(this).attr('data-cat').indexOf(customType) < 0) {
                    jQuery(this).detach();
                }
                else jQuery(this).find('a').removeClass('noshow');
            });
        } else{

            $portfolioItems.each(function(){

                $(this).appendTo($container);
                if($(this).attr('data-cat').indexOf(customType) < 0) $(this).find('a').addClass('noshow');
                else $(this).find('a').removeClass('noshow');

            });
        }

        $container
            .trigger('resize')
            .masonry( 'reloadItems' )
            .masonry( 'layout');
     

    });






    jQuery('#menu.main, #menu-mobile.main,.home .logo').find('a').on("click", function (event) {
        event.preventDefault();
        var $self = $(this);
        jQuery('html, body').animate({ scrollTop:  jQuery('div[id="'+this.hash.slice(1)+'"]').offset().top }, 1000, function () {
            location.hash = $self.attr('href')

        } );



    });


    /*jQuery(document).on('scroll', function () {
        //location.hash = $self.attr('href')
    });
    $(window).on('activate.bs.scrollspy', function(e) {
        var $hash, $node;
        $hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
        $node = $('#' + $hash);
        if ($node.length) {
            $node.attr('id', '');
        }
        document.location.hash = $hash;
        if ($node.length) {
            return $node.attr('id', $hash);
        }
    });*/




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




    jQuery(document).ready(function() {
        jQuery('#fullpage').fullpage({
            sectionSelector: '.section',
            autoScrolling: false,
            scrollOverflow: true,
			scrollingSpeed: 500,
			fitToSectionDelay: 300
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

    if ($.browser.safari && !$.browser.mobile && $.browser.version==7) $('body').addClass('client-safari');
    if ($.browser.name == 'mozilla') $('body').addClass('client-moz');

};


(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], function ($) {
            return factory($);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        // Node-like environment
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function(jQuery) {
    "use strict";

    function uaMatch( ua ) {
        // If an UA is not provided, default to the current browser UA.
        if ( ua === undefined ) {
            ua = window.navigator.userAgent;
        }
        ua = ua.toLowerCase();

        var match = /(edge)\/([\w.]+)/.exec( ua ) ||
            /(opr)[\/]([\w.]+)/.exec( ua ) ||
            /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
            /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        var platform_match = /(ipad)/.exec( ua ) ||
            /(ipod)/.exec( ua ) ||
            /(windows phone)/.exec( ua ) ||
            /(iphone)/.exec( ua ) ||
            /(kindle)/.exec( ua ) ||
            /(silk)/.exec( ua ) ||
            /(android)/.exec( ua ) ||
            /(win)/.exec( ua ) ||
            /(mac)/.exec( ua ) ||
            /(linux)/.exec( ua ) ||
            /(cros)/.exec( ua ) ||
            /(playbook)/.exec( ua ) ||
            /(bb)/.exec( ua ) ||
            /(blackberry)/.exec( ua ) ||
            [];

        var browser = {},
            matched = {
                browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
                version: match[ 2 ] || match[ 4 ] || "0",
                versionNumber: match[ 4 ] || match[ 2 ] || "0",
                platform: platform_match[ 0 ] || ""
            };

        if ( matched.browser ) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
            browser.versionNumber = parseInt(matched.versionNumber, 10);
        }

        if ( matched.platform ) {
            browser[ matched.platform ] = true;
        }

        // These are all considered mobile platforms, meaning they run a mobile browser
        if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
            browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
            browser.mobile = true;
        }

        // These are all considered desktop platforms, meaning they run a desktop browser
        if ( browser.cros || browser.mac || browser.linux || browser.win ) {
            browser.desktop = true;
        }

        // Chrome, Opera 15+ and Safari are webkit based browsers
        if ( browser.chrome || browser.opr || browser.safari ) {
            browser.webkit = true;
        }

        // IE11 has a new token so we will assign it msie to avoid breaking changes
        if ( browser.rv || browser.iemobile) {
            var ie = "msie";

            matched.browser = ie;
            browser[ie] = true;
        }

        // Edge is officially known as Microsoft Edge, so rewrite the key to match
        if ( browser.edge ) {
            delete browser.edge;
            var msedge = "msedge";

            matched.browser = msedge;
            browser[msedge] = true;
        }

        // Blackberry browsers are marked as Safari on BlackBerry
        if ( browser.safari && browser.blackberry ) {
            var blackberry = "blackberry";

            matched.browser = blackberry;
            browser[blackberry] = true;
        }

        // Playbook browsers are marked as Safari on Playbook
        if ( browser.safari && browser.playbook ) {
            var playbook = "playbook";

            matched.browser = playbook;
            browser[playbook] = true;
        }

        // BB10 is a newer OS version of BlackBerry
        if ( browser.bb ) {
            var bb = "blackberry";

            matched.browser = bb;
            browser[bb] = true;
        }

        // Opera 15+ are identified as opr
        if ( browser.opr ) {
            var opera = "opera";

            matched.browser = opera;
            browser[opera] = true;
        }

        // Stock Android browsers are marked as Safari on Android.
        if ( browser.safari && browser.android ) {
            var android = "android";

            matched.browser = android;
            browser[android] = true;
        }

        // Kindle browsers are marked as Safari on Kindle
        if ( browser.safari && browser.kindle ) {
            var kindle = "kindle";

            matched.browser = kindle;
            browser[kindle] = true;
        }

        // Kindle Silk browsers are marked as Safari on Kindle
        if ( browser.safari && browser.silk ) {
            var silk = "silk";

            matched.browser = silk;
            browser[silk] = true;
        }

        // Assign the name and platform variable
        browser.name = matched.browser;
        browser.platform = matched.platform;
        return browser;
    }

    // Run the matching process, also assign the function to the returned object
    // for manual, jQuery-free use if desired
    window.jQBrowser = uaMatch( window.navigator.userAgent );
    window.jQBrowser.uaMatch = uaMatch;

    // Only assign to jQuery.browser if jQuery is loaded
    if ( jQuery ) {
        jQuery.browser = window.jQBrowser;
    }

    return window.jQBrowser;
}));




