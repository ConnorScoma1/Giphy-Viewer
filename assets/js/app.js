

const apikey = 'q7gYwhTD6jf37ZgdhpW9pAtkNEcsVS9Y';

function buttonClicked() {
    var userInput = $('#userInput').val();

}

$(document).ready(function(){

    $("#btn-submit").on("click", function(event) {
        console.log("Submit Clicked")
        event.preventDefault();
        var gif = $('#userInput').val().trim();

        console.log(userInput)

    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search?q=' + gif + '&api_key=' + apikey,
        type: 'GET',
    }).then(function(response){
        console.log(response)

        for(var i = 0 ; i <= 25 ; i++) {
            var urls = response.data[i].images.fixed_height.url // looping urls

            $('.gif-container').append('<img class="gif-images" src="'+ urls + '">');
            console.log(urls)
        }

    
    })
    })
})
