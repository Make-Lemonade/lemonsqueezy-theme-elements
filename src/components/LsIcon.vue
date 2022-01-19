<template>
    <span :id="id" class="lsq-element" :style="style">
        <span v-html="iconValue" v-if="iconValue" />
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" v-else>
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
            />
        </svg>
    </span>
</template>

<script>
import element from '../mixins/element';

export default {
    name: 'LsIcon',

    mixins: [element],

    props: {
        id: {
            type: String,
            required: true,
        },
        iconSet: {
            type: String,
            default: 'iconic',
            input: {
                type: 'select',
                label: 'Icon Set',
                options: [
                    {
                        label: 'Iconic',
                        value: 'iconic',
                    },
                ],
            },
        },
        icon: {
            type: String,
            default: '',
            input: {
                type: 'iconpicker',
                label: 'Icon',
            },
        },
        size: {
            type: String,
            default: '40px',
            input: {
                type: 'text',
                label: 'Size',
                placeholder: '40px',
                validate: 'string',
            },
        },
        backgroundColor: {
            type: String,
            default: '#7047eb',
            input: {
                type: 'color',
                label: 'Background Color',
                placeholder: '#7047eb',
                validate: 'string',
            },
        },
        color: {
            type: String,
            default: '#ffffff',
            input: {
                type: 'color',
                label: 'Color',
                placeholder: '#ffffff',
                validate: 'string',
            },
        },
        borderRadius: {
            type: String,
            default: '40px',
            input: {
                type: 'text',
                label: 'Border Radius',
                placeholder: '40px',
                validate: 'string',
            },
        },
    },

    computed: {
        iconValue() {
            return this.elementValue('icon');
        },
        style() {
            let style = {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            };

            if (this.elementValue('size')) {
                style.width = this.elementValue('size');
                style.height = this.elementValue('size');
            }
            if (this.elementValue('backgroundColor')) {
                style.backgroundColor = this.elementValue('backgroundColor');
            }
            if (this.elementValue('color')) {
                style.color = this.elementValue('color');
            }
            if (this.elementValue('borderRadius')) {
                style.borderRadius = this.elementValue('borderRadius');
            }

            return style;
        },
    },
};
</script>
