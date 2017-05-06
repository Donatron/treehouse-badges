$(document).ready(function() {

  $.ajax('https://teamtreehouse.com/donmacarthur.json').done(function(data) {
    console.log("Done");

    var items = [];
    $.each(data, function(key, val) {
      items.push(key, val);
    });
    console.log(items);
  })
})
