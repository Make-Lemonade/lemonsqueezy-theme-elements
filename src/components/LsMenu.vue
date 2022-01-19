<template>
    <menu :id="id" class="lsq-element" v-if="itemsValue.length">
        <li v-for="(item, index) in itemsValue" :key="index">
            <slot name="item" :item="item">
                <a :href="item.link">{{ item.label }}</a>
            </slot>
        </li>
    </menu>
</template>

<script>
import element from '../mixins/element';

export default {
    name: 'LsMenu',

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
                type: 'menu',
                label: 'Items',
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
