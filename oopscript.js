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
  var wanttoplay = prompt("Do you want to play?");
  if (wanttoplay.toLowerCase() === "yes") {
    user.name = prompt("What is your name?");
    console.log("Username: " + user.name);
    startCombat();
  }
}

function dealDamage() {
  user.health -= grant.generateAttackDamage(); // subract damage from user's health
  grant.health -= user.generateAttackDamage(); // subtract damage from Grant's health
}

function logHealth() {
  console.log(user.name + " has " + user.health + " health left."); // log the user's health
  console.log("Grant the Mighty Chicken has " + grant.health + " health left."); // log Grant's health to the console
}

function startCombat() {
  while (user.health > 0 && user.wins < 3 && grant.health > 0) {
    logHealth(); // log Grant's and user's health
    var attackAnswer = prompt("Do you want to attack or heal or quit?"); // user chooses what to do
    if (attackAnswer === "quit") { // quit option
      break;
    } else if (attackAnswer === "heal") { // heal option
      console.log("Physician, heal thyself.");
      if (user.healsRemaining > 0) { // does user have heals left?
        user.heal(); // heal
      } else {
        console.log("You can't heal anymore."); // tell them they can't heal anymore
        continue;
      }


    dealDamage();
                                                                  // evaluate if everyone is still alive below
    if (grant.health <= 0 && user.health <= 0 && user.wins === 2) {  // did you both die?
      console.log("You both died.");
    } else if (grant.health <= 0) { // did Grant die?
      console.log("Grant Died");
      user.wins++;
      console.log("You have " + user.wins + " wins.");
      if (user.wins < 3) { // does he have any extra lives?
        console.log("But Grant has " + (3 - user.wins) + " extra lives left");                                            // use an extra life
        grant.health = 10; // reset Grant's health
      } else { // If Grant has no extra lives remaining
        console.log("You have defeated Grant.");
        console.log("You are alive, Grant is dead, the world is cruel."); // game over, you win
      }
    } else if (user.health <= 0) { // user dies, you lose
      console.log("You died. Bummer.");
      console.log("Grant wins. Good for Grant.");
    }
  }
}

startGame();
