var user = {
  health: 40,
  healsRemaining: 2,
  name: undefined,
  wins: 0,
  generateAttackDamage: function() {
    return Math.floor(Math.random() * 3 + 1);
  },
  heal: function() {
    this.health += Math.floor(Math.random() * 10 + 1);
    this.healsRemaining--;
  }
}

var grant = {
  name: "Grant",
  health: 10,
  generateAttackDamage: function() {
    return Math.floor(Math.random() * 10 + 1);
  },
}

function startGame() {
  var wanttoplay = prompt("Do you want to play?");                  //ask the user if they want to play
  if (wanttoplay.toLowerCase() === "yes") {                                       // play, if they want to
    user.name = prompt("What is your name?");                        // get the user name
    console.log("Username: " + user.name);
    startCombat();
  }
}

function dealDamage() {
  user.health -= grant.generateAttackDamage();                                    // subract damage from user's health
  grant.health -= user.generateAttackDamage();
}

function logHealth() {
  console.log(user.name + " has " + user.health + " health left.");
  console.log("Grant the Mighty Chicken has " + grant.health + " health left.");
}

function startCombat() {
  while (user.health > 0 && user.wins < 3 && grant.health > 0) {
    logHealth();
    var attackAnswer = prompt("Do you want to attack or heal or quit?");
    if (attackAnswer === "quit") {
      break;
    } else if (attackAnswer === "heal") {
      console.log("You choose to heal yourself.");
      if (user.healsRemaining > 0) {
        user.heal();
        console.log("Your health is now " + user.health);
      } else {
        console.log("You can't heal anymore.");
      }
      continue;
    }

    dealDamage();
                                                                  // evaluate if everyone is still alive below
    if (grant.health <= 0 && user.health <= 0 && user.wins === 2) {  // did you both die?
      console.log("You both died.");                              // then do this
    } else if (grant.health <= 0) {                                // did Grant die?
      console.log("Grant Died");
      user.wins++;
      if (user.wins < 3) { // does he have any extra lives?
        console.log("But Grant has " + (3 - user.wins) + " extra lives left")                                            // use an extra life
        grant.health = 10;                                         // reset Grant's health
      } else {                                                    // no extra lives
        console.log("You have defeated Grant.");
        console.log("You are alive, Grant is dead, the world is cruel.");           // game over, you win
      }
    } else if (user.health <= 0) {                                 // user dies, you lose
      console.log("You died. Bummer.");
      console.log("Grant wins. Good for Grant.");
    }
  }
}

startGame();
