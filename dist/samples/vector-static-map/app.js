(function(exports) {
  "use strict";

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }

    return target;
  }

  // Initialize and add the side by side maps
  function initMap() {
    var sharedOptions = {
      mapId: "ed1309c122a3dfcb",
      center: {
        lat: 47.609414458375674,
        lng: -122.33897030353548
      },
      zoom: 17,
      disableDefaultUI: true,
      gestureHandling: "none"
    };
    new google.maps.Map(
      document.getElementById("dynamic"),
      _objectSpread2(
        _objectSpread2({}, sharedOptions),
        {},
        {
          useStaticMap: false
        }
      )
    );
    new google.maps.Map(
      document.getElementById("static"),
      _objectSpread2(
        _objectSpread2({}, sharedOptions),
        {},
        {
          useStaticMap: true
        }
      )
    );
  }

  exports.initMap = initMap;
})((this.window = this.window || {}));