'use strict';

/**
 * vans-for-sale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vans-for-sale.vans-for-sale');
