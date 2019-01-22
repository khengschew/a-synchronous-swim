
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

var $button = $('<button>We Like To Move It Move It</button>').on('click', (e) => {
  // Generate random direction
  var directions = ['up', 'down', 'left', 'right'];

  // Move in random direction
  SwimTeam.move(directions[Math.floor(Math.random() * 4)]);
});
$('h1').after($button);

console.log('Client is running in the browser!');
