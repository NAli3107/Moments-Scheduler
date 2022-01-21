/* Global Variables */

let userText = $("#userText");

/* Rendering Current Date */

let date = moment().format("MMMM Do, YYYY");
$("#currentDay").text(date);

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
    $("#8pm .description").val(localStorage.getItem("7pm"));
});

