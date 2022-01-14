<template>
    <p :id="id" class="lsq-element" :style="style">
        <span v-html="contentValue" v-if="contentValue" />
        <slot v-else />
    </p>
</template>

<script>
export default {
    name: 'LsText',

    inject: ['wedgeData'],

    props: {
        id: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            default: '',
            input: {
                type: 'textarea',
                label: 'Content',
                placeholder: 'Enter content here...',
                validate: 'string',
            },
        },
        fontSize: {
            type: String,
            default: null,
            input: {
                type: 'text',
                label: 'Font Size',
                placeholder: '16px',
                validate: 'string',
            },
        },
        fontWeight: {
            type: String,
            default: null,
            input: {
                type: 'text',
                label: 'Font Weight',
                placeholder: 'bold',
                validate: 'string',
            },
        },
        lineHeight: {
            type: String,
            default: null,
            input: {
                type: 'text',
                label: 'Line Height',
                placeholder: '1.5em',
                validate: 'string',
            },
        },
    },

    computed: {
        contentValue() {
            return this.elementValue('content');
        },
        style() {
            let style = {};

            if (this.elementValue('fontSize')) {
                style.fontSize = this.elementValue('fontSize');
            }
            if (this.elementValue('fontWeight')) {
                style.fontWeight = this.elementValue('fontWeight');
            }
            if (this.elementValue('lineHeight')) {
                style.lineHeight = this.elementValue('lineHeight');
            }

            return style;
        },
    },

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
    },
};
</script>
