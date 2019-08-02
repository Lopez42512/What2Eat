$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // $.get("/api/user_data").then(function(data) {
  //   $(".member-name").text(data.email);
  //   console.log(data);

  // });
  $.ajax({
    url: "/user/recipe",
    method: "GET"
  }).then(function(DB) {
    console.log(DB);
    for (let i = 0; i < DB.length; i++) {
      var box = $("<div>");

      box.addClass("recipe");

      box.append(
        $("<p>").text("Name:" + " " + DB[i].name),
        $("<p>").text("Ingredient:" + " " + DB[i].ingredient),
        $("<p>").text("Recipe:" + " " + DB[i].recipe)
      );

      if (DB[i].image != null) {
        let img = new Image();

        let testToString = DB[i].image.toString().replace(/\s/g, "+");

        img.src = testToString;
        img.class = img;

        $(".row").append(img)
      }
      

    //   console.log(img);
      $(".row").append(box);
    }
  });

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    console.log(data);
  });
});
