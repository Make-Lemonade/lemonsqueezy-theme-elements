const LsElements = {
    install(Vue) {
        const requireWedgeComponent = require.context(
            './components',
            true, // include subdirectories
            /\.vue$/
        );
        requireWedgeComponent.keys().forEach(fileName => {
            const componentConfig = requireWedgeComponent(fileName);
            const componentName =
                fileName
                    .replace(/^.*[\\/]/, '') // Remove path
                    .replace(/\.\w+$/, ''); // Remove extension

            Vue.component(componentName, componentConfig.default || componentConfig);
        });
    }
}

export default LsElements;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(LsElements);
}
