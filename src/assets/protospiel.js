  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      var out = '';
      var items = response.result.items;
      for (var i in items) {
          var item = items[i];
          out += '<div><a href="https://tabletop.events'+item.view_uri+'">'+item.name+'</a><br><small>'+item.geolocation.name+' on '+item.start_date.substr(0,10)+'</small></div>';
      }
       document.getElementById("upcomingevents").innerHTML = out;
    }
  };
  xhttp.open("GET", "https://tabletop.events/api/convention?query=Protospiel&_include_related_objects=geolocation", true);
  xhttp.send();
