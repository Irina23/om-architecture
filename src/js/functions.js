jQuery(document).ready(function() {

    jQuery(document).on('scroll', function () {
        if (jQuery(this).scrollTop() > 10) {
            jQuery(".social").addClass("show");
            jQuery(".top").addClass("fixed");


        } else {
            jQuery(".social").removeClass("show");
            jQuery(".top").removeClass("fixed");

        }
    });
    jQuery('.top .wrap').prepend('<div id="menu-icon"></div>');
    jQuery(document).ready(function() {
        if (jQuery(window).width() >= 2000) {
            jQuery("#map #info_map").each(function() {
                var distance = (jQuery(window).width() - 1920)/2;
                jQuery(this).css('left', distance);
            });
        }else if ((jQuery(window).width() < 2000) && (jQuery(window).width() > 1100)) {
            jQuery("#map #info_map").each(function() {
                var distance = (jQuery(window).width() - 1080)/2;
                jQuery(this).css('left', distance);
            });
        }
        else if((jQuery(window).width() <= 1100) && (jQuery(window).width() > 959)) {
            jQuery("#map #info_map").each(function() {
                var distance = (jQuery(window).width() - 880)/2;
                jQuery(this).css('left', distance);
            });
        }

        else {
            jQuery("#map #info_map").each(function() {
                jQuery(this).css('left', 0);
            });
        }

        jQuery("#menu-icon").on("click", function(){
            jQuery("#menu").slideToggle();
            jQuery("#menu").toggleClass("active");
            jQuery(".top .wrap").toggleClass("active");

        });

        jQuery("#menu a, .logo a").on("click", function(){

            jQuery("#menu").slideToggle();
            jQuery("#menu").toggleClass("active");
            jQuery(".top .wrap").toggleClass("active");

        });


    });



    jQuery(document).ready(function() {
        jQuery(window).resize(function() {
            if (jQuery(window).width() > 959) {
                jQuery("#menu").css('display','block');
            } else {
                jQuery("#menu").css('display','none');
            }
            if (jQuery(window).width() >= 2000) {
                jQuery("#map #info_map").each(function() {
                    var distance = (jQuery(window).width() - 1920)/2;
                    jQuery(this).css('left', distance);
                });
            }else if ((jQuery(window).width() < 2000) && (jQuery(window).width() > 1100)) {
                jQuery("#map #info_map").each(function() {
                    var distance = (jQuery(window).width() - 1080)/2;
                    jQuery(this).css('left', distance);
                });
            }
            else if ((jQuery(window).width() <= 1100) && (jQuery(window).width() > 959)) {
                jQuery("#map #info_map").each(function() {
                    var distance = (jQuery(window).width() - 880)/2;
                    jQuery(this).css('left', distance);
                });
            }

            else {
                jQuery("#map #info_map").each(function() {
                    jQuery(this).css('left', 0);
                });
            }



        });
    });



    jQuery(".about_list li .content_about").on("click", function(){
        jQuery(this).closest("li").find(".mask").css("opacity",1);
        jQuery(this).closest("li").addClass("open");


    });


    jQuery(".about_list li .close").on("click", function(){
        jQuery(this).closest("li").find(".mask").css("opacity",0);
        jQuery(this).closest("li").removeClass("open");


    });

    jQuery(".process_list_mobile  .process,.process_list_mobile2  .process").on("click", function(){
        jQuery("#mod_process .mask").each( function(  ) {
            jQuery(this).hide();
        });

        var mask_show=jQuery(this);
        jQuery(mask_show).next(".mask").show();

        jQuery(this).closest("#mod_process").addClass("open");


    });


    jQuery(".process_list_mobile .close, .process_list_mobile2 .close").on("click", function(){
        jQuery(this).closest(".mask").hide();
        jQuery(this).closest("#mod_process").removeClass("open");


    });




    var timeout = 1,
        counters = jQuery('.number');
    counters.each(function(){
        var that = jQuery(this),
            num = that.html();
        that.html(0);
        that.attr('data-num',num);
    });

    jQuery(document).ready(function() {
        jQuery('.home #fullpage').fullpage({
            menu: '.nav',
            anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
            sectionSelector: '.section',
            slideSelector: '.slide',
            slidesNavigation: true,
            scrollOverflow: true,
            resize : true,
            responsiveWidth: 0,
            responsiveHeight: 0,
            //'css3': true,
            afterLoad: function(anchorLink, index){
                if (index != 1) {
                    jQuery(".social").addClass("show");
                    jQuery(".top").addClass("fixed");


                } else {
                    jQuery(".social").removeClass("show");
                    jQuery(".top").removeClass("fixed");

                }



                if(index == 5){
                    counters.each(function(){
                        var that = jQuery(this);
                        that.attr('data-start', true);
                        if (that.data('interval')) {
                            clearInterval(that.data('interval'));
                        }
                        var i = 1,
                            num = that.data('num'),
                            step = Math.round(1000 * timeout / num),
                            int = setInterval(function(){
                                if (i <= num) {
                                    that.html(i);
                                }
                                else {
                                    clearInterval(int);
                                }
                                i++;
                            },step);
                        that.data('interval', int);
                    });
                } else {
                    counters.each(function(){
                        var that = jQuery(this);
                        if (that.data('interval')) {
                            clearInterval(that.data('interval'));
                        }
                        var i = 0;
                        that.html(i);
                    });
                }




                if(index == 6){
                    setTimeout(function () {
                        jQuery(".process1").addClass('animated zoomIn');
                        jQuery(".process1").css("display", "inline-block");

                    }, 0);
                    setTimeout(function () {
                        jQuery(".process1 .bg_process").addClass('animated fadeIn');
                        jQuery(".process1 .bg_process").css("opacity", 1);

                    }, 150);
                    setTimeout(function () {
                        jQuery(".process2").addClass('animated zoomIn');
                        jQuery(".process2").css("display", "inline-block");

                    }, 300);
                    setTimeout(function () {
                        jQuery(".process2 .bg_process").addClass('animated fadeIn');
                        jQuery(".process2 .bg_process").css("opacity", 1);

                    }, 450);
                    setTimeout(function () {
                        jQuery(".process3").addClass('animated zoomIn');
                        jQuery(".process3").css("display", "inline-block");

                    }, 600);
                    setTimeout(function () {
                        jQuery(".process3 .bg_process").addClass('animated fadeIn');
                        jQuery(".process3 .bg_process").css("opacity", 1);

                    }, 750);
                    setTimeout(function () {
                        jQuery(".process4").addClass('animated zoomIn');
                        jQuery(".process4").css("display", "inline-block");

                    }, 900);
                    setTimeout(function () {
                        jQuery(".process4 .bg_process").addClass('animated fadeIn');
                        jQuery(".process4 .bg_process").css("opacity", 1);

                    }, 1050);
                    setTimeout(function () {
                        jQuery(".process5").addClass('animated zoomIn');
                        jQuery(".process5").css("display", "inline-block");

                    }, 1150);
                    setTimeout(function () {
                        jQuery(".process5 .bg_process").addClass('animated fadeIn');
                        jQuery(".process5 .bg_process").css("opacity", 1);

                    }, 1300);
                    setTimeout(function () {
                        jQuery(".process6").addClass('animated zoomIn');
                        jQuery(".process6").css("display", "inline-block");

                    }, 1450);
                    setTimeout(function () {
                        jQuery(".process6 .bg_process").addClass('animated fadeIn');
                        jQuery(".process6 .bg_process").css("opacity", 1);

                    }, 1600);
                    setTimeout(function () {
                        jQuery(".process7").addClass('animated zoomIn');
                        jQuery(".process7").css("display", "inline-block");

                    }, 1750);
                    setTimeout(function () {
                        jQuery(".process7 .bg_process").addClass('animated fadeIn');
                        jQuery(".process7 .bg_process").css("opacity", 1);

                    }, 1900);
                    setTimeout(function () {
                        jQuery(".process8").addClass('animated zoomIn');
                        jQuery(".process8").css("display", "inline-block");

                    }, 2050);
                    setTimeout(function () {
                        jQuery(".process8 .bg_process").addClass('animated fadeIn');
                        jQuery(".process8 .bg_process").css("opacity", 1);

                    }, 2200);
                    setTimeout(function () {
                        jQuery(".process9").addClass('animated zoomIn');
                        jQuery(".process9").css("display", "inline-block");

                    }, 2350);
                }


            }



        });
    });



            jQuery('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = jQuery(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        jQuery('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });


});





