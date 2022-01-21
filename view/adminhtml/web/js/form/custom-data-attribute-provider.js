/**
 * Copyright © element119. All rights reserved.
 * See LICENCE.txt for licence details.
 */
define([
    'Magento_Ui/js/form/provider',
    'Magento_PageBuilder/js/events'
], function (Provider, events) {
    'use strict';

    return Provider.extend({
        /**
         * @inheritdoc
         */
        initClient: function () {
            return this;
        },

        /**
         * @inheritdoc
         */
        save: function () {
            events.trigger('customDataAttributes:saveAfter', this.get('data'));

            return this;
        }
    });
});
