export default class {
    constructor () {};

    initMap() {
        return new Promise ((resolve, reject) => ymaps.ready(resolve)
            .then(() => {
                this.map = new ymaps.Map('map', {
                    center: [55.78874, 49.12214],
                    zoom: 12
                });
            })
        );
    }
}
