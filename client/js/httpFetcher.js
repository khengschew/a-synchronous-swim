(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  $.ajax({
    url: serverUrl,
    type: 'GET',
    success: (data) => (
      console.log(data)
    ),
    error: (error) => (
      console.error('Request failed', error)
    )
  });

})();
