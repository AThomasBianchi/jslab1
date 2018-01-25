var grantLives = 3;
var grantHealth = 10;
var userHealth = 40;
var userWins = 0;


// var userName = prompt("What is your name?");
// console.log("Username: " + userName);
// while (userHealth > 0 && grantLives >= 0 && grantHealth > 0) {
//   console.log(userName + " has " + userHealth + " health left.");
//   console.log("Grant the Mighty Chicken has " + grantHealth + " health left.");
//   var userDamage = Math.floor(Math.random() * 2 + 1);
//   var grantDamage = Math.floor(Math.random() * 2 + 1);
//   userHealth -= userDamage;
//   grantHealth -= grantDamage;
//   if (grantHealth <= 0 && userHealth <= 0 && grantLives < 1) {
//     console.log("You both died.");
//   } else if (grantHealth <= 0) {
//     console.log("Grant Died");
//     userWins++;
//     if (grantLives > 0) {
//       console.log("But Grant has " + grantLives + " extra lives left");
//       grantLives--;
//       grantHealth = 10;
//     } else {
//       console.log("You have defeated Grant.");
//       console.log("You have " + userWins + " wins.");
//     }
//   } else if (userHealth <= 0) {
//     console.log("You died.");
//     console.log("Grant wins.");
//   }
// }
var wanttoplay = prompt("Do you want to play?");
if (wanttoplay==="yes"){
  var userName = prompt("What is your name?");
  console.log("Username: " + userName);
  while (userHealth > 0 && grantLives >= 0 && grantHealth > 0) {
    console.log(userName + " has " + userHealth + " health left.");
    console.log("Grant the Mighty Chicken has " + grantHealth + " health left.");
    var userDamage = Math.floor(Math.random() * 2 + 1);
    var grantDamage = Math.floor(Math.random() * 2 + 1);
    userHealth -= userDamage;
    grantHealth -= grantDamage;
    if (grantHealth <= 0 && userHealth <= 0 && grantLives < 1) {
      console.log("You both died.");
    } else if (grantHealth <= 0) {
      console.log("Grant Died");
      userWins++;
      if (grantLives > 0) {
        console.log("But Grant has " + grantLives + " extra lives left");
        grantLives--;
        grantHealth = 10;
      } else {
        console.log("You have defeated Grant.");
        console.log("You have " + userWins + " wins.");
      }
    } else if (userHealth <= 0) {
      console.log("You died.");
      console.log("Grant wins.");
    }
  }
}
