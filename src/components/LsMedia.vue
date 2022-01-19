<template>
    <img
        :id="id"
        :src="urlValue"
        class="lsq-element"
        v-if="type === 'image' && urlValue"
    >
    <video width="620" controls v-else-if="type === 'video' && urlValue">
        <source :src="urlValue" type="video/mp4">
    </video>
</template>

<script>
import element from '../mixins/element';

export default {
    name: 'LsMedia',

    mixins: [element],

    props: {
        id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'image',
            input: {
                type: 'select',
                label: 'Type',
                options: [
                    {
                        label: 'Image',
                        value: 'image',
                    },
                    {
                        label: 'Video',
                        value: 'video',
                    },
                ],
            },
        },
        url: {
            type: String,
            default: '',
            input: {
                type: 'file',
                label: 'Media',
                validate: 'url',
            },
        },
    },

    computed: {
        urlValue() {
            return this.elementValue('url');
        },
    },
};
</script>
