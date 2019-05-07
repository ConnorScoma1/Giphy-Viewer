

const apikey = 'q7gYwhTD6jf37ZgdhpW9pAtkNEcsVS9Y';
var gif = 'bucks'

function buttonClicked() {
    var userInput = $('#userInput').val();
}

$(document).ready(function(){

    $.ajax({
        url: 'http://api.giphy.com/v1/gifs/search?q=' + gif + '&api_key=' + apikey,
        type: 'GET',
    }).then(function(response){
        console.log(response)

    })
})