window.onload = function() {
   var data = {"inputs":[{"data":{"image":{"url":"http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG"}}}]}
      $.ajax({
          'type': 'POST',
          'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
          'headers': {
              'Authorization': 'Key c65a89fe0d7e4500b845cadfb40f8d53',
              'Content-Type': 'application/json'
          },
          'data': data,
          success: function (response) {
              console.log(response);
          },
          error: function (xhr) {
              console.log(xhr);
          }
      })


}
