const el = wp.element.createElement;
const registerBlockType = wp.blocks.registerBlockType;
const TextControl = wp.components.TextControl;
const TextareaControl = wp.components.TextareaControl;

registerBlockType('dc-references-block/dc-references-block', {
    title: 'Title',
    icon: 'edit',
    category: 'common',

    attributes: {
        blockValue: {
            type: 'string',
            source: 'meta',
            meta: 'dc_references_block_field'
        },
        // Add two new attributes
        name: {
            type: 'string',
            source: 'meta',
            meta: 'dc_references_block_field_name'
        },
        desc: {
            type: 'string',
            source: 'meta',
            meta: 'dc_references_block_field_desc'
        },
        content: {
            type: 'array',
            source: 'children',
            selector: 'p'
        },
        contentStyle: {
            type: 'object',
            default: {
                color: 'black',
                textAlign: 'left'
            }
        }
    },

    edit: function (props) {
        const className = props.className;
        const setAttributes = props.setAttributes;

        // Original element with onChange event as an anonymous function
        const text = el(TextControl, {
            label: 'write here name of company',
            value: props.attributes.blockValue,
            key: 'companyName',
            onChange: function (value) {
                setAttributes({ blockValue: value });
            }
        });

        //Add two new elements
        const secondText = el(TextControl, {
            label: 'Write your name',
            value: props.attributes.name,
            key: 'username',
            onChange: function (value) {
                setAttributes({ name: value });
            }
        });

        const textArea = el(TextareaControl, {
            label: 'Write a description',
            value: props.attributes.desc,
            key: 'desc',
            onChange: function (value) {
                setAttributes({ desc: value });
            }
        });

        return el(
            'div',
            { className: className },
            // Children of the main div as an array
            [text, secondText, textArea]
        );
    },

    save: function (props) {
        //return null;
    }
});

