/////////////////////
//Back-end
/////////////////////
var price = 12;

var movie;
var time;
var age;
//var userAge = new Age();

// function Age(child = 6, adult = 12, senior = 10) {
//   this.child = child;
//   this.adult = adult;
//   this.senior = senior;
// }

// function Ticket(title, times) {
//   this.title = title;
//   this.time = times;
//   this.ages = [];
// }

// var lotb = new Ticket("Lord of the Bracelets", ["16:30", "19:00", "23:30"])
//
// Ticket.prototype.price = function(title, times, age) {

//}


/////////////////////
//Front-end
/////////////////////
$(function() {
  $("#userAge").hide();
  $("#lotbTime").hide();
  $("#hpTime").hide();
  $("#sb3Time").hide();

  $("#userMovie").submit(function() {
    event.preventDefault();
    movie = $("input:radio[class=movie]:checked").val();

    if (movie === "Lord of the Bracelets") {
      $("#userMovie").hide();
      $("#lotbTime").show();
    } else if (movie === "Hagrid Portly and Ordinary Everyday Without Magic") {
      $("#userMovie").hide();
      $("#hpTime").show();
    } else if (movie === "Space Balls III") {
      $("#userMovie").hide();
      $("#sb3Time").show();
    }
  });
  $("#lotbTime").submit(function() {
    event.preventDefault();
    time = $("input:radio[class=times]:checked").val();

    $("#lotbTime").hide();
    $("#hpTime").hide();
    $("#sb3Time").hide();
    $("#userAge").show();
  });

  $("#hpTime").submit(function() {
    event.preventDefault();
    time = $("input:radio[class=times]:checked").val();
    $("#lotbTime").hide();
    $("#hpTime").hide();
    $("#sb3Time").hide();
    $("#userAge").show();
  });
  $("#sb3Time").submit(function() {
    event.preventDefault();
    time = $("input:radio[class=times]:checked").val();
    $("#lotbTime").hide();
    $("#hpTime").hide();
    $("#sb3Time").hide();
    $("#userAge").show();
  });
  $("#userAge").submit(function() {
    event.preventDefault();
    age = $("input:radio[class=userAge]:checked").val();
    if (age === "adult") {
    } else if (age === "senior") {
      price -= 2;
    } else if (age === "child") {
      price -= 6;
    }
    $("#userAge").hide();
    $("#show-ticket").append("<p>Your ticket is for " + movie + " at " + time + " and will cost " + price + " dollars.");
  });

});
