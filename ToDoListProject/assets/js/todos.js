// Check Off Specific Todos By Clicking
// use on to add eventListener to future li.
// when the li inside ul is clicked, call this function(works for future li also)
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on X to delete ToDo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // prevent the event from bubbling up the DOM tree
  event.stopPropagation();
})

// create new todo list and appear on screen
$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    var todoStr = $(this).val();
    // make input becomes empty again
    $(this).val("");
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoStr + "</li>");
  }
})
