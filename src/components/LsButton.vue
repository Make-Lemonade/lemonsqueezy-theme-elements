<template>
    <component
        :is="tag"
        :href="linkValue"
        :target="targetValue"
        :id="id"
        class="lsq-element"
        :style="style"
    >
        <span v-html="textValue" v-if="textValue" />
        <slot v-else />
    </component>
</template>

<script>
import element from '../mixins/element';

export default {
    name: 'LsButton',

    mixins: [element],

    props: {
        id: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
            default: 'a',
        },
        text: {
            type: String,
            default: '',
            input: {
                type: 'text',
                label: 'Text',
                placeholder: 'Call to action...',
                validate: 'string',
            },
        },
        link: {
            type: String,
            default: '',
            input: {
                type: 'text',
                label: 'Link',
                placeholder: 'https://example.com',
                validate: 'string',
            },
        },
        target: {
            type: String,
            default: '_self',
            input: {
                type: 'select',
                label: 'Target',
                options: [
                    {
                        label: 'Same Window',
                        value: '_self',
                    },
                    {
                        label: 'New Window',
                        value: '_blank',
                    },
                ],
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
    },

    computed: {
        textValue() {
            return this.elementValue('text');
        },
        linkValue() {
            return this.elementValue('link');
        },
        targetValue() {
            return this.elementValue('target');
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
