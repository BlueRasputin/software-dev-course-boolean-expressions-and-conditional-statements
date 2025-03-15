/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

// const readline = require('readline-sync');

// const hasTorch = true;
// const hasMap = false;

// console.log("You see two paths: one leads to the mountains, the other to the village.");
// const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

// if (choice === "mountains" && hasTorch) {
//   console.log("You safely navigate through the dark mountains.");
// } else if (choice === "mountains" && !hasTorch) {
//   console.log("It's too dark to proceed. You decide to turn back.");
// } else if (choice === "village" || hasMap) {
//   console.log("You find your way to the village.");
// } else {
//   console.log("You get lost and wander aimlessly.");
// }

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

const readline = require('readline-sync');

let defeat = ("You have been defeated!")
const hasTorch = true;
let hasMap = false;
let hasSword = false;
const player = {
  health: 100,
  energy: 100,
  attack: 20,
  healthPots: 0,
  weaponPoison: 0,
};
const enemy = {
  oneShot: function () {
    player.health -= 100;
    console.log(`You now have ${player.health} health left. You died in one hit. Wow, some hero you are.`);
    if (player.health === 0) {
      console.log(defeat)
    }
  },
  attack: function () {
     player.health -= 20;
  },
  critHit: function () {
    player.health -=40;
  },
  health: 100,
};


console.log("You see two paths: one leads to the mountains, the other to the village.");
const firstChoice = readline.question("Do you go to the 'mountains' or the 'village'? ").toLowerCase();

if (firstChoice === "mountains") {
    if (hasTorch && !hasSword) {
        console.log("You slowly enter the dark mountain caves.");
        const caveChoice = readline.question("On your way through the mountains, you discover a passage. Do you dare 'enter', or 'stay the path'? ").toLowerCase();
        
        if (caveChoice === "enter") {
            console.log("You find an old man. He tells you it's trepidatious to proceed without a companion of some sort, and offers you a sword. Not really a companion, but sure.");
            const swordChoice = readline.question("Do you 'take the sword' or 'refuse the sword'? ").toLowerCase();
            
            if (swordChoice === "take the sword") {
                hasSword = true;
                console.log("You take the sword and proceed through the mountains. On your way out, you see a group of goblins huddled around something. They appear to be scheming amongst themselves.");
                const goblinChoice = readline.question("Do you 'attack the goblins' or 'try to talk it out'? ").toLowerCase();
                
                if (goblinChoice === "attack the goblins") {
                    console.log("You run toward the goblins, sword in hand. As they see your swift approach, they run away screaming, leaving their picnic behind. They were just having a nice day. Not cool, man.");
                } else if (goblinChoice === "try to talk it out") {
                    console.log("The goblins smile as you approach, offering you a muffin. What a nice group. You forget why you left the house today. You decide to sit with these goblins for a while longer.");
                } else {
                    console.log("You hesitated too long. The goblins get suspicious and leave. May be best not to start trouble, anyway.");
              
                }
            } else {
                console.log("Ouch. He stabbed you with it. What a jerk.");
                enemy.oneShot();
                console.log("Now you're bleeding out. Great.");
            }
        } else {
            console.log("You proceed through the caves without much difficulty. Upon exiting, you see a group of goblins huddled around something. They appear to be scheming amongst themselves.");
            const goblinChoice = readline.question("Do you 'attack the goblins' or 'try to talk it out'? ").toLowerCase();
            
            if (goblinChoice === "attack the goblins" && hasSword) {
                console.log("You run toward the goblins, sword in hand. As they see your swift approach, they run away screaming, leaving their picnic behind. They were just having a nice day. Not cool, man.");
            } else if (goblinChoice === "try to talk it out") {
                console.log("The goblins smile as you approach, offering you a muffin. What a nice group. You forget why you left the house today. You decide to sit with these goblins for a while longer.");
            } else {
                console.log("You hesitated too long. The goblins get suspicious and leave.");
            } 
        }
    } else {
        console.log("It's too dark to proceed. You decide to turn back.");
    }
} else if (firstChoice === "village") {
    if (hasMap) {
        console.log("You find your way to the village using your map.");
    } else {
        console.log("You find your way to the village.");

        const merchantChoice = readline.question("A travelling merchant approaches you as you enter the village. He seems trustworthy enough. He offers you a potion in exchange for your map. do you 'accept potion'?").toLowerCase();
          
          if (merchantChoice !== 'accept potion') {
            console.log ("You refuse the potion. As you walk away, you turn back to see the merchant and there is nobody there. Perhaps it's a good idea to get out of this village.")
          } else {
            console.log("The merchant rips the parchment from your hand and dissapears in a flash, leaving behind a small vial on the ground")
      
          }
      
          
    
      }
} else {
    console.log("Invalid choice. You get lost and wander aimlessly.");
    }