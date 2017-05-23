// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//


var choose;
choose = ["rock", "paper", "scissors"];

var pictures;
pictures = ["https://media.tenor.co/images/6e787cd3d24a79136578afbdcfc776b3/tenor.gif", "http://gifrific.com/wp-content/uploads/2012/09/Seinfeld-Laughing-with-Cigar.gif", "https://img.styla.com/resizer/sfh_500x0/5-times-audrey-hepburn-was-part-of-the-chic-clique_06553_39443.gif"];

module.exports = function(robot) {
  
  return robot.hear(/Play (.*)/i, function(msg) {
    msg.send("I played" + " " + msg.random(choose));
    
    var play;
    play = msg.match[1];
    if (play === msg.random(choose)) {
      msg.send("Tie");
    } else if (play === "rock" && msg.random(choose) === "paper") {
      msg.send("You lost");
    } else if (play === "paper" && msg.random(choose) === "rock") {
      msg.send("You won! " + random(pictures));
    } else if (play === "scissors" && msg.random(choose) === "rock") {
      msg.send("You lost");
    } else if (play === "rock" && msg.random(choose) === "scissors") {
      msg.send("You won! " + random(pictures));
    } else if (play === "paper" && msg.random(choose) === "scissors") {
      msg.send("You lost");
    } else if (play === "scissors" && msg.random(choose) === "paper") {
      msg.send("You won! " + random(pictures));
    }
  });
};
