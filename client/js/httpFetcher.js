(function poll() {
  fetch('http://127.0.0.1:3000', {
    type: 'GET',
    header: {'Content-Type': 'application/json'}
  })
    .then(res => res.json())
    .then(res => {
      SwimTeam.move(res.direction);
      setTimeout(poll, 100);
    })
    .catch(error => console.error('Request failed', error));
})();

var SwimServer = {
  serverUrl: 'http://127.0.0.1:3000',

  getDirection: function(successCB, errorCB = null) {
    $.ajax({
      url: SwimServer.serverUrl,
      type: 'GET',
      success: successCB,
      error: errorCB || function(error) {
        console.error('Request failed', error);
      }
    });
  }
};