(function ($) {
  "use strict";

  //Tooltip

  $(".tipped").tipper();

  jQuery(document).ready(function () {
    $(".show-after-load").removeClass("show-after-load");

    //Menu accordion

    var accordionsMenu = $(".cd-accordion-menu");

    if (accordionsMenu.length > 0) {
      accordionsMenu.each(function () {
        var accordion = $(this);
        //detect change in the input[type="checkbox"] value
        accordion.on("change", 'input[type="checkbox"]', function () {
          var checkbox = $(this);
          console.log(checkbox.prop("checked"));
          checkbox.prop("checked")
            ? checkbox
                .siblings("ul")
                .attr("style", "display:none;")
                .slideDown(300)
            : checkbox
                .siblings("ul")
                .attr("style", "display:block;")
                .slideUp(300);
        });
      });
    }

    /* Scroll Too */

    $(".scroll").click(function (event) {
      event.preventDefault();

      var full_url = this.href;
      var parts = full_url.split("#");
      var trgt = parts[1];
      var target_offset = $("#" + trgt).offset();
      var target_top = target_offset.top;

      $("html, body").animate({ scrollTop: target_top }, 1000);
    });

    /* Home Carousel */

    $("#owl-top").owlCarousel({
      navigation: true,
      pagination: false,
      autoPlay: 6000,
      slideSpeed: 500,
      paginationSpeed: 500,
      singleItem: true,
    });

    /* Portfolio Sorting */

    (function ($) {
      var container = $("#projects-grid");

      function getNumbColumns() {
        var winWidth = $(window).width(),
          columnNumb = 1;

        if (winWidth > 1500) {
          columnNumb = 4;
        } else if (winWidth > 1200) {
          columnNumb = 3;
        } else if (winWidth > 900) {
          columnNumb = 2;
        } else if (winWidth > 600) {
          columnNumb = 2;
        } else if (winWidth > 300) {
          columnNumb = 1;
        }

        return columnNumb;
      }

      function setColumnWidth() {
        var winWidth = $(window).width(),
          columnNumb = getNumbColumns(),
          postWidth = Math.floor(winWidth / columnNumb);
      }

      //   $("#portfolio-filter #filter a").click(function () {
      //     // var selector = $(this).attr("data-filter");;

      //     // $(this).parent().parent().find("a").removeClass("current");
      //     // $(this).addClass("current");

      //     // container.isotope({
      //     //   filter: selector,
      //     // });

      //     // container.isotope("reLayout");

      //     // setTimeout(function () {
      //     // reArrangeProjects();
      //     // }, 300);

      //     var selector = "*";

      //     $(this).parent().parent().find("a").removeClass("current");
      //     $(this).addClass("current");

      //     container.isotope({
      //       filter: selector,
      //     });

      //     container.isotope("reLayout");
      //     reArrangeProjects();

      //     selector = $(this).attr("data-filter");

      //     container.isotope({
      //       filter: selector,
      //     });

      //     container.isotope("reLayout");

      //     reArrangeProjects();

      //     return false;
      //   });

      $("#portfolio-filter #filter a").click(function () {
        // First, select the "All" filter and rearrange
        // setTimeout(function () {
        //   var selectorAll = "*";

        //   container.isotope({
        //     filter: selectorAll,
        //   });

        //   container.isotope("reLayout");
        //   reArrangeProjects();
        // }, 1000);

        // Wait for 1 second (1000 milliseconds) before applying the next filter

        var selector = $(this).attr("data-filter");
        $(this).parent().parent().find("a").removeClass("current");
        $(this).addClass("current");
        container.isotope({
          filter: selector,
        });

	
		setTimeout(function () {
			var selectorAll = $(this).attr("data-filter");
  
			container.isotope({
			  filter: selectorAll,
			});
  
			container.isotope("reLayout");
			reArrangeProjects();
		  }, 1000);
		
        // container.
        return false;
      });

      function reArrangeProjects() {
        setColumnWidth();
        container.isotope("reLayout");
      }

      container.imagesLoaded(function () {
        setColumnWidth();

        container.isotope({
          itemSelector: ".portfolio-box-1",
          layoutMode: "masonry",
          resizable: false,
        });
      });

      $(window).on("debouncedresize", function () {
        reArrangeProjects();
      });
    })(jQuery);
  });

  /* DebouncedResize Function */
  (function ($) {
    var $event = $.event,
      $special,
      resizeTimeout;

    $special = $event.special.debouncedresize = {
      setup: function () {
        $(this).on("resize", $special.handler);
      },
      teardown: function () {
        $(this).off("resize", $special.handler);
      },
      handler: function (event, execAsap) {
        var context = this,
          args = arguments,
          dispatch = function () {
            event.type = "debouncedresize";

            $event.dispatch.apply(context, args);
          };

        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }

        execAsap
          ? dispatch()
          : (resizeTimeout = setTimeout(dispatch, $special.threshold));
      },
      threshold: 150,
    };
  })(jQuery);
})(jQuery);

// (function ($) {
// 	"use strict";

// 	// Tooltip
// 	$(".tipped").tipper();

// 	jQuery(document).ready(function () {
// 	  // Existing code from File 1

// 	  // Menu accordion
// 	  var accordionsMenu = $('.cd-accordion-menu');

// 	  if (accordionsMenu.length > 0) {
// 		accordionsMenu.each(function () {
// 		  var accordion = $(this);
// 		  // detect change in the input[type="checkbox"] value
// 		  accordion.on('change', 'input[type="checkbox"]', function () {
// 			var checkbox = $(this);
// 			console.log(checkbox.prop('checked'));
// 			(checkbox.prop('checked')) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
// 		  });
// 		});
// 	  }

// 	  // Scroll Too
// 	  $(".scroll").click(function (event) {
// 		event.preventDefault();
// 		var full_url = this.href;
// 		var parts = full_url.split("#");
// 		var trgt = parts[1];
// 		var target_offset = $("#" + trgt).offset();
// 		var target_top = target_offset.top;
// 		$('html, body').animate({ scrollTop: target_top }, 1000);
// 	  });

// 	  // Home Carousel
// 	  $("#owl-top").owlCarousel({
// 		navigation: true,
// 		pagination: false,
// 		autoPlay: 6000,
// 		slideSpeed: 500,
// 		paginationSpeed: 500,
// 		singleItem: true
// 	  });

// 	  // Portfolio Sorting (Note: This function is self-contained)
// 	  (function ($) {
// 		var container = $('#projects-grid');

// 		function getNumbColumns() {
// 			var winWidth = $(window).width(),
// 				columnNumb = 1;

// 			if (winWidth > 1500) {
// 				columnNumb = 4;
// 			} else if (winWidth > 1200) {
// 				columnNumb = 3;
// 			} else if (winWidth > 900) {
// 				columnNumb = 2;
// 			} else if (winWidth > 600) {
// 				columnNumb = 2;
// 			} else if (winWidth > 300) {
// 				columnNumb = 1;
// 			}

// 			return columnNumb;

// 		}

// 		function setColumnWidth() {
// 			var winWidth = $(window).width(),
// 			columnNumb = getNumbColumns(),
// 			postWidth = Math.floor(winWidth / columnNumb);

// 		}

// 		$('#portfolio-filter #filter a').click(function () {
// 			var selector = $(this).attr('data-filter');

// 			$(this).parent().parent().find('a').removeClass('current');
// 			$(this).addClass('current');

// 			container.isotope( {
// 				filter : selector
// 			});

// 			setTimeout(function () {
// 				reArrangeProjects();
// 			}, 300);

// 			return false;
// 		});

// 		function reArrangeProjects() {setColumnWidth();
// 			container.isotope('reLayout');
// 		}

// 		container.imagesLoaded(function () {
// 			setColumnWidth();

// 			container.isotope( {
// 				itemSelector : '.portfolio-box-1',
// 				layoutMode : 'masonry',
// 				resizable : false
// 			} );
// 		});

// 		$(window).on('debouncedresize', function () {reArrangeProjects();
// 		});

// 	  })(jQuery);

// 	  // DebouncedResize Function
// 	  (function ($) {
// 		var $event = $.event,
// 		  $special,
// 		  resizeTimeout;

// 		$special = $event.special.debouncedresize = {
// 		  setup: function () {
// 			$(this).on('resize', $special.handler);
// 		  },
// 		  teardown: function () {
// 			$(this).off('resize', $special.handler);
// 		  },
// 		  handler: function (event, execAsap) {
// 			var context = this,
// 			  args = arguments,
// 			  dispatch = function () {
// 				event.type = 'debouncedresize';
// 				$event.dispatch.apply(context, args);
// 			  };

// 			if (resizeTimeout) {
// 			  clearTimeout(resizeTimeout);
// 			}

// 			execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
// 		  },
// 		  threshold: 150
// 		};
// 	  })(jQuery);

// 	});

//   })(jQuery);
