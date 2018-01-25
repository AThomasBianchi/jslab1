var grantLives = 3;
var grantHealth = 10;
var userHealth = 40;
var userWins = 0;

var wanttoplay = prompt("Do you want to play?");                  //ask the user if they want to play
if (wanttoplay === "yes") {                                       // play, if they want to
  var userName = prompt("What is your name?");                    // get the user name
  console.log("Username: " + userName);                           // print the user name to confirm
  while (userHealth > 0 && grantLives >= 0 && grantHealth > 0) {  // while everyone is alive, do this
    console.log(userName + " has " + userHealth + " health left."); // log user health
    console.log("Grant the Mighty Chicken has " + grantHealth + " health left."); // log Grant health
    var userDamage = Math.floor(Math.random() * 2 + 1);           // generate user damage
    var grantDamage = Math.floor(Math.random() * 2 + 1);          // generate grant damage
    userHealth -= userDamage;                                     // subract damage from the user health
    grantHealth -= grantDamage;                                   // subract damage from grant's health
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
      } else {
        console.log("You have defeated Grant.");                  // no extra lives
        console.log("You have " + userWins + " wins.");           // game over, you win
      }
    } else if (userHealth <= 0) {                                 // user dies, bummer
      console.log("You died. Bummer.");
      console.log("Grant wins. Good for Grant.");
    }
  }
}
