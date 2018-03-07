// Check Off Specific Todos By Clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});

// // another way
// $("li").click(function() {
//   // the return value of .css("color") is rgb, you should use rgb(128, 128, 128) instead of gray
//   if($(this).css("color") === "rgb(128, 128, 128)") {
//     $(this).css({
//       color: "black",
//       // here you should not use text-decoration
//       textDecoration: "none"
//     })
//   } else {
//     $(this).css({
//       color:"gray",
//       textDecoration: "line-through"
//     })
//   }
// })
