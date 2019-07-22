console.log("hello");

$("#button").click(function() {
  var recipe = {
    name: $("#name").val(),
    ingredient: $("#ingredient").val(),
    recipe: $("#recipe").val()
  };
  $.post("/api/new", recipe).then(function() {
    console.log("success");

  }).then(function(){
    $("#name").val(""),
    $("#ingredient").val(""),
    $("#recipe").val("")
  });
});
