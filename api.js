$(document).ready(function(){

  var key= "SDJXzizDrGMNzTGFfnYY0w1FqDEoGdQf";

  $('#search-btn').on('click', function(){
    event.preventDefault();

    var topic = $('#query').val();

    console.log(topic);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic + "&api-key=" + key;

    console.log(url);
    
    $.ajax({
      method: "GET",
      url: url,
    }).then(function(response){
      console.log(response)
    })


  })
  

    

  




})