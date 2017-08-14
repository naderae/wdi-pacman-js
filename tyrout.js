var score = 0;
var lives = 2;


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
 ghosts.push(Clyde);
 ghosts.push(Pinky);
 ghosts.push(Blinky);
 ghosts.push(Inky);
