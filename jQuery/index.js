// jQuery("h1").css("color", "red");
$("h1").addClass("big-title");

$("body").keydown(function(event){
  console.log(event);
  $("h1").text(event.key);
});

$("button").click(function(){
  $("h1").fadeToggle().slideToggle();
});