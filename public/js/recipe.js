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

      if (DB[i].image === null || DB[i].image == "") {
        var noPicBox = $("<button>");
        // noPicBox = DB[i].id

        noPicBox.addClass("recipe");

        // $("button").attr('data-ingredient', DB[i].ingredient)
        // $("button").attr('data-recipe', DB[i].recipe)

        noPicBox.append(
          $("<p>").text("Name:" + " " + DB[i].name),
          $("<p>").text("Ingredient:" + " " + DB[i].ingredient),
          $("<p>").text("Recipe:" + " " + DB[i].recipe),

        );

        $(".row").append(noPicBox);
      } else {
        var picBox = $("<button>");

        picBox.addClass("picRecipe");

        let img = new Image();

        let testToString = DB[i].image.toString().replace(/\s/g, "+");

        img.src = testToString;
        img.class = img;

        // $("button").attr('data-name', DB[i].name)
        // $("button").attr('data-ingredient', DB[i].ingredient)
        // $("button").attr('data-recipe', DB[i].recipe)
        // $("button").attr('data-image', DB[i].image)

        picBox.append(
          $("<p>").text("Name:" + " " + DB[i].name),
          $("<p>").text("Ingredient:" + " " + DB[i].ingredient),
          $("<p>").text("Recipe:" + " " + DB[i].recipe)
        );

        picBox.append(img);

        $(".row").append(picBox);
      }

      $("button").attr('data-id', DB[i].id)

    }

    $("button").click(function(){
        // console.log($("button").attr('data-name'))
        // console.log($("button").attr('data-ingredient'))
        // console.log($("button").attr('data-recipe'))
        // console.log($("button").attr('data-image'))
        console.log(this)
        // console.log(DB)
        console.log("hello")
    })
  });

  

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    console.log(data);
  });
});
