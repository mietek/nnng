_nnng_
======

_[“No! Not National Grid!”](http://www.ordnancesurvey.co.uk/docs/support/guide-coordinate-systems-great-britain.pdf)_

Coordinate transformation between OSGB36 and WGS84 in JavaScript.  Uses the [Proj4js](http://proj4js.org/) library.


Usage
-----

```
$ npm install --save nnng
```


### Example

```js
var nnng = require("nnng");

nnng.from(651409, 313177);
// [ 52.65797660129558, 1.716038442825891 ]

nnng.to(52.6579, 1.71603);
// [ 651408.871587621, 313168.4539022284 ]
```


Documentation
-------------

### nnng.from(x, y)

Takes an OSGB36 grid reference, or northing/easting.  Returns a WGS84 longitude/latitude.


### nnng.to(lon, lat)

Takes a WGS84 longitude/latitude.  Returns an OSGB36 grid reference, or northing/easting.


About
-----

Made by [Miëtek Bak](https://mietek.io/).  Published under the [MIT X11 license](LICENSE.md).
