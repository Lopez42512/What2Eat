$(document).ready(function() {
  var appId = "c063a632";
  var appKey = "8320ace8b466346b6bc6fb974890d892";
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // $.get("/api/user_data").then(function(data) {
  //   $(".member-name").text(data.email);
  //   console.log(data);
  

  $("#search").click(function() {
    event.preventDefault();
    $(".row").empty();
    var food = $("#food").val();
    $.ajax({
      url:
        "https://api.edamam.com/search?q=" +
        food +
        "&app_id=" +
        appId +
        "&app_key=" +
        appKey +
        "&from=0&to=10",
      method: "GET"
    }).then(function(DB) {
      console.log(DB.hits);
      for (let i = 0; i < DB.hits.length; i++) {
        var picBox = $("<button>");

        picBox.addClass("picRecipe");

        let img = new Image();

        let testToString = DB.hits[i].recipe.image
          .toString()
          .replace(/\s/g, "+");

        img.src = testToString;
        img.class = img;

        //   var ingredient = for(let i = 0; i )

        picBox.append(
          $("<p>").text(DB.hits[i].recipe.label),
          $("<h6>").text(i)

          // $("<p>").text("Ingredients:" + " " + DB.hits[i].recipe.ingredientLines.map()),
          //   $("<button>").text("Pick")
        );

        picBox.append(img);

        $(".row").append(picBox);
        $("button").attr("data-id", [i]);
      }
      $("button").click(function() {
        console.log(this.children[1].innerText);

        var buttonSpot = this.children[1].innerText;

        console.log(DB.hits[buttonSpot]);

        $(".row").empty();

        var selectRecipe = $("<button>");

        selectRecipe.addClass("selectRecipe")

        let img = new Image();

        let testToString = DB.hits[buttonSpot].recipe.image
          .toString()
          .replace(/\s/g, "+");

        img.src = testToString;

        // img.addClass("selectImg");

        selectRecipe.append(
            img,
            $("<p>").text(DB.hits[buttonSpot].recipe.label),
            $("<p>").text(DB.hits[buttonSpot].recipe.ingredientLines)
            
        )
        $(".row").append(selectRecipe);

      });
    });
  });
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
          $("<h6>").text(i)
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
          $("<h6>").text(i)
        );

        picBox.append(img);

        $(".row").append(picBox);
      }
    }

    $("button").click(function() {
        console.log(this.children[1].innerText);
        var buttonSpot = this.children[1].innerText;
        console.log(DB[buttonSpot]);
      });
  });

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    console.log(data);
  });
});
