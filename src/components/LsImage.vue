<template>
    <img :id="id" :src="srcValue" class="lsq-element" v-if="srcValue">
</template>

<script>
import element from '../mixins/element';

export default {
    name: 'LsImage',

    mixins: [element],

    props: {
        id: {
            type: String,
            required: true,
        },
        src: {
            type: String,
            default: '',
            input: {
                type: 'file',
                label: 'Image',
            },
        },
    },

    computed: {
        srcValue() {
            return this.elementValue('src');
        },
    },
};
</script>
