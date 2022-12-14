var fight = function(enemy) {
    while(playerInfo.health > 0 && enemy.health > 0){
      //ask player if they would like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //If player picks skip confirm then stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
              //confirm skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");
              //If yes(true), leave fight
              if(confirmSkip){
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerMoney" , playerInfo.money)
                break;
              }
            }
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

          enemy.health = Math.max(0, enemy.health - damage);
          console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
          );
        
          // check enemy's health
          if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
          } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
          }
        
          // remove player's health by subtracting the amount set in the enemyAttack variable
          var damage = randomNumber(enemy.attack-3,enemy.attack);
          
          playerInfo.health = Math.max(0,playerInfo.health - damage);
          console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
          );
        
          // check player's health
          if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
          } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
          }
        }//end of while loop
    };//end of fight function



var startGame = function(){
  //reset player stats
  playerInfo.reset();
  for(var i = 0; i < enemyInfo.length; i++){
    if(playerInfo.health > 0){
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);
      if(playerInfo.health > 0 && i < enemyInfo.length - 1){
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if(storeConfirm){
          shop();
        }
      }
     } else{
      window.alert("You have lost your robot in battle! Game Over!");
      break;
     }
  }
  endGame();
};

var endGame = function(){
  if(playerInfo.health > 0){
    window.alert("Great Job, you've survived the game you now have a score of " + playerInfo.money + ".");
  }
  else{
    window.alert("You've lost your robot in battle");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");
  //restart the game
  if(playAgainConfirm){
    startGame();
  }else{
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}

var shop = function(){
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      playerInfo.refillHealth();
      break;
    case "UPGRADE": // new case
    case "upgrade":
      playerInfo.upgradeAttack();
        break;
        case "LEAVE": // new case
        case "leave":
        window.alert("Leaving the store.");
        break;
        default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
  }

};
var randomNumber = function(min,max){
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset:function(){
  this.health= 100;
  this.money = 10;
  this.attack = 10;
  },
  refillHealth: function(){
    this.health += 20;
    this.money -= 7;
  },
  upgradeAttack: function(){
    this.attack += 6;
    this.money -= 7;
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];
startGame();