<template>
    <div :id="id" class="lsq-element" v-if="itemsValue.length">
        <details
            :open="item.open || false"
            v-for="(item, index) in itemsValue"
            :key="index"
        >
            <slot name="item" :item="item">
                <summary>{{ item.title }}</summary>
                <p>{{ item.content }}</p>
            </slot>
        </details>
    </div>
</template>

<script>
import element from '../mixins/element';

export default {
    name: 'LsAccordion',

    mixins: [element],

    props: {
        id: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            default: () => [],
            input: {
                type: 'repeater',
                label: 'Items',
                fields: {
                    title: {
                        type: String,
                        default: '',
                        input: {
                            type: 'text',
                            label: 'Title',
                            placeholder: 'Enter title here...',
                            validate: 'string',
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
                    open: {
                        type: Boolean,
                        default: false,
                        input: {
                            type: 'checkbox',
                            label: 'Open',
                        },
                    },
                },
            },
        },
    },

    computed: {
        itemsValue() {
            return this.elementValue('items');
        },
    },
};
</script>
