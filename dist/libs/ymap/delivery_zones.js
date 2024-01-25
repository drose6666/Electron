ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
      center: [30.264981955459618, 59.9567962610097],
      zoom: 9,
      controls: ["geolocationControl", "searchControl"],
    }),
    deliveryPoint = new ymaps.GeoObject(
      {
        geometry: { type: "Point" },
        properties: { iconCaption: "Адрес" },
      },
      {
        preset: "islands#blackDotIconWithCaption",
        draggable: true,
        iconCaptionMaxWidth: "215",
      }
    ),
    searchControl = myMap.controls.get("searchControl");
  searchControl.options.set({
    noPlacemark: true,
    placeholderContent: "Введите адрес доставки",
  });
  myMap.geoObjects.add(deliveryPoint);

  var delayTimer; // Таймер для задержки выполнения проверки

  function onZonesLoad(json) {
    var deliveryZones = ymaps.geoQuery(json).addToMap(myMap);
    deliveryZones.each(function (obj) {
      obj.options.set({
        fillColor: obj.properties.get("fill"),
        fillOpacity: obj.properties.get("fill-opacity"),
        strokeColor: obj.properties.get("stroke"),
        strokeWidth: obj.properties.get("stroke-width"),
        strokeOpacity: obj.properties.get("stroke-opacity"),
      });
      obj.properties.set("balloonContent", obj.properties.get("description"));
    });

    searchControl.events.add("resultshow", function (e) {
      highlightResult(searchControl.getResultsArray()[e.get("index")]);
    });

    myMap.controls
      .get("geolocationControl")
      .events.add("locationchange", function (e) {
        highlightResult(e.get("geoObjects").get(0));
      });

    deliveryPoint.events.add("dragstart", function () {
      deliveryPoint.properties.set({ iconCaption: "", balloonContent: "" });
      deliveryPoint.options.set("iconColor", "black");
    });

    deliveryPoint.events.add("dragend", function () {
      clearTimeout(delayTimer); // Очищаем таймер перед каждым перемещением
      delayTimer = setTimeout(function () {
        highlightResult(deliveryPoint);
      }, 2000); // Устанавливаем таймер на 2 секунды
    });

    // Функция для поиска адреса по значениям полей Город и Адрес из другой формы
    function searchAddressByFields() {
      var country = document.getElementById("country").value;
      var city = document.getElementById("city").value;
      var address = document.getElementById("address").value;
      var combinedAddress = country + " " + city + " " + address;

      ymaps.geocode(combinedAddress).then(function (res) {
        var obj = res.geoObjects.get(0);
        if (obj) {
          deliveryPoint.geometry.setCoordinates(obj.geometry.getCoordinates());
          highlightResult(deliveryPoint);
        } else {
          alert("Адрес не найден");
        }
      });
    }

    // Вызываем поиск при изменении значений в полях Город и Адрес
    document.getElementById("city").addEventListener("input", function () {
      searchAddressByFields();
    });

    document.getElementById("address").addEventListener("input", function () {
      searchAddressByFields();
    });

    function highlightResult(obj) {
      var coords = obj.geometry.getCoordinates(),
        polygon = deliveryZones.searchContaining(coords).get(0);

      if (polygon) {
        deliveryZones.setOptions("fillOpacity", 0.4);
        polygon.options.set("fillOpacity", 0.8);
        deliveryPoint.geometry.setCoordinates(coords);
        deliveryPoint.options.set("iconColor", polygon.properties.get("fill"));
        if (typeof obj.getThoroughfare === "function") {
          setData(obj);
        } else {
          ymaps.geocode(coords, { results: 1 }).then(function (res) {
            var obj = res.geoObjects.get(0);
            setData(obj);
          });
        }
        // Вывод alert, если адрес соответствует зоне доставки
        alert("Адрес соответствует зоне доставки: " + polygon.properties.get("description"));
      } else {
        deliveryZones.setOptions("fillOpacity", 0.4);
        deliveryPoint.geometry.setCoordinates(coords);
        deliveryPoint.properties.set({
          iconCaption: "Доставка транспортной компанией",
          balloonContent: "Cвяжитесь с оператором",
          balloonContentHeader: "",
        });
        deliveryPoint.options.set("iconColor", "black");
      }

      function setData(obj) {
        var address = [
          obj.getThoroughfare(),
          obj.getPremiseNumber(),
          obj.getPremise(),
        ].join(" ");
        if (address.trim() === "") {
          address = obj.getAddressLine();
        }
        var price = polygon.properties.get("description");
        price = price.match(/<strong>(.+)<\/strong>/)[1];
        deliveryPoint.properties.set({
          iconCaption: address,
          balloonContent: address,
          balloonContentHeader: price,
        });
      }
    }
  }

  $.ajax({
    url: "../../libs/ymap/data.geojson",
    dataType: "json",
    success: onZonesLoad,
  });
}
