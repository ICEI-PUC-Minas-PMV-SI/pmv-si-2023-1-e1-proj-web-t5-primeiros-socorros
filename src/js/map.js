
function initMap() {
  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: latitude, lng: longitude },
      zoom: 13,
      mapTypeControl: false,
    });

    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");
    const biasInputElement = document.getElementById("use-location-bias");
    const strictBoundsInputElement =
      document.getElementById("use-strict-bounds");
    const options = {
      fields: ["formatted_address", "geometry", "name"],
      strictBounds: false,
      types: ["establishment"],
    };

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

    const autocomplete = new google.maps.places.Autocomplete(
      input,
      options
    );

    autocomplete.bindTo("bounds", map);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");

    infowindow.setContent(infowindowContent);

    const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29),
    });

    autocomplete.addListener("place_changed", () => {
      infowindow.close();
      marker.setVisible(false);

      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert(
          "No details available for input: '" + place.name + "'"
        );
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      infowindowContent.children["place-name"].textContent = place.name;
      infowindowContent.children["place-address"].textContent =
        place.formatted_address;
      infowindow.open(map, marker);
    });

    function setupClickListener(id, types) {
      const radioButton = document.getElementById(id);

      radioButton.addEventListener("click", () => {
        autocomplete.setTypes(types);
        input.value = "";
      });
    }

    setupClickListener("changetype-all", []);
    setupClickListener("changetype-address", ["address"]);
    setupClickListener("changetype-establishment", ["establishment"]);
    setupClickListener("changetype-geocode", ["geocode"]);
    setupClickListener("changetype-cities", ["(cities)"]);
    setupClickListener("changetype-regions", ["(regions)"]);
    biasInputElement.addEventListener("change", () => {
      if (biasInputElement.checked) {
        autocomplete.bindTo("bounds", map);
      } else {
        autocomplete.unbind("bounds");
        autocomplete.setBounds({
          east: 180,
          west: -180,
          north: 90,
          south: -90,
        });
        strictBoundsInputElement.checked = biasInputElement.checked;
      }

      input.value = "";
    });
    strictBoundsInputElement.addEventListener("change", () => {
      autocomplete.setOptions({
        strictBounds: strictBoundsInputElement.checked,
      });
      if (strictBoundsInputElement.checked) {
        biasInputElement.checked = strictBoundsInputElement.checked;
        autocomplete.bindTo("bounds", map);
      }

      input.value = "";
    });
  }

  navigator.geolocation.getCurrentPosition(position => success(position));
}

window.initMap = initMap;
