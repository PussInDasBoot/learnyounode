$(function(){

  var chillWinston = {lat: 49.283609, lng: -123.103978};
        
  var CWwindow = '<div id="content">'+
      'Yum yum in my tum'
      +'</div>';

  var Taqueria = {lat: 49.282974, lng: -123.110502};
  
  var Twindow = '<div id="content">'+
      'Taco taco taco'
      +'</div>';

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: chillWinston
    });

    var CWinfowindow = new google.maps.InfoWindow({
      content: CWwindow
    });

    var CWmarker = new google.maps.Marker({
      position: chillWinston,
      map: map,
      title: 'Chill Winston'
    });

    CWmarker.addListener('click', function() {
      CWinfowindow.open(map, CWmarker);
    });

    var Tinfowindow = new google.maps.InfoWindow({
      content: Twindow
    });

    var Tmarker = new google.maps.Marker({
      position: Taqueria,
      map: map,
      title: 'Taqueria'
    });

    Tmarker.addListener('click', function() {
      Tinfowindow.open(map, Tmarker);
    });

    $('.chill').on('click', function(){
      debugger;
      // $(this).toggle(this.checked);
      if(document.getElementById('chill').checked) {
      CWmarker.setVisible(true);
      debugger;
      } else {
        CWmarker.setVisible(false);
      }    
    })
  }
});