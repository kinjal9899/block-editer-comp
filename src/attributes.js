wp.hooks.addFilter('blocks.registerBlockType', 'myguten-block/src/attributes', function (settings, name) {
    settings = window.lodash.assign({}, settings, {
        attributes: window.lodash.assign({}, settings.attributes, {
            inlineStyle: {
                type: 'string',
                default: "",
            }
        })
    });
    return settings;
});

wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'myguten-block/src/inspector', function (props, name, atts) {

    if (atts['inlineStyle'] != "")
        return lodash.assign(props, { style: atts['inlineStyle'] });

    return props;
});