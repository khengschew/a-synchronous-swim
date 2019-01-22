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