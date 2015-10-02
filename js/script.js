$(document).ready(function() { 

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},speed=1000);
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
$("#skills").click(function() {
   scrollToAnchor('skills');
});

$("#showEmail").click(function(){
    $("#email").toggle('slow');
});

});