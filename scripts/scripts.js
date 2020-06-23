console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  addMyEventListeners();
  storeUserName();
  
});

//Events
function addMyEventListeners(){
  
  //scroll back top click event
  $('#backToTop').click(function() {
    scrollToTop(); // execute functions
  });

  //window scroll event
  $(window).scroll(500, function(){
    showHideTop(); // execute function
  });

}

// function to scroll back to top
function scrollToTop() {
  // Animate the html element with scrollTop method
  $('html').animate({scrollTop:0}, 1500);
};

//show/Hide btn on scroll length
function showHideTop() {
  //if the window scroll greater than 200
  if ($(window).scrollTop() > 200){
    // show backToTop
    $('#backToTop').css({right: "5px"});
    // else if the window scroll less than 200
  } else if ($(window).scrollTop() < 200){
    // hide backToTop
    $('#backToTop').css({right: "-50px"});
  }
}



// store username as cookie to show custom greeting e.g Hello...
function storeUserName(){
  // variable defined 
  var userName = document.cookie;

  // if username is Not empty string & null
  if (userName != "" && userName != null) {
    // add user greeting to html
    $(".greeting").append(userName);
  } else {
    // prompt user to enter name
    document.cookie = prompt("Enter Your Name:");
  }
}
