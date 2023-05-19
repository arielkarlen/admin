'use strict';

/**
 * paylink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::paylink.paylink');
