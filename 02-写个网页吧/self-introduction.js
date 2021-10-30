$.getJSON('self-introduction.json', function (json) 
{

    $('#name').text(json.name)
    $("#about").text(json.about)
  
    if (json.sex) {
      $("#sex").text('👦')
    } else {
      $("#sex").text('👧')
    }
  
  })