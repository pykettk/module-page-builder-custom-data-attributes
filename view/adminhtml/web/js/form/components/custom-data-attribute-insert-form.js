/**
 * Copyright © element119. All rights reserved.
 * See LICENCE.txt for licence details.
 */
define([
    'Magento_Ui/js/form/components/insert-form'
], function (Insert) {
    'use strict';

    return Insert.extend({
        /**
         * Clear form content and reinsert data in argument.
         *
         * @param {Object} data
         */
        edit: function (data) {
            this.destroyInserted();
            this.render();
            this.setData(data);
        },

        /**
         * Set data for new form.
         *
         * @param {Object} data
         */
        setData: function (data) {
            let formQuery = 'index=' + this.ns;
            let dataProviderQuery = 'index=' + this.ns + '_data_source';

            this.providerData = data;
            this.externalForm = this.requestModule(formQuery);
            this.externalSource = this.requestModule(dataProviderQuery);
            this.setLinks({
                providerData: dataProviderQuery + ':data'
            }, 'exports');
        }
    });
});
