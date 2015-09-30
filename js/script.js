console.log("script.js is linked")
$(document).ready(function() { 

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#about").click(function() {
   scrollToAnchor('about');
});
$("#experience").click(function() {
   scrollToAnchor('experience');
});
$("#projects").click(function() {
   scrollToAnchor('projects');
});
$("#contact").click(function() {
   scrollToAnchor('contact');
});
});