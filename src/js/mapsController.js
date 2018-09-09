import Map from './modules/yandexMapApi.js';

export default class {
    constructor() {
        this.mapsApi = new Map();

        this.init();
    }

    async init() {
        this.yandexApi = await this.mapsApi.initMap();

        this.yandexApi.events.add('click', async(e) => {
            const position = await this.mapsApi.getMapPosition(e);

            this.mapsApi.createPlacemark(position);
        });
    };
}