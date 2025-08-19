$(document).ready(function () {
    var firstTabPath = $('.tab.active').data('tab');
    $('#tab-content').load(firstTabPath);
});

$('.tab').click(function() {
    var tabPath = $(this).data('tab');
    $('#tab-content').load(tabPath);
});
