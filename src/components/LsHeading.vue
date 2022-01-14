<template>
    <component
        :is="`h${levelValue}`"
        :id="id"
        class="lsq-element"
        :style="style"
    >
        <span v-html="contentValue" v-if="contentValue" />
        <slot v-else />
    </component>
</template>

<script>
import element from '../mixins/element';

export default {
    name: 'LsHeading',

    mixins: [element],

    props: {
        id: {
            type: String,
            required: true,
        },
        level: {
            type: Number,
            default: 1,
            validator: function (value) {
                return value >= 1 && value <= 6;
            },
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
        levelValue() {
            return this.elementValue('level');
        },
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
};
</script>
