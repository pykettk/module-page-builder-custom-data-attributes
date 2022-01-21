/**
 * Copyright © element119. All rights reserved.
 * See LICENCE.txt for licence details.
 */
define([
    'underscore',
    'Magento_PageBuilder/js/utils/object'
], function (_underscore, _object) {
    let CustomDataAttributes = /*#__PURE__*/ function () {
        'use strict';

        function CustomDataAttributes() {}

        let _proto = CustomDataAttributes.prototype;

        /**
         * Convert value to internal format.
         *
         * @param value string
         * @returns {string | object}
         */
        _proto.fromDom = function fromDom(value) {
            if (value && value !== '') {
                return JSON.parse(value);
            }

            return [];
        };

        /**
         * Convert value to knockout format.
         *
         * @param name string
         * @param data Object
         * @returns {string | object}
         */
        _proto.toDom = function toDom(name, data) {
            let content = (0, _object.get)(data, name);

            if (_underscore.isString(content) && content !== '') {
                content = JSON.parse(content);
            }

            if (content && Object.keys(content).length) {
                return JSON.stringify(content);
            }

            return JSON.stringify([]);
        };

        return CustomDataAttributes;
    }();

    return CustomDataAttributes;
});
//# sourceMappingURL=custom-data-attributes.js.map
