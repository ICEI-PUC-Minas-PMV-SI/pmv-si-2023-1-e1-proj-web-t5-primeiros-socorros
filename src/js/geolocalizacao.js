function success(position) {
  console.log(position.coords.latitude, position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(success);
