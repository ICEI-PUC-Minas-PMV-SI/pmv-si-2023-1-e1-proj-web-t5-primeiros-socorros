$(document).ready(function () {
    $('.collapse').on('shown.bs.collapse', function () {
      $(this).prev().find('.btn-link').addClass('active');
    });
  
    $('.collapse').on('hidden.bs.collapse', function () {
      $(this).prev().find('.btn-link').removeClass('active');
    });
  });
  