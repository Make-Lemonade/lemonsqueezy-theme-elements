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
            <h1>LsImage</h1>
            <LsImage id="image-1" src="https://via.placeholder.com/200" />
            <LsImage id="image-2" src="https://via.placeholder.com/200" />
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
                    src: 'https://via.placeholder.com/200/FF0000',
                },
                'button-2': {
                    text: 'This is a custom button',
                    link: 'https://makelemonade.wtf',
                    target: '_blank',
                },
            },
        },
    },
};
</script>
