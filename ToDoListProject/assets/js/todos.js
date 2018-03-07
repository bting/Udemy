// Check Off Specific Todos By Clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});

// Click on X to delete ToDo
$("span").click(function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  // prevent the event from bubbling up the DOM tree
  event.stopPropagation();
})
