/** custom js **/

(function ($) {
  "use strict";

  /**== loader js ==**/

  $("body").prepend('<div id="preloader"><div id="status"> </div></div>');
  $(window).on("load", function () {
    // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader")
      .delay(250)
      .fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body")
      .delay(250)
      .css({
        overflow: "visible"
      });
  });

  /*header background color on scroll*/

  var $mainHeader = $("#header.home_page_header");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $mainHeader.css("background-color", "#252525");
    } else {
      $mainHeader.css("background-color", "transparent");
    }
  });

  /**== text animation on top ==**/

  var ml4 = {};
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  anime
    .timeline({
      loop: true
    })
    .add({
      targets: ".stylis_heading_style1 .letters-1",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn
    })
    .add({
      targets: ".stylis_heading_style1 .letters-1",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay
    })
    .add({
      targets: ".stylis_heading_style1 .letters-2",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn
    })
    .add({
      targets: ".stylis_heading_style1 .letters-2",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay
    })
    .add({
      targets: ".stylis_heading_style1 .letters-3",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn
    })
    .add({
      targets: ".stylis_heading_style1 .letters-3",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay
    })
    .add({
      targets: ".stylis_heading_style1",
      opacity: 0,
      duration: 100,
      delay: 100
    });

  /**== change div form and map js ==**/

  $("#map_show").on("click", function () {
    if ($("#form").css("display") != "none") {
      $("#map")
        .show()
        .siblings("div")
        .hide();
    }
  });

  $("#form_show").on("click", function () {
    if ($("#map").css("display") != "none") {
      $("#form")
        .show()
        .siblings("div")
        .hide();
    }
  });

  /**== menu ==**/
  $("#overlayMenu").fadeOut(0);
  $(document).ready(function () {
    $(".toggle-btn").click(function () {
      $("#overlayMenu").fadeToggle(200);
      $(".toggle-btn").toggleClass("btn_active");
      $("html").toggleClass("overflow_hidden");
    });
  });

  // product detail quantity change

  (function () {
    var qntyBox = $(".qnty_box");

    qntyBox.each(function (i, elm) {
      var numInputAry = $(elm).find(".input-number");
      var numInput = $(elm).find(".input-number")[0];
      var btnInc = $(elm).find(".input-number-increment");
      var btnDec = $(elm).find(".input-number-decrement");

      productQntyChange(numInputAry, numInput, btnInc, btnDec);
    });

    function productQntyChange(numInputAry, numInput, btnInc, btnDec) {
      var numInputAry = numInputAry;
      var numInput = numInput;
      var btnInc = btnInc;
      var btnDec = btnDec;

      var min = numInputAry.attr("min");
      var max = numInputAry.attr("max");

      btnDec.on("click ", decrement);
      btnInc.on("click ", increament);

      function decrement() {
        var numInputvalue = numInput.value;
        numInputvalue--;
        if (numInputvalue >= min) {
          numInput.value--;
        }
      }

      function increament() {
        var numInputvalue = numInput.value;
        numInputvalue++;
        if (numInputvalue <= max) {
          numInput.value++;
        }
      }
    }
  })();
})(jQuery);
// nice select
$("select").niceSelect();
/**== google map ==**/

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 11,
    styles: [{
        elementType: "geometry",
        stylers: [{
          color: "#fefefe"
        }]
      },
      {
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#616161"
        }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#f5f5f5"
        }]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#bdbdbd"
        }]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          color: "#eeeeee"
        }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#073a0a"
        }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
          color: "#abe5ad"
        }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9e9e9e"
        }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#eee"
        }]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#3d3523"
        }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: "#119c17"
        }]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#616161"
        }]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9e9e9e"
        }]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{
          color: "#e5e5e5"
        }]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{
          color: "#000"
        }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#073a0a"
        }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#fff"
        }]
      }
    ]
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);
}