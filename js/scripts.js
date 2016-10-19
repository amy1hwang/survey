$(document).ready(function() {
  var cuisine = $("#cuisine").val();
  var movie = $("#movie").val();
  var music = $("input:radio[name=music]:checked").val();
  var favoriteColor = $("#color").val();
  $("button").click(function() {
    alert("your survey has been submitted!")
  });
});
