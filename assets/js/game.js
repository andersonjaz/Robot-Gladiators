var playerInfo = {
  name: window.prompt("what is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
};

var randomNumber = function(40, 60) {
  var value = Math.floor(Math.random() * (max-min) + 1) + min;

  return value;
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
];


console.log(enemyNames);`1`
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function
var fight = function(enemyName) {
  while (playerInfo.health > 0 && enemyHealth > 0) {
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
      // subtract money from playerMoney for skipping
      playerInfo.money = Math.max (0, playerInfo.money - 10);
      console.log("playerMoney", playerInfo.money);
      break;
    }
  }

  // generate random damage value based on player's attack power
var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

enemyHealth = Math.max(0, enemyHealth - damage);
  console.log(
    playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');

    // award player money for winning
    playerInfo.money = playerInfo.money + 20;

    // leave while() loop since enemy is dead
    break;
  } else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
  }

  // remove players's health by subtracting the amount set in the enemyAttack variable
  var damage = randomNumber(enemyAttack - 3, enemyAttack);

playerInfo.health = Math.max(0, playerInfo.health - damage);
  console.log(
    enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
  );

  // check player's health
  if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + ' has died!');
    // leave while() loop if player is dead
    break;
  } else {
    window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
  }
}
};

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
// if player is still alive, keep fighting
if (playerInfo.health > 0) {
  // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
  window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

  // pick new enemy to fight based on the index of the enemyNames array
  var pickedEnemyName = enemyNames[i];

  // reset enemyHealth before starting new fight
  enemyHealth = 50;

  // use debugger to pause script from running and check what's going on at that moment in the code
  // debugger;

  // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
  fight(pickedEnemyName);
}
// if player isn't alive, stop the game
else {
  window.alert('You have lost your robot in battle! Game Over!');
  break;
}
}

