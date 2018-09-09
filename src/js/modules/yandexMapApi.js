export default class {
    constructor () {}

    initMap() {
        return new Promise ((resolve, reject) => ymaps.ready(resolve)
            .then(() => {
                this.map = new ymaps.Map('map', {
                    center: [55.78874, 49.12214],
                    zoom: 12
                });

                this.cluster = new ymaps.Clusterer({
                    clusterDisabledClickZoom: true,
                    clusterOpenBalloonOnClick: true,
                    clusterBalloonContentLayout: 'cluster#balloonCarousel'
                });

                this.map.geoObjects.add(this.cluster);

                return this.map;
            })
        );
    }

    async getMapPosition(e) {
        const coords = e.get('coords');
        const geocode = await ymaps.geocode(coords);
        const address = geocode.geoObjects.get(0).properties.get('text');

        return {
            address,
            coords
        }
    }

    createPlacemark(pos) {
        const myPlacemark = new ymaps.Placemark({
            hintContent: pos.address,
            balloonContent: `Мы кликнули на ${pos.address}`
        });

        this.cluster.add(myPlacemark);
    }
}
