// src/index.js
//const { registerBlockType } = wp.blocks;

// registerBlockType('myguten-block/myguten-block', {
//     title: 'Basic Example',
//     icon: 'smiley',
//     category: 'layout',
//     edit: ({ className }) => <div className={className}>Hello World!</div>,
//     save: () => <div>Hello World!</div>,
// });

import './attributes.js';
import './inspector.js';

const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar,
    InspectorControls, ColorPalette } = wp.editor;

const result = registerBlockType('myguten-block/myguten-block', {
    title: 'Basic Example',
    icon: 'smiley',
    category: 'layout',
    attributes: {
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
    edit: (props) => {
        console.log('edit-props', props);
        let { attributes: { content, contentStyle }, setAttributes, className } = props;

        const onChangeContent = (newContent) => {
            setAttributes({ content: newContent });
        };

        const onChangeAlignment = (newAlignment) => {
            let alignmentValue = (newAlignment === undefined) ? 'none' : newAlignment;
            setAttributes({
                contentStyle: {
                    color: contentStyle.color,
                    textAlign: alignmentValue
                }
            });
        };

        const onChangeTextColor = (newColor) => {
            let newColorValue = (newColor === undefined) ? 'none' : newColor;
            setAttributes({
                contentStyle: {
                    color: newColorValue,
                    textAlign: contentStyle.textAlign
                }
            });
        };

        return (
            <div>
                {
                    <BlockControls>
                        <AlignmentToolbar
                            value={contentStyle.textAlign}
                            onChange={onChangeAlignment}
                        />
                    </BlockControls>
                }
                {
                    <InspectorControls>
                        <ColorPalette // Element Tag for Gutenberg standard colour selector
                            onChange={onChangeTextColor} // onChange event callback
                        />
                    </InspectorControls>
                }
                <RichText
                    tagName="p"
                    style={contentStyle}
                    className={className}
                    onChange={onChangeContentp}
                    value={content}
                />
            </div>
        );
    },
    save: (props) => {
        console.log('save-props', props);
        return (
            <RichText.Content style={props.attributes.contentStyle} tagName="p" value={props.attributes.content} />
        );
        
    }
});

