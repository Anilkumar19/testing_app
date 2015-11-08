// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){
    $('#myTable').DataTable();
    $('#sort-order').change(function (event) {
     var sortOrder = $(event.target).val();
     if (sortOrder == 'Order By Category Name ASC') {
     	$('#category-name').click();
     }else if (sortOrder == 'Order By Username Asc') {
     	$('#username').click();
     } else if (sortOrder == 'Order By Project Title Asc') {
     	$('#title').click();
     }
    });
});


