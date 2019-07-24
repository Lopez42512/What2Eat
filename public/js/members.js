$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    console.log(data);

    $("#button").click(function() {
      var recipe = {
        name: $("#name").val(),
        ingredient: $("#ingredient").val(),
        recipe: $("#recipe").val(),
        memberId: data.id
      };

      console.log(recipe)

      $.post("/api/new", recipe)
        .then(function() {
          console.log("success");
        })
        .then(function() {
          $("#name").val(""), $("#ingredient").val(""), $("#recipe").val("");
        });
    });
  });
});
