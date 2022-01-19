<template>
    <div>
        <div>
            <h1>LsText</h1>
            <LsText id="text-default">
                This is some default text
            </LsText>
            <LsText id="text-custom">
                This is some default text
            </LsText>
            <LsText id="text-tag" tag="div">
                This text is in a &lt;div&gt; tag
            </LsText>
        </div>
        <div>
            <h1>LsHeading</h1>
            <LsHeading id="heafing-1">
                This is an h1 heading
            </LsHeading>
            <LsHeading :level="2" id="heading-2">
                This is an h2 heading
            </LsHeading>
            <LsHeading :level="3" id="heading-3">
                This is an h2 heading
            </LsHeading>
        </div>
        <div>
            <h1>LsMedia</h1>
            <LsMedia
                id="media-1"
                type="image"
                url="https://via.placeholder.com/200"
            />
            <LsMedia
                id="media-2"
                type="image"
                url="https://via.placeholder.com/200"
            />
            <br>
            <LsMedia
                id="media-3"
                type="video"
                url="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
            />
        </div>
        <div>
            <h1>LsButton</h1>
            <LsButton id="button-1" link="https://example.com">
                This is a button
            </LsButton>
            <br>
            <LsButton id="button-2" link="https://example.com">
                This is a button
            </LsButton>
        </div>
        <div>
            <h1>LsIcon</h1>
            <LsIcon id="icon-1" />
            <br>
            <LsIcon id="icon-2" icon="anchor" />
        </div>
        <div>
            <h1>LsAccordion</h1>
            <LsAccordion
                id="accordion-1"
                :items="[
                    {
                        title: 'Item 1',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum libero eu feugiat sodales. Praesent sed tortor libero.',
                        open: true,
                    },
                    {
                        title: 'Item 2',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum libero eu feugiat sodales. Praesent sed tortor libero.',
                    },
                    {
                        title: 'Item 3',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum libero eu feugiat sodales. Praesent sed tortor libero.',
                    },
                ]"
            />
            <LsAccordion
                id="accordion-2"
                :items="[
                    {
                        title: 'Item 1',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum libero eu feugiat sodales. Praesent sed tortor libero.',
                    },
                    {
                        title: 'Item 2',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum libero eu feugiat sodales. Praesent sed tortor libero.',
                    },
                    {
                        title: 'Item 3',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum libero eu feugiat sodales. Praesent sed tortor libero.',
                    },
                ]"
            />
            <LsAccordion
                id="accordion-3"
                :items="[
                    {
                        title: 'Slot Item 1',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum libero eu feugiat sodales. Praesent sed tortor libero.',
                    },
                    {
                        title: 'Slot Item 2',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum libero eu feugiat sodales. Praesent sed tortor libero.',
                    },
                    {
                        title: 'Slot Item 3',
                        content:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum libero eu feugiat sodales. Praesent sed tortor libero.',
                    },
                ]"
            >
                <template #item="{ item }">
                    <summary style="color: red">
                        {{ item.title }}
                    </summary>
                    <p>{{ item.content }}</p>
                </template>
            </LsAccordion>
        </div>
        <div>
            <h1>LsMenu</h1>
            <LsMenu
                id="menu-1"
                :items="[
                    {
                        label: 'Item 1',
                        link: 'https://example.com',
                    },
                    {
                        label: 'Item 2',
                        link: 'https://example.com',
                    },
                    {
                        label: 'Item 3',
                        link: 'https://example.com',
                    },
                ]"
            />
            <LsMenu
                id="menu-2"
                :items="[
                    {
                        label: 'Item 1',
                        link: 'https://example.com',
                    },
                    {
                        label: 'Item 2',
                        link: 'https://example.com',
                    },
                    {
                        label: 'Item 3',
                        link: 'https://example.com',
                    },
                ]"
            />
            <LsMenu
                id="menu-2"
                :items="[
                    {
                        label: 'Item 1',
                        link: 'https://example.com',
                    },
                    {
                        label: 'Item 2',
                        link: 'https://example.com',
                    },
                    {
                        label: 'Item 3',
                        link: 'https://example.com',
                    },
                ]"
            >
                <template #item="{ item }">
                    <span>{{ item.label }}</span>
                </template>
            </LsMenu>
        </div>
    </div>
</template>

<script>
export default {
    provide: {
        wedgeData: {
            elements: {
                'text-custom': {
                    content: 'This is some custom text',
                    fontSize: '30px',
                },
                'heading-3': {
                    content: 'This is some custom text',
                    fontSize: '30px',
                },
                'image-2': {
                    url: 'https://via.placeholder.com/200/FF0000',
                },
                'button-2': {
                    text: 'This is a custom button',
                    link: 'https://makelemonade.wtf',
                    target: '_blank',
                },
                'icon-2': {
                    size: '70px',
                    borderRadius: '8px',
                    backgroundColor: '#000000',
                },
                'accordion-2': {
                    items: [
                        {
                            title: 'Custom Item 1',
                            content: 'This is a custom item...',
                        },
                        {
                            title: 'Custom Item 2',
                            content: 'This is a custom item...',
                            open: true,
                        },
                    ],
                },
                'menu-2': {
                    items: [
                        {
                            label: 'Custom Item 1',
                            link: 'https://example.com',
                        },
                        {
                            label: 'Custom Item 2',
                            link: 'https://example.com',
                        },
                        {
                            label: 'Custom Item 3',
                            link: 'https://example.com',
                        },
                    ],
                },
            },
        },
    },
};
</script>
