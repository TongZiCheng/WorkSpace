$.getJSON('api/total', function (json){

        for (let key in json.data) {
          $('#list').append(`<a href="intro.html?id=${key}">${json.data[key]}</a>`)   
          }


});
