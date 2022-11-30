/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

// edit.js
// Load dependencies
const {
  __
} = wp.i18n;
const {
  Component,
  Fragment
} = wp.element;
const {
  InspectorControls,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck
} = wp.editor;
const {
  PanelBody,
  Button,
  ResponsiveWrapper,
  Spinner
} = wp.components;
const {
  compose
} = wp.compose;
const {
  withSelect
} = wp.data;
const ALLOWED_MEDIA_TYPES = ['image'];

class ImageSelectorEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes,
      bgImage,
      className
    } = this.props;
    const {
      bgImageId
    } = attributes;
    const instructions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, __('To edit the background image, you need permission to upload media.', 'image-selector-example'));
    let styles = {};

    if (bgImage && bgImage.source_url) {
      styles = {
        backgroundImage: `url(${bgImage.source_url})`
      };
    }

    const onUpdateImage = image => {
      setAttributes({
        bgImageId: image.id
      });
    };

    const onRemoveImage = () => {
      setAttributes({
        bgImageId: undefined
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Background settings', 'image-selector-example'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-image-selector-example-image"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, {
      fallback: instructions
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      title: __('Background image', 'image-selector-example'),
      onSelect: onUpdateImage,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: bgImageId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          className: !bgImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, !bgImageId && __('Set background image', 'image-selector-example'), !!bgImageId && !bgImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null), !!bgImageId && bgImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveWrapper, {
          naturalWidth: bgImage.media_details.width,
          naturalHeight: bgImage.media_details.height
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: bgImage.source_url,
          alt: __('Background image', 'image-selector-example')
        })));
      }
    })), !!bgImageId && bgImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      title: __('Background image', 'image-selector-example'),
      onSelect: onUpdateImage,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: bgImageId,
      render: _ref2 => {
        let {
          open
        } = _ref2;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, __('Replace background image', 'image-selector-example'));
      }
    })), !!bgImageId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, __('Remove background image', 'image-selector-example')))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className,
      style: styles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, null)));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect((select, props) => {
  const {
    getMedia
  } = select('core');
  const {
    bgImageId
  } = props.attributes;
  return {
    bgImage: bgImageId ? getMedia(bgImageId) : null
  };
}))(ImageSelectorEdit));

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");

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
    }
  },
  edit: function (props) {
    const className = props.className;
    const setAttributes = props.setAttributes; // Original element with onChange event as an anonymous function

    const text = el(TextControl, {
      label: 'write here name of company',
      value: props.attributes.blockValue,
      key: 'companyName',
      onChange: function (value) {
        setAttributes({
          blockValue: value
        });
      }
    }); //Add two new elements

    const secondText = el(TextControl, {
      label: 'Write your name',
      value: props.attributes.name,
      key: 'username',
      onChange: function (value) {
        setAttributes({
          name: value
        });
      }
    });
    const textArea = el(TextareaControl, {
      label: 'Write a description',
      value: props.attributes.desc,
      key: 'desc',
      onChange: function (value) {
        setAttributes({
          desc: value
        });
      }
    });
    return el('div', {
      className: className
    }, // Children of the main div as an array
    [text, secondText, textArea]);
  },
  save: function (props) {//return null;
  }
});

const {
  __
} = wp.i18n;
const {
  InnerBlocks
} = wp.editor;
registerBlockType('image-selector-example/image-selector', {
  title: __('Image Selector Example', 'image-selector-example'),
  icon: 'format-image',
  category: 'common',
  keywords: [__('Image Selector', 'image-selector-example')],
  supports: {
    align: ['full']
  },
  attributes: {
    bgImageId: {
      type: 'number'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  save() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }

});
const {
  useBlockProps
} = wp.blockEditor;
const {
  Button
} = wp.components;
const {
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];

function MyMediaUploader(_ref) {
  let {
    mediaIDs,
    onSelect
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    onSelect: onSelect,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: mediaIDs,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
        onClick: open,
        className: "button button-large"
      }, mediaIDs.length < 1 ? 'Upload/Select Images' : 'Edit');
    },
    gallery: true,
    multiple: true
  }));
} // Note: I purposely used "slider2" in the block name.


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
          selector: 'img'
        },
        mediaURL: {
          type: 'string',
          source: 'attribute',
          attribute: 'src',
          selector: 'img'
        },
        thumbnail: {
          type: 'string',
          source: 'attribute',
          attribute: 'data-thumb',
          selector: 'img'
        }
      }
    }
  },

  edit(_ref3) {
    let {
      attributes,
      setAttributes
    } = _ref3;

    const onSelect = items => {
      setAttributes({
        images: items.map(item => {
          return {
            mediaID: parseInt(item.id, 10),
            mediaURL: item.url,
            thumbnail: item.sizes.thumbnail.url
          };
        })
      });
    };

    const blockProps = useBlockProps();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, attributes.images.length >= 1 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "BG_slider"
    }, attributes.images.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slider-item",
      key: 'image-' + item.mediaID
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.thumbnail || item.mediaURL
    })))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Click the button and add some images to your slider! :)"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyMediaUploader, {
      mediaIDs: attributes.images.map(item => item.mediaID),
      onSelect: onSelect
    }));
  },

  save(_ref4) {
    let {
      attributes
    } = _ref4;

    if (attributes.images.length < 1) {
      return null;
    }

    const blockProps = useBlockProps.save({
      className: 'BG_slider'
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, attributes.images.map(item => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "slider-item",
      key: 'image-' + item.mediaID
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.mediaURL,
      "data-id": item.mediaID,
      "data-thumb": item.thumbnail
    }))));
  }

});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map