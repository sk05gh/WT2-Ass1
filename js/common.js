// on page ready
$( document ).ready(()=>{
    var accordions = bulmaAccordion.attach(); // accordions now contains an array of all Accordion instances
    $("#nav-heading").hide();
    $("#nav-effect").hide();

    // video popup code
    $(".video-button").click(()=>{
        $("#model-video").addClass("is-active");
    });
});

// handling logo and name animation
function showNameHideLogo() {
    $("#nav-heading").removeClass("animate__animated animate__fadeOutLeftBig");
    $("#nav-logo").removeClass("animate__animated animate__fadeInLeftBig");
    $("#nav-logo").addClass("animate__animated animate__fadeOutLeftBig");
    $("#nav-heading").show();
    $("#nav-heading").addClass("animate__animated animate__fadeInLeftBig");
}
function showLogoHideName() {
    $("#nav-logo").removeClass("animate__animated animate__fadeOutLeftBig");
    $("#nav-heading").removeClass("animate__animated animate__fadeInLeftBig");
    $("#nav-heading").addClass("animate__animated animate__fadeOutLeftBig");
    $("#nav-logo").addClass("animate__animated animate__fadeInLeftBig");
}
function showFullMenu(){
    $("#nav-effect").removeClass("animate__animated animate__fadeOutLeftBig");
    $("#nav-effect").show();
    $("#nav-effect").addClass("animate__animated animate__fadeInLeftBig");
}
function hideFullMenu(){
    $("#nav-effect").removeClass("animate__animated animate__fadeInLeftBig");
    $("#nav-effect").addClass("animate__animated animate__fadeOutLeftBig");
}

// button code
function onBtnClk(){
    $("#nav-icon").addClass("animate__animated animate__flipInX");
    if($("#nav-icon").hasClass("fa-bars")){
        $("#nav-icon").removeClass("fa-bars");
        $("#nav-icon").addClass("fa-window-close");
        setTimeout(()=>{
            $("#nav-icon").removeClass("animate__animated animate__flipInX");
        },300);
    }else {
        $("#nav-icon").removeClass("fa-window-close");
        $("#nav-icon").addClass("fa-bars");
        setTimeout(()=>{
            $("#nav-icon").removeClass("animate__animated animate__flipInX");
        },300);
    }

    if($("#nav-logo").hasClass("animate__fadeOutLeftBig")){
        showLogoHideName();
        hideFullMenu();
        
    }else {
        showNameHideLogo();
        showFullMenu();
    }
}
// close button
function popup_close(){
    $("#popup").removeClass("is-active");
}

function popup_show(){
    $("#popup").addClass("is-active");
}

function popup2_close(){
    $("#popup2").removeClass("is-active");
}

function popup2_show(){
    $("#popup2").addClass("is-active");
}
// sticky nav bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-sec");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}