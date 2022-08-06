// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto" , "Amy Android" , "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// You can also log multiple values at once like this



var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0){
      //ask player if they would like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //If player picks skip confirm then stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
              //confirm skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");
              //If yes(true), leave fight
              if(confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney" , playerMoney)
                break;
              }
            }
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;
          console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
          );
        
          // check enemy's health
          if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
          } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
          }
        
          // remove player's health by subtracting the amount set in the enemyAttack variable
          playerHealth = playerHealth - enemyAttack;
          console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
          );
        
          // check player's health
          if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
          } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
          }
        }//end of while loop
    };//end of fight function



var startGame = function(){
  //reset player stats
  playerAttack= 10;
  playerHealth=100;
  playerMoney=10;
  for(var i = 0; i < enemyNames.length; i++){
    if(playerHealth > 0){
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = 50;

      fight(pickedEnemyName);
     } else{
      window.alert("You have lost your robot in battle! Game Over!");
      break;
     }
  }
  endGame();
};

var endGame = function(){
  if(playerHealth > 0){
    window.alert("Great Job, you've survived the game you now have a score of " + playerMoney + ".");
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
startGame();