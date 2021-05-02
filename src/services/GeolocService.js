class GeolocService {
  constructor() {
    if ("geolocation" in navigator) {
      console.log("Géolocalisation disponible");
    } else {
      console.error("Géolocalisation indisponible");
    }
  }

  watchLocation(callback) {
    navigator.geolocation.watchPosition(callback);
  }

  stopWatchLocation() {
    navigator.geolocation.watchPosition();
  }

  getDistanceFromLatLonInM(location1, location2) {
    const lat1 = location1.latitude,
      lon1 = location1.longitude;
    const lat2 = location2.latitude,
      lon2 = location2.longitude;
    var R = 6371000; // Radius of the earth in m
    var dLat = this.deg2rad(lat2 - lat1);
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in m
    return d;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
}

export default new GeolocService();
