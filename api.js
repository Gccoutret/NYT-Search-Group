$(document).ready(function(){

  var key= "SDJXzizDrGMNzTGFfnYY0w1FqDEoGdQf";
  var url= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+topic+"&api-key="+key;
  var topic;
  
    $.ajax({
      method: "GET",
      url: url,
      
    }).then(function(response){
      console.log(response)
    })
    

  




})