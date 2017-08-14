// Setup initial game stats
var score = 0;
var lives = 2;
var powerPellets = 4;


// Define your ghosts here
var Inky = {
   menu_option: '1',
   name: 'Inky',
   colour: 'Red',
   character: 'Shadow',
   edible: false
 };
 var Blinky = {
   menu_option: '2',
   name: 'Blinky',
   colour: 'Cyan',
   character: 'Speedy',
   edible: false
 };
 var Pinky = {
   menu_option: '3',
   name: 'Inky',
   colour: 'Pink',
   character: 'Bashful',
   edible: false
 };
 var Clyde = {
   menu_option: '4',
   name: 'Clyde',
   colour: 'Orange',
   character: 'Pokey',
   edible: false
 };

 //stored the ghost objects in ghosts array.
 var ghosts = [];
 ghosts.push(Inky);
 ghosts.push(Blinky);
 ghosts.push(Pinky);
 ghosts.push(Clyde);



// Draw the screen functionality
function drawScreen() {
  clearScreen();
  setTimeout(function() {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log('Score: ' + score + '     Lives: ' + lives);
  console.log('\nPower-Pellets: ' + powerPellets);
}

function displayMenu() {
  console.log('\n\nSelect Option:\n');  // each \n creates a new line
  console.log('(d) Eat Dot');
  if (powerPellets > 0){
      console.log('(p) Eat Power-Pellet');
  }
  if(Inky.edible === true){
    console.log('(1) Eat Inky (Edible)');
  }
  else{
    console.log('(1) Eat Inky (Inedible)');
  }
  if(Blinky.edible === true){
    console.log('(2) Eat Blinky (Edible)');
  }
  else{
    console.log('(2) Eat Blinky (Inedible)');
  }
  if(Pinky.edible === true){
    console.log('(3) Eat Pinky (Edible)');
  }
  else{
    console.log('(3) Eat Pinky (Inedible)');
  }
  if(Clyde.edible === true){
    console.log('(4) Eat Clyde (Edible)');
  }
  else{
    console.log('(4) Eat Clyde (Inedible)');
  }
  console.log('(q) Quit');
}

function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\nWaka Waka :v '); // :v is the Pac-Man emoji.
}


// Menu Options
function eatDot() {
  console.log('\nChomp!');
  score += 10;
}

function eatGhost(ghost){
  if (ghost.edible === false){
    lives -= 1
    console.log('\nA ' + ghost.colour + " " + ghost.name + ' killed Pacman!');
    gameOver();
  }
  else if(ghost.edible === true){
    console.log('\nYUMYUMYUM! Pacman ate a ' + ghost.character + ' Ghost named ' + ghost.name + '!');
    score += 200;
    ghost.edible = false;
  }
}

function eatPowerPellet(){
  score += 50;
  for(var i=0; i < ghosts.length; i++){
    ghosts[i].edible = true;
  }
  powerPellets -= 1;
}




// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case 'd':
      eatDot();
      break;
    case 'p':
      if (powerPellets > 0){
        eatPowerPellet();
      }
      else{
        console.log('\nYou are out of Power Pellets!')
      }
      break;
    case '1':
      eatGhost(ghosts[0]);
      break;
    case '2':
      eatGhost(ghosts[1]);
      break;
    case '3':
      eatGhost(ghosts[2]);
      break;
    case '4':
      eatGhost(ghosts[3]);
      break;
    default:
      console.log('\nInvalid Command!');
  }
}


function gameOver(){
  if (lives === 0){
    console.log("Game Over!");
    process.exit();
  }
}


//
// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', function(key) {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 300); // The command prompt will flash a message for 300 milliseoncds before it re-draws the screen. You can adjust the 300 number to increase this.
});

// Player Quits
process.on('exit', function() {
  console.log('\n\nGame Over!\n');
});
