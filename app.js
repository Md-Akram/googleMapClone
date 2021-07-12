mapboxgl.accessToken =
  'pk.eyJ1IjoiYWtyYW0wOWthaWtvYmFkIiwiYSI6ImNrcjBqNTcxcTFzaHcycHJ1ZGNvb3BldXgifQ.I4uhNg27uxfRoHqyRhOc7g'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function successLocation(position) {
  console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15,
  })
  map.addControl(new mapboxgl.NavigationControl())
  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    'top-left'
  )
}
