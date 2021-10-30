const url_params = new URLSearchParams(window.location.se)

if(! url_params.has('id')){
  window.location.href = 'error.html'
}

$.getJSON('http://127.0.0.1:8080/api/intro?id='+url_params.get('id'), function (json) 
{
    json=json.data
    $('#name').text(json.name)
    $("#about").text(json.about)
  
    if (json.sex) {
      $("#sex").text('👦')
    } else {
      $("#sex").text('👧')
    }
  
  })