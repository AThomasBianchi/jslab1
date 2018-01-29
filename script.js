var grantLives = 2;
var grantHealth = 10;
var userHealth = 40;
var userWins = 0;
var userName;                                                       // userName is undefined until startGame() is called

function getDamage() {                                              //generates damage between 1 and 5
  return Math.floor(Math.random() * 5 + 1);
}

function startGame() {
  var wanttoplay = prompt("Do you want to play?");                  //ask the user if they want to play
  if (wanttoplay === "yes") {                                       // play, if they want to
    userName = prompt("What is your name?");                        // get the user name
    console.log("Username: " + userName);
    startCombat();
  }
}

function startCombat() {
  while (userHealth > 0 && grantLives >= 0 && grantHealth > 0) {  // while everyone is alive, do this
    console.log(userName + " has " + userHealth + " health left."); // log user health
    console.log("Grant the Mighty Chicken has " + grantHealth + " health left."); // log Grant health
    var attackAnswer = prompt("Do you want to attack or quit?");
    if (attackAnswer === "quit") {
      break;
    }

    userHealth -= getDamage();                                    // subract damage from user's health
    grantHealth -= getDamage();                                   // subract damage from grant's health
                                                                  // evaluate if everyone is still alive below
    if (grantHealth <= 0 && userHealth <= 0 && grantLives < 1) {  // did you both die?
      console.log("You both died.");                              // then do this
    } else if (grantHealth <= 0) {                                // did Grant die?
      console.log("Grant Died");
      userWins++;
      if (grantLives > 0) {                                       // does he have any extra lives?
        console.log("But Grant has " + grantLives + " extra lives left");
        grantLives--;                                             // use an extra life
        grantHealth = 10;                                         // reset Grant's health
      } else {                                                    // no extra lives
        console.log("You have defeated Grant.");
        console.log("You are alive, Grant is dead, the world is cruel.");           // game over, you win
      }
    } else if (userHealth <= 0) {                                 // user dies, you lose
      console.log("You died. Bummer.");
      console.log("Grant wins. Good for Grant.");
    }
  }
}

startGame();
