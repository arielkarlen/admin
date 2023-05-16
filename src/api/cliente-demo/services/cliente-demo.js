'use strict';

/**
 * cliente-demo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cliente-demo.cliente-demo');
