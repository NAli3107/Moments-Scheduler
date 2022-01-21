/* Global Variables */

let userText = $("#userText");
let textBox = $("textarea");

/* Function to store and load user's input in Local Storage */

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        
        let = userText = $(this).siblings(".description").val();
        let = time = $(this).parent().attr("id");
        
        localStorage.setItem(time, userText);

    });

    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
    $("#6pm .description").val(localStorage.getItem("6pm"));
    $("#7pm .description").val(localStorage.getItem("7pm"));
    $("#8pm .description").val(localStorage.getItem("8pm"));
    $("#9pm .description").val(localStorage.getItem("9pm"));
});

/* Rendering Current Date */

let date = moment().format("MMMM Do, YYYY");
let currentDate = function(){
    $("#currentDay").text(date);
};
currentDate();

/* Rendering current hour */
let currentHour = moment().hour();

/* Function to change the colours of time blocks based on current time */
textBox.each(function (colourChange) {
    
    if (currentHour > colourChange + 9) {
      $(this).toggleClass("past");

    }
  
    if (currentHour === colourChange + 9) {
      $(this).toggleClass("present");
    }
  
    if (currentHour < colourChange + 9) {
      $(this).toggleClass("future");
    }
  });
  



// /* Function to change the colours of time blocks based on current time */
// let = colourChange = function(){
//     $(".description").each(function () {
//         let hourBlock = parseInt($(this).attr("id"));
    
//         if (hourBlock < currentHour) {
//           $(this).addClass("past");
//           console.log("hello")
//         }
//         else if (hourBlock === currentHour) {
//           $(this).removeClass("past");
//           $(this).addClass("present");
//           console.log("hello")
//         }
//         else {
//           $(this).removeClass("present")
//           $(this).removeClass("past")
//           $(this).addClass("future")
//           console.log("hello")
//         }
    
//       });
// };
// colourChange();
