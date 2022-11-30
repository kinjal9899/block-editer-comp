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

import edit from './edit';

const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;

registerBlockType('image-selector-example/image-selector', {
    title: __('Image Selector Example', 'image-selector-example'),
    icon: 'format-image',
    category: 'common',
    keywords: [
        __('Image Selector', 'image-selector-example'),
    ],

    supports: {
        align: ['full'],
    },

    attributes: {
        bgImageId: {
            type: 'number',
        },
    },

    edit,

    save() {
        return (
            <InnerBlocks.Content />
        );
    },
});

const { useBlockProps } = wp.blockEditor;

const { Button } = wp.components;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

const ALLOWED_MEDIA_TYPES = ['image'];

function MyMediaUploader({ mediaIDs, onSelect }) {
    return (
        <MediaUploadCheck>
            <MediaUpload
                onSelect={onSelect}
                allowedTypes={ALLOWED_MEDIA_TYPES}
                value={mediaIDs}
                render={({ open }) => (
                    <Button
                        onClick={open}
                        className="button button-large"
                    >{mediaIDs.length < 1 ? 'Upload/Select Images' : 'Edit'}</Button>
                )}
                gallery
                multiple
            />
        </MediaUploadCheck>
    );
}

// Note: I purposely used "slider2" in the block name.
registerBlockType('theme/slider2', {
    apiVersion: 2,
    title: 'Slider 2',
    category: 'layout',
    attributes: {
        images: {
            type: 'array',
            source: 'query',
            selector: '.slider-item',
            default: [],
            query: {
                mediaID: {
                    type: 'number',
                    source: 'attribute',
                    attribute: 'data-id',
                    selector: 'img',
                },
                mediaURL: {
                    type: 'string',
                    source: 'attribute',
                    attribute: 'src',
                    selector: 'img',
                },
                thumbnail: {
                    type: 'string',
                    source: 'attribute',
                    attribute: 'data-thumb',
                    selector: 'img',
                },
            },
        },
    },

    edit({ attributes, setAttributes }) {
        const onSelect = (items) => {
            setAttributes({
                images: items.map(item => {
                    return {
                        mediaID: parseInt(item.id, 10),
                        mediaURL: item.url,
                        thumbnail: item.sizes.thumbnail.url,
                    };
                }),
            });
        };

        const blockProps = useBlockProps();

        return (
            <div {...blockProps}>
                {attributes.images.length >= 1 ? (
                    <div className="BG_slider">
                        {attributes.images.map(item => (
                            <div className="slider-item" key={'image-' + item.mediaID}>
                                <img src={item.thumbnail || item.mediaURL} />
                            </div>
                        ))}
                    </div>
                ) : <p>Click the button and add some images to your slider! :)</p>}

                <MyMediaUploader
                    mediaIDs={attributes.images.map(item => item.mediaID)}
                    onSelect={onSelect}
                />
            </div>
        );
    },

    save({ attributes }) {
        if (attributes.images.length < 1) {
            return null;
        }

        const blockProps = useBlockProps.save({ className: 'BG_slider' });

        return (
            <div {...blockProps}>
                {attributes.images.map(item => (
                    <div className="slider-item" key={'image-' + item.mediaID}>
                        <img src={item.mediaURL} data-id={item.mediaID} data-thumb={item.thumbnail} />
                    </div>
                ))}
            </div>
        );
    },
});