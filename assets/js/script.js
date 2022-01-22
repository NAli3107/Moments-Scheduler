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
    $("#13pm .description").val(localStorage.getItem("13pm"));
    $("#14pm .description").val(localStorage.getItem("14pm"));
    $("#15pm .description").val(localStorage.getItem("15pm"));
    $("#16pm .description").val(localStorage.getItem("16pm"));
    $("#17pm .description").val(localStorage.getItem("17pm"));
    $("#18pm .description").val(localStorage.getItem("18pm"));
    $("#19pm .description").val(localStorage.getItem("19pm"));
    $("#20pm .description").val(localStorage.getItem("20pm"));
    $("#21pm .description").val(localStorage.getItem("21pm"));
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
let = colourChange = function(){
    $(".time-block").each(function () {
        let hourBlock = parseInt($(this).attr("id"));
        if (hourBlock < currentHour) {
          $(this).addClass("past");
          console.log("hello")
        }
        else if (hourBlock === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          console.log("hello")
        }
        else {
          $(this).removeClass("present")
          $(this).removeClass("past")
          $(this).addClass("future")
          console.log("hello")
        }
    
      });
};
colourChange();
