$(document).ready(function() {

  $('li.content0').hide();
  $('ul.toggle-menu').delegate('li.toggle', 'click', function () {
        $(this).next().toggle('fast').siblings('.content0').hide('fast');
    });

  $("#pageHr,#pageHrBorder,.middle").click(function() {
        $.scrollTo($(".pagetop"), { duration: 1500});
    });

    var flag=0;
    $('#page #zoom').click(function() {
        $('#painting').off();
            flag=flag+1;
            if(flag%2 == 0)
              $('#painting').off();
            else
              $('#painting').imageLens({ lensSize: 150 });
    });

  $('#page #full').click(function() {
      $('#painting').fullScreen(true);
    });

  $("#painting").click(function() {
        $.scrollTo($("#interpret"), { duration: 1500});
        $('#interpret').css('margin-left','30px');
    });

  $('#login').hide();
  $('#toggle-login').click(function(){
    $('#login').toggle();
    });

});