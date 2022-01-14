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
            },
        },
    },
};
</script>
