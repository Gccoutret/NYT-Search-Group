$(document).ready(function(){

  var key= "SDJXzizDrGMNzTGFfnYY0w1FqDEoGdQf";

  $('#searchButton').on('click', function(){
    event.preventDefault();

    var numResults = $('#numReconds').val();

    var 

    var topic = $('#searchTerm').val();

    var startYear = "begin_date=" + $('#startYear').val();

    var endYear = "end_date=" + $('#endYear').val();

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