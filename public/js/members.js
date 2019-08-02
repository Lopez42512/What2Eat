function previewFile() {
  var preview = document.querySelector("img"); //selects the query named img
  var file = document.querySelector("input[type=file]").files[0]; //sames as here
  var reader = new FileReader();

  reader.onloadend = function() {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    preview.src = "";
  }
}
  previewFile(); //calls the function named previewFile()
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    console.log(data);

    $("#recipe").click(function(){

      console.log(data)
      $.get("/user/recipe", data).then(function(){
        console.log(data)
        window.location.replace("/recipe");
      })
      
    })

    $("#button").click(function() {

      var imgSrc = $("img").attr("src");

      var recipe = {
        name: $("#name").val(),
        ingredient: $("#ingredient").val(),
        recipe: $("#detail").val(),
        memberId: data.id,
        image: imgSrc
      };

      console.log(recipe)

      $.post("/api/new", recipe)
        .then(function() {
          console.log("success");
        })
        .then(function() {
          $("#name").val(""), $("#ingredient").val(""), $("#detail").val("");
        });
    });
  });
});
