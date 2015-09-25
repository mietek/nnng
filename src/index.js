"use strict";

var proj4 = require("proj4");

proj4.defs("OSGB36", "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs");

var OSGB36 = proj4.defs("OSGB36");
var WGS84  = proj4.defs("WGS84");

var proj = proj4(OSGB36, WGS84);

module.exports = {
  from: function(x, y) {
    var res = proj.forward([x, y]);
    var lat = res[1];
    var lon = res[0];
    return [lat, lon];
  },

  to: function(lat, lon) {
    return proj.inverse([lon, lat]);
  }
};
