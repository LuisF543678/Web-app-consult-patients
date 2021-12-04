var $mainNavSearchBtn = $('#main-nav-search-btn');
var $searchModal = $('#search-modal');
var $searchCloseBtn = $('#search-close-btn');
var $content = $('.content');
var $modalSearchField = $('#modal-search-field');
var $searchTags = $('.search-tag');

$mainNavSearchBtn.on('click', function() {
  $searchModal.addClass('active');
  $content.css('transform', 'scale(.7)');
  $modalSearchField[0].focus();
});

$searchCloseBtn.on('click', function() {
  $content.css('transform', 'scale(1)');
  $searchModal.removeClass('active');
  $modalSearchField.val('');
});

$searchTags.on('click', function() {
  $modalSearchField.val($(this).text());
});