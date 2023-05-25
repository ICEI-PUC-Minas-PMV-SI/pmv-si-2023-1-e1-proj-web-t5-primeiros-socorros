$(document).ready(function () {
    $("#search-input").on("input", function () {
      var searchText = $(this).val().toLowerCase();
      $("#menu-options button").each(function () {
        var optionText = $(this).text().toLowerCase();
        var $option = $(this);
        
        if (optionText.includes(searchText)) {
          $option.show();
        } else {
          $option.hide();
        }
      });
    });
  
    $(".menu-button").click(function () {
      var target = $(this).data("target");
      var $targetDiv = $("#" + target);
      
      if ($targetDiv.is(":visible")) {
        $targetDiv.slideUp();
      } else {
        $(".sintomas-div").slideUp();
        $targetDiv.slideDown();
      }
    });
  
    $(".close-button").click(function () {
      var target = $(this).data("target");
      $("#" + target).slideUp();
    });
  });

  function sortMenuOptions() {
    var menuOptions = $("#menu-options button").get();
    menuOptions.sort(function (a, b) {
      var textA = $(a).text().toUpperCase();
      var textB = $(b).text().toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    $("#menu-options").empty().append(menuOptions);
  }
  
  sortMenuOptions();
  