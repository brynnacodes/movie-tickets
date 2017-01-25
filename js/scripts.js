/////////BE

function Ticket (movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
};

Ticket.prototype.ticketPrice = function() {
  var flatRate = 10;

  if (this.age === "senior" && (this.time === "matinee" || this.time === "late-showing")) {
    flatRate -= 4;
  } else if (this.age === "senior") {
    flatRate -= 2;
  } else if (this.age === "child") {
    flatRate -=6
  } else if (this.age === "adult" && (this.time === "matinee" || this.time === "late-showing")) {
    flatRate -=2
  }
  return flatRate;
};

////////FE

$(document).ready(function() {

  $("#ticket-form").submit(function(event) {
    event.preventDefault();

    var selectedMovie = $("select#movie").val();
    var selecedTime = $("select#time").val();
    var selectedAge = $("select#age").val();
    var newTicket = new Ticket(movie, time, age);
    var flatRate = 10;

    var ticketTotal = newTicket.ticketPrice();


    $("#show-ticket").append("<p>" + movie + time + age + ticketTotal + "</p>");
  });
});
