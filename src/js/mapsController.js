import Map from './modules/yandexMapApi.js';

export default class {
    constructor() {
        this.mapsApi = new Map();

        this.init();
    }

    async init() {
        this.yandexApi = await this.mapsApi.initMap();
    };
}