(function () {
  $(window).load(function () {
    "use strict";

    $('body').vidbg({
      mp4: 'video/civil-services-bg-loop.mp4',
      webm: 'video/civil-services-bg-loop.webm',
      poster: 'video/civil-services-bg.jpg'
    }, {
      muted: true,
      loop: true,
      overlay: false
    });

    setTimeout(function () {
      $('#preloader').velocity({
        opacity: "0",
        complete: function () {
          $("#loading").velocity("fadeOut", {
            duration: 1000,
            easing: [ 0.7, 0, 0.3, 1 ],
          });
        }
      });

      if($('video').length){
        $('video').attr('webkit-playsinline', '');
      }
    }, 10);

    setTimeout(function () {
      $('.global-overlay').velocity({
        translateX: "100%",
        opacity: "1",
      },
      {
        duration: 1000,
        easing: [ 0.7, 0, 0.3, 1 ]
      });
      $(".map-container").addClass("fadeInRight").removeClass('opacity-0');
    }, 10);

    setTimeout(function () {
      $('#left-side').velocity({
        opacity: "1",
        complete: function () {
          setTimeout(function () {
            $('.text-intro').each(function (i) {
              (function (self) {
                setTimeout(function () {
                  $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                }, (i * 150) + 150);
              })(this);
            });
          }, 0);
        }
      },
      {
        duration: 1000,
        easing: [ 0.7, 0, 0.3, 1 ],
      });
    }, 100);
  });

  $(document).ready(function () {
    "use strict";

    $('#open-more-info').on("click", function () {
      $(".overlay").toggleClass("skew-part");
      $("#right-side").toggleClass("hide-right");
      $("#close-more-info").toggleClass("hide-close");
      $('.mCSB_scrollTools').toggleClass('mCSB_scrollTools-left');

      setTimeout(function () {
        $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side", {
          scrollInertia: 500,
          callbacks: false
        });
      }, 350);
    });

    $('#close-more-info').on("click", function () {
      $(".overlay").addClass("skew-part");
      $("#right-side").addClass("hide-right");
      $("#close-more-info").addClass("hide-close");
      $('.mCSB_scrollTools').removeClass('mCSB_scrollTools-left');

      setTimeout(function () {
        $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side", {
          scrollInertia: 500,
          callbacks: false
        });
      }, 350);
    });

    $(function () {
      $('body').bind('mousewheel', function (event) {
        event.preventDefault();
        var scrollTop = this.scrollTop;
        this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
      });
    });

    var ifTouchDevices = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

    function scrollbar () {
      if (ifTouchDevices) {
        $('body').addClass('scroll-touch');

        $('#open-more-info').on("click", function () {
          event.preventDefault();
          var target = "#" + this.getAttribute('data-target');
          $('body').animate({
            scrollTop: $(target).offset().top
          }, 500);
        });
      }
      else {
        $('body').mCustomScrollbar({
          scrollInertia: 150,
          axis: "y"
        });
      }
    }

    scrollbar();

    if (window.matchMedia("(min-width: 1025px)").matches) {
      $(function () { $("[data-toggle='tooltip']").tooltip(); });
    }

    $("#notifyMe").notifyMe();

    var dlgtrigger = document.querySelector('[data-dialog]');
    var somedialog = document.getElementById(dlgtrigger.getAttribute('data-dialog'));
    var dlg = new DialogFx(somedialog);

    dlgtrigger.addEventListener('click', dlg.toggle.bind(dlg));
  });
})();
