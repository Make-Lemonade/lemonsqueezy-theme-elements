export default {
    inject: ['wedgeData'],

    methods: {
        elementValue(key) {
            if (
                this.wedgeData.elements[this.id] &&
                this.wedgeData.elements[this.id][key]
            ) {
                return this.wedgeData.elements[this.id][key];
            }
            if (this[key]) {
                return this[key];
            }

            return null;
        },
    }
}
