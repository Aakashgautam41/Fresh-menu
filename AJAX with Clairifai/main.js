 window.onload = function() {

 var data = '{"inputs":[{"data":{"image":{"url":"https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?h=350&auto=compress&cs=tinysrgb"}}}]}'
    $.ajax({
        'type': 'POST',
        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
        'headers': {
            'Authorization': 'Key c65a89fe0d7e4500b845cadfb40f8d53',
            'Content-Type': 'application/json'
        },
        'data': data,
        success: function (response) {
              var ingredients = response.outputs[0].data.concepts;
              var list = '';
                for (var i =0;i < ingredients.length;i++) {
                 list += '<div class="ingredient">' + ingredients[i].name + '</div>'
             }
                 $('.ingredients').html(list);
          },
             error: function (xhr) {
             console.log(xhr);
        }
    })
// Write AJAX call here 
	
}