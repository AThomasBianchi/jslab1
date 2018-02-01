(function() {

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

// set variables
var startSection = document.querySelector("#start");
var battleSection = document.querySelector("#battle");
var endSection = document.querySelector("#end");
var startButton = document.querySelector("#startButton");
var attackButton = document.querySelector("#attackButton");
var healButton = document.querySelector("#healButton");
var quitButton = document.querySelector("#quitButton");
var finaleMessage = document.querySelector("#finaleMessage");
var messageBar = document.querySelector("#message");
var messageBar2 = document.querySelector("#message2");
var userHealthBar = document.querySelector("#playerHealth");
var userHealsBar = document.querySelector("#playerHeals");
var winsBar = document.querySelector("#playerWins");
var grantHealthBar = document.querySelector("#grantHealth");
var endMessage = undefined;

startButton.onclick = function() {
  startGame();
}

function startGame() {
  user.name = prompt("What is your name?");
  var playerName = document.querySelector("#playerName");
  playerName.innerText = user.name;
  startSection.classList.add("hidden");
  battleSection.classList.remove("hidden");
  startCombat();
}

function clearMessage2() {
  messageBar2.innerText = "";
}

function logHealth() {
  messageBar.innerText = user.name + " has " + user.health + " health left.";
  messageBar.innerText += " Grant the Mighty Chicken has " + grant.health + " health left.";
}

function dealDamage() {
  user.health -= grant.generateAttackDamage(); // subract damage from user's health
  grant.health -= user.generateAttackDamage(); // subtract damage from Grant's health
}

function updateBars() {
  userHealthBar.value = user.health;
  userHealsBar.value = 2 - user.healsRemaining;
  winsBar.value = user.wins;
  grantHealthBar.value = grant.health;
}

function evalHealth() {
  if (grant.health <= 0 && user.health <= 0 && user.wins === 2) {  // did you both die?
    endMessage = "You both died simultaneously. What a tragedy.";
    endScreen();
  } else if (grant.health <= 0) {
    user.wins++;
    if (user.wins < 3) {
      // if grant has extra lives
      if (user.wins === 1) {
        messageBar2.innerText = "You have " + user.wins + "win.";
      } else {
        messageBar2.innerText = "You have " + user.wins + " wins.";
      }
      grant.health = 10;
      evalHealth();
    } else {
      endMessage = "You are alive, Grant is dead, the world is cruel."
      endScreen();
    }
  } else if (user.health <= 0) {
    // user dies, you lose
    endMessage = "You died. Bummer.";
    endScreen();
  }
}

function endScreen() {
  battleSection.classList.add("hidden");
  endSection.classList.remove("hidden");
  finalMessage.innerText = endMessage;

}

function startCombat() {
  logHealth(); // log Grant's and user's health to the message bar
  updateBars();
  attackButton.onclick = function() {
    clearMessage2();
    dealDamage();
    evalHealth();
    startCombat();
  }
  healButton.onclick = function() {
    if (user.healsRemaining > 0) {
      user.heal();
      messageBar2.innerText = "You healed.";
    } else {
      messageBar2.innerText = "You can't heal anymore.";
    }
    startCombat();
  }
  quitButton.onclick = function() {
    endMessage = "Quitter."
    endScreen();
  }
}

})();
