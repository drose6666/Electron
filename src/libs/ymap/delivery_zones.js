ymaps.ready(init);

let myMap, deliveryPoint, deliveryZones;
let cityInput, addressInput;
let checkTimer;

function init() {
    myMap = new ymaps.Map('map', {
        center: [30.264981955459618, 59.9567962610097],
        zoom: 9,
        controls: ['geolocationControl', 'searchControl']
    });

    deliveryPoint = new ymaps.GeoObject({
        geometry: { type: 'Point' },
        properties: { iconCaption: 'Адрес' }
    }, {
        preset: 'islands#blackDotIconWithCaption',
        draggable: true,
        iconCaptionMaxWidth: '215'
    });

    let searchControl = myMap.controls.get('searchControl');
    searchControl.options.set({ noPlacemark: true, placeholderContent: 'Введите адрес доставки' });
    myMap.geoObjects.add(deliveryPoint);

    // Получаем ссылки на поля ввода
    cityInput = document.getElementById('city');
    addressInput = document.getElementById('address');

    function onZonesLoad(json) {
        // Добавляем зоны на карту.
        deliveryZones = ymaps.geoQuery(json).addToMap(myMap);
        // Задаём цвет и контент балунов полигонов.
        deliveryZones.each(function (obj) {
            obj.options.set({
                fillColor: obj.properties.get('fill'),
                fillOpacity: obj.properties.get('fill-opacity'),
                strokeColor: obj.properties.get('stroke'),
                strokeWidth: obj.properties.get('stroke-width'),
                strokeOpacity: obj.properties.get('stroke-opacity')
            });
            obj.properties.set('balloonContent', obj.properties.get('description'));
        });

        // При изменении значений в полях ввода вызываем функцию проверки
        cityInput.addEventListener('input', checkDeliveryZone);
        addressInput.addEventListener('input', function () {
            // Очищаем предыдущий таймер перед установкой нового
            clearTimeout(checkTimer);
            // Устанавливаем новый таймер, который сработает спустя 1.5 секунды после последнего изменения
            checkTimer = setTimeout(checkDeliveryZone, 1500);
        });

        function checkDeliveryZone() {
            let city = cityInput.value;
            let address = addressInput.value.trim();

            // Если адрес не введен, предполагаем, что город уже указан в зоне доставки.
            if (address !== '') {
                let geocode = city + ', ' + address;

                ymaps.geocode(geocode).then(function (res) {
                    // Получаем первый объект результата геокодирования
                    let geoObject = res.geoObjects.get(0);

                    // Проверяем точность результата геокодирования
                    let metaData = geoObject.properties.get('metaDataProperty.GeocoderMetaData');
                    let precision = metaData && metaData.precision;

                    // Проверяем, есть ли у объекта геометрия (координаты)
                    if (geoObject && geoObject.geometry && precision === 'exact') {
                        let coordinates = geoObject.geometry.getCoordinates();
                        let polygon = deliveryZones.searchContaining(coordinates).get(0);

                        // console.log(geocode, coordinates, polygon);

                        if (polygon) {
                            deliveryZones.setOptions('fillOpacity', 0.4);
                            polygon.options.set('fillOpacity', 0.8);
                            deliveryPoint.geometry.setCoordinates(coordinates);
                            deliveryPoint.options.set('iconColor', polygon.properties.get('fill'));

                            alert(polygon.properties.get('description'));
                        } else {
                            deliveryZones.setOptions('fillOpacity', 0.4);
                            alert(`Адрес: "${city + address}" не соответствует ни одной из зон доставки`);
                        }
                    } else {
                        // Если геокодирование не вернуло координат, считаем адрес некорректным
                        alert(`Некорректный адрес: "${city + address}"`);
                    }
                });
            } else {
                // Если адрес не введен, предзаполняем поле "Город" значением "Санкт-Петербург"
                cityInput.value = 'Санкт-Петербург';
                // Предполагаем, что город уже указан в зоне доставки.
                alert('Доставка курьером осуществляется только по Санкт-Петербургу в пределах указанных зон');
            }
        }
    }

    $.ajax({
        url: '../../libs/ymap/data.geojson',
        dataType: 'json',
        success: onZonesLoad
    });
}